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
import img from '../quiz/images/age20.png';

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

const Age_20 =({history})=>{
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
                        20
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                Harry is  3  times as old as  Louise was when  Harry was as old as  Louise is now.<br/>
                When  Louise is as old as  Harry is now,  they will be  28  together.  How old is  Harry and  Louise now?
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
                        Let H be Harry's  age; <br/>
                        let L be Louise's age.<br/>
                        From the condition, it is clear that Harry is older than Louise.<br/>
                        Let's transform / (translate) the problems statements into Math equations.<br/>
                        (a)    When Harry was as old as Louise is now ?  - - - It was  (H-L) years ago.<br/>
                                At that time, Louise age was (L - (H-L)) years old.<br/>
                                So, we write our first equation<br/>
                                    H = 3*(L - (H-L).<br/>
                                It is the same as<br/>
                                        H = 3*(2L - H),<br/>
                                    or<br/>
                                        H + 3H = 6L,  or  4H = 6L,    or    2H = 3L    (1)<br/>
                        (b)    When Louise will be as old as Harry is now ?  - - - It will happen in  (H-L) years from now.<br/>
                                So, we write our second equation<br/>
                                    L + (H-L) + (H + (H-L)) = 28.<br/>
                                It is the same as<br/>
                                        3H - L = 28.                                   (2)<br/>
                        (3)   Thus we have the system of 2 equations in 2 unknowns<br/>
                                   2H - 3L =  0,     (1)<br/>
                                    3H -  L = 28.     (2)<br/>
                            Multiply equation (2) by 3 (both sides); then subtract equation (1) from it.  You will get<br/>
                                    9H - 2H = 28*3,   it implies  7H = 84;   hence  H = 84/7 = 12.<br/>
                            Then from equation (1),  3L = 2*12 = 24;  hence,  L = 24/3 = 8.<br/>
                        ANSWER.  Harry is 12 years old;  Louise is 8 years old.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_20;