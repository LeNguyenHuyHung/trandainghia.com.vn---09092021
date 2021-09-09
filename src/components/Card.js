import React, {useState} from 'react';
import EditTask from '../modals/EditTask';
import { Button } from '@material-ui/core/';
import { Link } from "react-router-dom";

// const Card = ({taskObj, index, deleteTask, updateListArray}) => {
const Card = ({colorIndex,testName,title,toLink, buttonColor}) => {
    // const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    return (
        <div class = "card-wrapper">
            <div class = "card-top" style={{"background-color": colors[colorIndex%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={{"background-color": colors[colorIndex%5].secondaryColor, "border-radius": "10px"}}>{testName}</span>
                <p className = "mt-3">{title}</p>
            <Button component={Link} style={{"background-color" : colors[colorIndex%5].primaryColor}} to={toLink} variant="contained" color={buttonColor}>LÀM BÀI NGAY</Button>
        </div>
        </div>
    );
};

export default Card;