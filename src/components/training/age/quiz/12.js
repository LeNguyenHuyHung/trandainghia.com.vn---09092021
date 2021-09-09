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

const Age_12 =({history})=>{
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
                        12
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                A father said to his son:  When I was your age,  you were  2  years old.<br/>
                His son replies:  When I reach your age,  you will be  68  years old.  What is the father's present age?
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
                        Let x be the father's present age and y be the son's present age.<br/>
                        Then it was x-y years back when the father was of his son's present age.<br/>
                        Thus (x-y) years ago the son was 2 years old. It gives an equation<br/>
                        y - (x-y) = 2.    (1)<br/>
                        It is how the phrase "When I was your age, you were 2 years old" is algebraized. <br/>
                        Next, it will take (x-y) years when the son reach the father's present age.<br/>
                        And the father's age at that time will be x + (x-y). According with the condition, it gives an equation<br/>
                        x + (x-y) = 68.   (2)<br/>
                        <br/>Thus we have the system of two equations, (1) and (2). Let us write the equation one more time in an simplified form:<br/>
                        2y - x =  2       (3)    ( instead of (1) ), and<br/>
                        2x - y = 68       (4)    ( instead of (2) ).<br/>
                        To solve this system, express x = 2y - 2 from (3) and substitute it into (4). You will get a single equation for y:
                        <br/>2*(2y-2) - y = 68,   or   4y - 4 - y = 68,   or   3y = 68+4,   or  3y = 72.<br/>
                        Hence, y = 72/3 = 36.<br/>
                        Thus the son's present age is 36 years.<br/>
                        Then the father's present age is x = 2y - 2 = 2*36 - 2 = 70 years.<br/>
                        Answer. The father's present age is 70 years. The son's present age is 36 years.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_12;