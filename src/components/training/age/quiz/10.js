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

const Age_10 =({history})=>{
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
                        10
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                Brenda is 4 years older than Walter, and Carol is twice as old as Brenda. <br/>
                Three years ago, the sum of their ages was 35.<br/>
                How old is each now?
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
                        x = Walter's age now<br/>
                        x + 4 = Brenda's age now (Brenda is 4 yrs older than Walter)<br/>
                        2(x + 4) = 2x + 8 = Carol's age now (Carol is twice as old as Brenda, used distributive property)<br/>

                        x - 3 = Walter's age 3 years ago (subtracted 3 from x)<br/>
                        x + 1 = Brenda's age 3 years ago (subtracted 3 from x + 4)<br/>
                        2x + 5 = Carol's age 3 years ago (subtracted 3 from 2x + 8)<br/>

                        (x - 3) + (x + 1) + (2x + 5) = 35 (sum of ages, 3 years ago, was 35)<br/>
                        x - 3 + x + 1 + 2x + 5 = 35 (took out parentheses)<br/>
                        4x + 3 = 35 (combined like terms)<br/>
                        4x = 32 (subtracted 3 from both sides)<br/>
                        x = 8 = Walter now (divided both sides by 4)<br/>
                        x + 4 = 12 = Brenda now (substituted 8, in for x, into x + 4)<br/>
                        2(x + 4) = 24 = Carol now (substituted 8, in for x, into 2(x + 4))<br/>

                        Walter is 8 now<br/>
                        Brenda is 12 now<br/>
                        Carol is 24 now
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_10;