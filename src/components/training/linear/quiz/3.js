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

const Quiz_3 =({history})=>{
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
                        3
                    </Avatar>
                    }
                />
                <div style={{marginLeft:'5%'}}>
                <Typography style={{fontSize:'24px', marginRight:'5px'}}>
                8 boys and 12 girls can finish the work in 10 days, while 6 boys and 8 girls can finish it in 14 days.<br/>
                Find the time taken by 1 boy alone and 1 girl alone to finish the work.<br/>
                </Typography>

                </div>

                <div style={{marginLeft:'5%'}}>
                    {/* <img src={img} style={{ maxWidth:'95%'}} /> */}
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
                        8 boys and 12 girls can finish the work in 10 days, while 6 boys and 8 girls can finish it in 14 days<br/>
                        Note: work PER Day KEY<br/>
                        Let x and y represent work done per day by boy and girl respectively:<br/>
                        8x + 12y = 1/10     <br/>
                        6x  + 8y = 1/14    |multiplying thru by -3/2 to  eliminate the y variable<br/>
                        8x + 12y = 1/10     <br/>
                        -9x  -12y = -3/28    |result of multiplying thru by -3/2 to  eliminate the y variable<br/>
                            x = 1/140  and y = 1/280, work PER Day by each<br/>
                        time taken by 1 boy alone 140 days and 1 girl alone 280 days to finish the work.<br/>
                        </Typography>
                    </div>
                </Collapse>
            </Card>
       
            </div>
        </>
    )
};
export default Quiz_3;