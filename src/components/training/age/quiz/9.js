import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import img from '../quiz/images/age3.png';

const useStyles = makeStyles((theme) => ({
    rootText: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      }
    ,root: {

    },
    media: {
      height: 100,
      width:100
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    formControl: {
        margin: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1, 1, 0, 0),
    },
  }));

const Age_9 =({history})=>{
    const classes = useStyles();

    const colorsBackground = [
        {
            primaryColor : "#ffffff",
            secondaryColor : "#ffffff"
        },
        {
            primaryColor : "#faffe6",
            secondaryColor : "#faffe6"
        },
        {
            primaryColor : "#ffffff",
            secondaryColor : "#ffffff"
        }
    ]

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const [color1, setColor1] = React.useState(0);

    return(
        <>

            <div>
            <Card className="block-example border border-warning" style={{backgroundColor:colorsBackground[color1%5].primaryColor}}>
                <CardHeader
                    avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        9
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                Fred is 4 times as old as his niece, Selma. Ten years from now,<br/>
                he will be twice as old as she will be. How old is each now?
                  </Typography>
                </div>

                <div style={{marginLeft:'5%'}}>
                    {/* <img src={img} /> */}
                </div>

                <div style={{marginLeft:'4%',marginBottom:'50px'}}>
                <Table striped bordered hover>
                        <tbody style={{width:'100%'}}>
                            <tr>
                            {/* <td>
                                <div>
                                    <form className={classes.rootText} noValidate autoComplete="off">
                                    <TextField id="outlined-basic" label="Your answer" variant="outlined" />
                                    </form>
                                </div>
                            </td> */}
                            <td>
                                <div onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    style={{marginBottom:'0',marginLeft:'-10px',width:'95%'}}>
                                    <CardActions >
                                        <IconButton>
                                        <ExpandMoreIcon />
                                        </IconButton>
                                        <Typography>XEM ĐÁP ÁN</Typography>
                                    </CardActions>
                                </div>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <div style={{marginBottom:'20px',marginLeft:'5%'}}>
                        <Typography paragraph>
                        x = Selma's age now <br/>
                        4x = Fred's age now (Fred is 4 times as old as Selma)<br/>

                        x + 10 = Selma's age in 10 years<br/>
                        4x + 10 = Fred's age in 10 years<br/>

                        4x + 10 = 2(x + 10) (his age in 10 yrs is twice her age in 10 years)<br/>
                        4x + 10 = 2x + 20 (used distributive property)<br/>
                        2x + 10 = 20 (subtracted 2x from both sides)<br/>
                        2x = 10 (subtracted 10 from both sides)<br/>
                        x = 5 (divided both sides by 2)<br/>
                        4x = 20 (substituted 5, in for x, into 4x)<br/>

                        Selma is 5 now<br/>
                        Fred is 20 now
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_9;