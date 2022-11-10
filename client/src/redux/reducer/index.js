import { GET_COUNTRIES, SEARCH_COUNTRY } from "../actions/actionsType";

const initialState = {
    countries: []
}

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case SEARCH_COUNTRY:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;