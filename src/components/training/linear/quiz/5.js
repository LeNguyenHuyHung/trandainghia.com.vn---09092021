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
import img from '../quiz/images/5.png';

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

const Quiz_5 =({history})=>{
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
                <Typography style={{fontSize:'24px', marginRight:'5px'}}>
                There are 550 people at a basketball tournament. 1/3 of the adults and 1/5 of the children wear basketball jerseys.<br/>
                The number of adults and children not wearing jerseys are equal.<br/>
                How many children do not wear jerseys?
                </Typography>

                </div>

                <div style={{marginLeft:'5%'}}>
                    <img src={img} style={{ maxWidth:'95%'}} />
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
                        let a = the number of adults.<br/>
                        let c = the number of children.<br/>
                        you get:<br/>
                        a + c = 550<br/>
                        this means the number of adults and children totals 550 in all.<br/>
                        1/3 * a = number of adults wearing jerseys.<br/>
                        1/5 * c = number of children wearing jerseys.<br/>
                        2/3 * a = number of adults not wearing jerseys.<br/>
                        4/5 * c = number of children not wearing jerseys.<br/>
                        you are given that the number of adults not wearing jerseys is the same as the number of children not wearing jerseys.<br/>
                        this means that 2/3 * a = 4/5 * c<br/>
                        divide both sides of the equation by (2/3) to get a = 4/5 * c / (2/3)<br/>
                        simplify this to get a = 6/5 * c.<br/>
                        in the first equation of a + c = 550, replace a with 6/5 * c to get 6/5 * c + c = 550.<br/>
                        simplify this to get 11/5 * c = 550.<br/>
                        solve for c to get c = 550 / (11/5) = 250.<br/>
                        since a = 6/5 * c, this means a = 500.<br/>
                        a + c = 550 becomes 300 + 250 = 550 which becomes 550 = 550.<br/>
                        this part is good.<br/>
                        1/3 * a = 100 adults wearing jerseys.<br/>
                        this means 200 adults are not wearing jerseys.<br/>
                        1/5 * 250 = 50 children wearing jerseys.<br/>
                        this means 200 children are not wearing jerseys.<br/>
                        the number of adults not wearing jerseys is the same as the number of children not wearing jerseys.<br/>
                        this part is good.<br/>
                        your solution is that 200 children are not wearing jerseys.<br/>
                        if there is any part of this that you do not understand, please let me know and i will explain it in more detail.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Quiz_5;