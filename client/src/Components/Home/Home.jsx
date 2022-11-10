import React,{useEffect} from "react";
// import style from "./Home.module.css";
import {getCountries} from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import Countries from "../Countries/Countries/Countries";
import NavBar from "../NavBar/NavBar";

function Home(){
    
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(getCountries())
},[dispatch])
    return (
        <React.Fragment>
            <NavBar></NavBar>
            <Countries></Countries>
        </React.Fragment>

    )
};


export default Home;
