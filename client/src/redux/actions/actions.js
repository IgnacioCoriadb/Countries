import axios from "axios";
import {
    GET_COUNTRIES,
    SEARCH_COUNTRY
} from "./actionsType.js";

export function getCountries() {
    return async (dispatch) => {
      const res = await axios.get("http://localhost:3001/countries/");
      dispatch({ type: GET_COUNTRIES, payload: res.data });
    };
  }

export function searchCountry(name){
  return async (dispatch) => {
    const res = await axios.get(`http://localhost:3001/countries?name=${name}`);
    dispatch({ type: SEARCH_COUNTRY, payload: res.data});
  }
}