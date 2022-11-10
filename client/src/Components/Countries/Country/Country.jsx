import React from "react";
import style from "./Country.module.css";
import { Link } from "react-router-dom";


function Country({name,imgFlag,continent,id}){
    return (
            <div className={style.card}>
                <Link  to={`/countries/${id}`}>
                    <img src={imgFlag} alt={name}/>
                    <div>
                        <h4><b>{name}</b></h4>
                        <p>{continent}</p>
                </div>
                </Link>
        </div>
        
    )
}

export default Country;