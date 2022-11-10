import React,{useEffect} from "react";
// import style from "./Home.module.css";
import {getCountries} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Countries from "../Countries/Countries/Countries";


function Home(){
    
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getCountries())
})
    return (
        <div>
            <Countries></Countries>
        </div>

    )
};


export default Home;
