import React ,{useEffect} from "react";
import {getCountriId} from "../../../redux/actions/actions";
import { useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import CountryActivity from "../../Activities/country_activity.jsx";

const  CountrId=()=>{
    const stateCountryId = useSelector(state => state.countryDetail);


    const dispatch = useDispatch();
    let {id} = useParams();
    useEffect(()=>{
        dispatch(getCountriId(id))
    },[id,dispatch]);

    //   if(stateCountryId.activities){
    //     console.log(stateCountryId.activities.map(e=> e.name))
    //   }

    return(
        <React.Fragment>
            <div>
                <img src={stateCountryId.imgFlag} alt={stateCountryId.name} />
                <h4><b>País: {stateCountryId.name}</b></h4>
                <p>Código: {stateCountryId.id}</p>
                <p>Contienente: {stateCountryId.continent}</p>
                <p>Capital: {stateCountryId.capital}</p>
                <p>Región: {stateCountryId.subRegion}</p>
                <p>Área: {stateCountryId.area} km2</p>
                <p>Población: {stateCountryId.population}</p>
                <CountryActivity  activities={stateCountryId.activities}/>
            </div>
        </React.Fragment>
    )
}

export default CountrId;