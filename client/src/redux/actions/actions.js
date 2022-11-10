import axios from "axios";
import {
    GET_COUNTRIES
} from "./actionsType.js";

export function getCountries() {
    return async (dispatch) => {
      const res = await axios.get("http://localhost:3001/countries/");
      dispatch({ type: GET_COUNTRIES, payload: res.data });
    };
  }
  