import React from 'react';
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";

function LandingPage(){
    return (
            <div className={style.container}>
                <h1 className={style.countries}>Countries</h1>
                <Link  to="/home"  >
                    <button className={style.btnStart}>Start</button>
                </Link>
            </div>
    )
};



export default LandingPage;