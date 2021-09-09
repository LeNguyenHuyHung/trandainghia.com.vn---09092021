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
import img from '../quiz/images/age17.png';

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

const Age_17 =({history})=>{
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
                        17
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                Sum of the ages of Sam and his father is  47  years.<br/>
                When Sam reaches his fathers age,  the sum of their ages will be  97  years. How old is Sam?
                  </Typography>
                </div>

                <div style={{marginLeft:'5%'}}>
                    <img src={img} />
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
                        Let x be the Sam age.<br/>
                        Then the father's age is 47-x years.<br/>
                        Sam will reach the father age in  ((47-x) - x) = 47-2x years.<br/>
                        In  (47-2x) years, Sam's age will be  (x + (47-2x))  years,<br/>
                        while the father's age will be  ((47-x) + (47-2x)) ages.<br/>
                        In  (47-2x) years, the sum of their ages will be 97 years. It gives you an equation<br/>
                            (x + (47-2x) + ((47-x) + (47-2x)) = 97.<br/>
                        Simplify and solve for x<br/>
                            (47-x)      +  (94-3x)           = 97<br/>
                            (47 + 94)   - 4x                 = 97<br/>
                            47  + 94    - 97                 = 4x<br/>
                            44                               = 4x<br/>
                            x                               = 44/4 = 11.<br/>
                        ANSWER.  Sam is 11 years old.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_17;