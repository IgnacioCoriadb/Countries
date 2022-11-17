import { GET_COUNTRIES, SEARCH_COUNTRY, FILTER_BY_CONTINENT,GET_COUNTRY_ID  } from "../actions/actionsType";

const initialState = {
    countries: [],
    allCountries: [],
    countryDetail:[]
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: action.payload
            };
        case FILTER_BY_CONTINENT:
            const  allCountries = state.allCountries;
            const continentFilter = action.payload === "ALL" ? allCountries : allCountries.filter(c =>c.continent === action.payload);
            return {
                ...state,
                countries: continentFilter
            }
        case GET_COUNTRY_ID :
            return {
                ...state,
                countryDetail: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;