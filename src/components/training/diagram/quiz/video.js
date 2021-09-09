import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { red } from '@material-ui/core/colors';
import YouTube from 'react-youtube';
import Typography from '@material-ui/core/Typography';

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
  

const Video =({history})=>{
    const classes = useStyles();
    return(
        <>

            <div>
            <Card className="block-example border border-warning" style={{backgroundColor:"#ffffff".primaryColor,alignItems:'center',textAlign:'center'}}>
                {/* <div style={{textAlign:'center'}}>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
                    />
                </div> */}
                <div style={{marginTop:'30px',width:'100%'}}>
                    <YouTube videoId="4-o7n-QhCvM"/>
                </div>

                <div style={{textAlign:'center'}}>
                <Typography style={{fontSize:'24px',fontWeight:'bold',color:'red'}}>
                VIDEO BÀI HỌC : CREATING A TREE DIAGRAM <br/>
                </Typography>
                </div>

                {/* <div style={{textAlign:'center',marginTop:'30px'}}>
                <Typography style={{fontSize:'20px'}}>
                Đăng ký khoá học Flyer tại:  <a href="https://www.facebook.com/profile.php?id=100071653401017" target={"_blank"} ><span class="label label-danger">Phiếu đăng ký lớp Flyer</span></a> <br/>
                Đăng ký khóa học Toán tại:  <a href="https://www.facebook.com/profile.php?id=100071653401017" target={"_blank"} ><span class="label label-danger">Phiếu đăng ký lớp Toán</span></a> <br/>
                <br/>
                </Typography>
                </div> */}

                <div style={{textAlign:'left',marginBottom:'50px',marginTop:'',marginLeft:'15%', marginRight:'15%'}}>
                <Typography style={{fontSize:'18px'}}>
                Các bài tập ở dưới đều được sắp xếp từ dễ đến khó, các bạn cố gắn làm nhé, nếu có bất kì thắc mắc bài tập hoặc cần bài tập làm thêm thì các bạn cứ nhắn tin cho mình tại facebook:  <a href="https://www.facebook.com/trandainghia.com.vn"><span class="label label-danger">LUYỆN THI TRẦN ĐẠI NGHĨA</span></a> <br/>
                </Typography>

                </div>
            </Card>
       
            </div>
        </>
    )
};
export default Video;