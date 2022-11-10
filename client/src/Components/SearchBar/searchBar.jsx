import React,{useState} from 'react';
import  {useDispatch}from "react-redux";
import {searchCountry,getCountries} from "../../redux/actions/actions";

function SearchBar(){
const dispatch = useDispatch();
const [nameCountry, setNameCountry] =useState("");

//? todo lo que se ingrese en el input lo guardo en el estado local
const inputHandler = (e)=>{
    setNameCountry(e.target.value);
}
//?busco el país que coincida con el estado
const onClickHandler =()=>{
    dispatch(searchCountry(nameCountry));
}

//? reseteo la busqueda
const reset = ()=>{
    dispatch(getCountries());
    document.getElementById("name").value="";
}
return (

    <React.Fragment>
        <input type="text" placeholder="Search by country"  name="name" onChange= {(e)=>inputHandler(e)} id="name"/>
        <button onClick={()=>onClickHandler()}>Search</button>
        <button onClick={()=>reset()}>Reset</button>
    </React.Fragment>
)

}

export default SearchBar;