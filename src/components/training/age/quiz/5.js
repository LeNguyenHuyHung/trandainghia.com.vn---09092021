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
import img from '../quiz/images/age5.png';

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

const Age_5 =({history})=>{
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
                        5
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px'}}>
                Susan is  3  years older than Tom.  Two years ago Susan was twice as old as Tom.
                <br/>Find their present ages.
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
                        Let  x  be Tom's age  2  years ago.<br/>
                        Then Susan's age was  2x  2  years ago.<br/>

                        Tom's present age is  x+2.<br/>
                        Susan's present age is  2x+2.<br/>

                        Since Susan is  3  years older than Tom,  you can write the equation<br/>
                        x+2+=2x+2-3.<br/>

                        Solve this equation by simplifying it step by step:<br/>
                        x+2=2x-1   (after combining like terms at the right side)<br/>
                        2+1=2x-x   (after moving variable terms to the right and constant terms to the left)<br/>
                        3=x             (after combining like terms)<br/>

                        Thus you got that Tom was  3  years old two years ago.<br/>
                        Hence,  Susan was  3+3=6  years old at that time.<br/>
                        At present,  Tom is  3+2=5  years old,  and Susan is  6+2=8  years old.<br/>

                        Answer.  At present,  Tom is  5  years old,  and Susan is  8  years old.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_5;