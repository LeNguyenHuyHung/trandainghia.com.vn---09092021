import { Button } from '@material-ui/core/';
import { Link } from "react-router-dom";
import React from 'react';
import Age_1 from './quiz/1';
import Age_2 from './quiz/2';
import Age_3 from './quiz/3';
import Age_4 from './quiz/4';
import Age_5 from './quiz/5';
import Age_6 from './quiz/6';
import Age_7 from './quiz/7';
import Age_8 from './quiz/8';
import Age_9 from './quiz/9';
import Age_10 from './quiz/10';
import Age_11 from './quiz/11';
import Age_12 from './quiz/12';
import Age_13 from './quiz/13';
import Age_14 from './quiz/14';
import Age_15 from './quiz/15';
import Age_16 from './quiz/16';
import Age_17 from './quiz/17';
import Age_18 from './quiz/18';
import Age_19 from './quiz/19';
import Age_20 from './quiz/20';

const Age =({history})=>{
    return(
        <>
            <div className="task-container">
            <Button  to='/' className="button-header-wrapper" style={{"background-color" :"orange"}} component={Link} variant="contained" color="primary">TRANG CHỦ</Button>
            <Button  to='linear' className="button-header-wrapper" style={{"background-color" :"orange"}} component={Link} variant="contained" color="primary">CHỦ ĐỀ TIẾP THEO</Button>
            </div>
            <div className = "header text-center">
                <h1>AGE WORD PROBLEMS</h1>
            </div>
            <Age_1/>
            <Age_2/>
            <Age_3/>
            <Age_4/>
            <Age_5/>
            <Age_6/>
            <Age_7/>
            <Age_8/>
            <Age_9/>
            <Age_10/>
            <Age_11/>
            <Age_12/>
            <Age_13/>
            <Age_14/>
            <Age_15/>
            <Age_16/>
            <Age_17/>
            <Age_18/>
            <Age_19/>
            <Age_20/>
        </>
    )
};
export default Age;