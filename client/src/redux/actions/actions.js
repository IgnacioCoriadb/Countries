import axios from "axios";
import {
    GET_COUNTRIES,
    SEARCH_COUNTRY,
    FILTER_BY_CONTINENT,
    GET_COUNTRY_ID
} from "./actionsType.js";

export function getCountries() {
    return async (dispatch) => {
      const res = await axios.get("http://localhost:3001/countries/");
      dispatch({ type: GET_COUNTRIES, payload: res.data });
    }
  };

export function searchCountry(name){
  return async (dispatch) => {
      const res = await axios.get(`http://localhost:3001/countries?name=${name}`);
      dispatch({ type: SEARCH_COUNTRY, payload: res.data});
  }
};

export function filterByContinent(continent) {
  return{
    type: FILTER_BY_CONTINENT,
    payload:continent
  }
};

export function createActivity(activity) {
  return async () => {
    try{
      const res = await axios.post( `http://localhost:3001/activities`,activity);
      return res;
    }catch(e){
      return e;
    }
  }
};

export function getCountriId(id){
  return async(dispatch)=>{
    try{
      const res = await axios.get(`http://localhost:3001/countries/${id}`);
      dispatch({type:GET_COUNTRY_ID, payload: res.data})
    }catch(e){
      return e;
    }
  }
}