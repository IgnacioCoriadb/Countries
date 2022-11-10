import React ,{ useEffect,useState} from "react";
import {useSelector} from "react-redux";
import Country from "../Country/Country";
import style from "./Countries.module.css";
const Countries = ()=>{
    const countriesState = useSelector(state=> state.countries);

    const [resultsPage, setResultsPage] = useState(0);
    const cantResults = 10;
    const cantResultInitial =9;
    let filterCountries;
    

    const prevHandler = ()=>{
        if(resultsPage <= cantResults){
            setResultsPage(0); //si no puedo retroceder mas 
        }else{
            setResultsPage(resultsPage - cantResults);
        }
    }
    const nextHandler = ()=>{
        if(countriesState.length > resultsPage +cantResults){
            setResultsPage(resultsPage + cantResults);           
        }else{
            setResultsPage(resultsPage);
        }
    };

    const initialPage =()=>{
        setResultsPage(0);
    }

    //?si es la primer página muestro 9 results sino diez
    if(resultsPage !== 0){
        filterCountries =countriesState.slice(resultsPage, resultsPage +cantResults);
    }else{
        filterCountries =countriesState.slice(resultsPage, resultsPage + cantResultInitial);
    }


    useEffect(() =>{
        initialPage();
    },[countriesState]);

    return (
        <React.Fragment>
        <div className={style.container}>

        {  
            filterCountries.map((c)=>(
                <Country 
                    key={c.id}
                    id={c.id}
                    name={c.name}
                    imgFlag={c.imgFlag}
                    continent={c.continent}            
                />
            )) 
        }
        </div>
        <button onClick={prevHandler}>Prev</button>
        <button onClick={nextHandler}>Next</button>
        </React.Fragment>
    )
    
}

export default Countries;