import React, {useEffect, useState} from 'react';
import Card from './Card';
import { Button } from '@material-ui/core/';
import { Link } from "react-router-dom";
import Concepts from './training/concepts';

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])
    
    useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

    const [isTrain,setIsTrain] = useState(false);
    const [isTest,setIsTest] = useState(false);

    const handleSubmitTraining= async (e)=>{
        setIsTrain(false);
        setIsTest(true);
    }
    const handleSubmitTest= async (e)=>{
        setIsTrain(true);
        setIsTest(false);

    }

    return (
        
        <>
        
            <div className = "header text-center">
                <h1>NEVER STOP LEARNING</h1>
                {/* <button className = "btn btn-success mt-2" onClick = {() => setModal(true)} >Xem Danh Sách Gia Sư</button> */}
                {/* <Button component={Link} style={{"background-color" :"green"}} to='tutorials' variant="contained" color="primary">Xem Danh Sách Gia Sư</Button> */}
            </div>

            {/* <div className = "task-container"  >
            <Button onClick={handleSubmitTraining} className="button-wrapper" style={{"background-color" :"orange"}} component={Link} variant="contained" color="primary">Luyện Tập Theo Chủ Đề</Button>
            <Button onClick={handleSubmitTest} className="button-wrapper" style={{"background-color" :"#8CC152"}} component={Link} variant="contained" color="primary">Làm Đề Thi</Button>
            </div> */}

            <div hidden={isTrain}>
                <h2 className="" style={{color: "orange",paddingLeft:'6%',paddingTop:'60px',paddingBottom:'40px'}} >Luyện tập. </h2>
                <div className = "task-container">
                {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
                */}
                <Concepts/>
                </div>
            </div>

            <div>
            <div hidden={isTest}>
            <h2 className="task-header" style={{color: "orange"}} >ĐỀ THI & ĐÁP ÁN KANGAROO CÁC NĂM. </h2>
                <div className = "task-container">
                {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
                */}
                {/* <Card toLink="/k2020" title="Các câu khó: 21, 24" colorIndex ={1} testName ="K-2021"/>  */}
                <Card toLink="/k2020" title="Các câu khó: 15,17, 20, 24 " colorIndex ={1} testName ="K-2020"/> 
                <Card toLink="/sample-1" title="Các câu khó: 20, 21, 22, 25, 28, 29" colorIndex ={1} testName ="PRACTICES 1"/> 
                {/* <Card toLink="/k2020" title="Các câu khó: 20, 22, 22 " colorIndex ={1} testName ="K-2019"/> 
                <Card toLink="/k2020" title="Các câu khó: 16, 21, 23 " colorIndex ={1} testName ="K-2018"/> 
                <Card toLink="/k2020" title="Các câu khó: 22, 23 " colorIndex ={1} testName ="K-2017"/> 
                <Card toLink="/k2020" title="Các câu khó: 13, 17, 23" colorIndex ={1} testName ="K-2016"/> 
                <Card toLink="/k2020" title="Các câu khó: 20, 22" colorIndex ={1} testName ="K-2015"/> 
                <Card toLink="/k2020" title="Các câu khó: 19, 20, 22" colorIndex ={1} testName ="K-2014"/>  */}
                </div>
            </div>

            <div hidden={isTest}>
                <h2 className="task-header" style={{color: "green"}} >ĐỀ THI & ĐÁP ÁN AMC CÁC NĂM. </h2>
                <div className = "task-container">
                {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
                */}
                {/* <Card toLink="a2021" title="Các câu khó: 16, 19, 24 " colorIndex ={2} testName ="AMC-2021"/> 
                <Card toLink="a2021" title="Các câu khó: 21, 22" colorIndex ={2} testName ="AMC-2020"/> 
                <Card toLink="a2021" title="Các câu khó: 22, 23, 24" colorIndex ={2} testName ="AMC-2019"/> 
                <Card toLink="a2021" title="Các câu khó: 18, 19, 23" colorIndex ={2} testName ="AMC-2018"/> 
                <Card toLink="a2021" title="Các câu khó: 19, 20, 24" colorIndex ={2} testName ="AMC-2017"/> 
                <Card toLink="a2021" title="Các câu khó: 12, 13, 16" colorIndex ={2} testName ="AMC-2016"/> 
                <Card toLink="a2021" title="Các câu khó: 10, 19, 20" colorIndex ={2} testName ="AMC-2015"/> 
                <Card toLink="a2021" title="Các câu khó: 18, 19, 22" colorIndex ={2} testName ="AMC-2014"/>  */}
                </div>
            </div>

            <div hidden={isTest}>
                <h2 className="task-header" style={{color: "blue"}} >ĐỀ THI & ĐÁP ÁN IMAS CÁC NĂM. </h2>
                <div className = "task-container">
                {/* {taskList && taskList.map((obj , index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray}/> )}
                */}
                {/* <Card toLink="a2021" title="Các câu khó: 16, 19, 24 " colorIndex ={5} testName ="IMAS-2021"/> 
                <Card toLink="a2021" title="Các câu khó: 21, 22" colorIndex ={5} testName ="IMAS-2020"/> 
                <Card toLink="a2021" title="Các câu khó: 22, 23, 24" colorIndex ={5} testName ="IMAS-2019"/> 
                <Card toLink="a2021" title="Các câu khó: 18, 19, 23" colorIndex ={5} testName ="IMAS-2018"/> 
                <Card toLink="a2021" title="Các câu khó: 19, 20, 24" colorIndex ={5} testName ="IMAS-2017"/> 
                <Card toLink="a2021" title="Các câu khó: 12, 13, 16" colorIndex ={5} testName ="IMAS-2016"/> 
                <Card toLink="a2021" title="Các câu khó: 10, 19, 20" colorIndex ={5} testName ="IMAS-2015"/> 
                <Card toLink="a2021" title="Các câu khó: 18, 19, 22" colorIndex ={5} testName ="IMAS-2014"/>  */}
                </div>
            </div>
            </div>
        </>
    );
};

export default TodoList;