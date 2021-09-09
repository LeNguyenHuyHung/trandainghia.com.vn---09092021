import { Button, Typography } from '@material-ui/core/';
import { Link } from "react-router-dom";
import './profileui.css';
import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import UserCard from "./components/userCards";
import Footer from "./components/footer";


const tutorials =(props)=>{


    return(
        <>
            <div className = "header text-center">
                <h1>GIA SƯ TUYỂN CHỌN</h1>
                {/* <button className = "btn btn-success mt-2" onClick = {() => setModal(true)} >Xem Danh Sách Gia Sư</button> */}
                <Button component={Link} style={{"background-color" :"green"}} to='/' variant="contained" color="primary">VỀ LẠI TRANG CHỦ</Button>
            </div>

            <div className="App">
                <div className="container">
                    <Header />
                    <UserCard />
                    <Footer />
                </div>
            </div>



    );
            
        </>
    )
};
export default tutorials;