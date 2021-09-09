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
import Table from '@material-ui/core/Table';


import TextField from '@material-ui/core/TextField';

// import img from '../images/2020_1.png';

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

const Age_2 =({history})=>{
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
                            2
                        </Avatar>
                        }
                    />
                    <div style={{marginLeft:'5%'}}>
                    <Typography style={{fontSize:'24px'}}>
                        Kevin is  4  years older than Margaret.<br/>
                        Next year Kevin will be  2 times as old as Margaret.<br/>
                        How old is Kevin?
                    </Typography>
    
                    </div>

                <div style={{marginLeft:'5%'}}>
                    {/* <img src={img} style={{maxWidth:'75%'}} /> */}
                </div>

                {/* <div style={{marginLeft:'4%'}}>
                                <form className={classes.rootText} noValidate autoComplete="off">
                                <TextField id="outlined-basic" label="Your answer" variant="outlined" />
                                </form>
                </div> */}

                {/* <div onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        style={{marginLeft:'4%',marginBottom:'0',backgroundColor:'orange',width:'200px'}}>
                    <CardActions disableSpacing>
                        <IconButton
>
                        <ExpandMoreIcon />
                        </IconButton>
                        <Typography>SEE SOLUTION</Typography>
                    </CardActions>
                </div> */}
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
                        Let  x  be Kevin's present age.<br/>
                        Then Margret's present age is  x-4.

<br/>                        Next year Kevin will be  x%2B1  years old,  and Margaret will be  x-4+1=x-3  years old.

<br/>                        Since next year Kevin will be  2  times as old as Margaret,  you can write the equation
<br/>                        x+1+=+2*(x-3).

<br/>                        Solve this equation by simplifying it step by step:

<br/>                        x+1+=2x-6   (after brackets opening at the right side)
<br/>                        1+6=2x-x   (after moving variable terms to the right and constant terms to the left)
<br/>                        7=x             (after combining like terms)

<br/>                        Thus you got that Kevin's present age is  7  years.
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Age_2;