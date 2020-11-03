import * as types from '../constants/action-types';

const initialState = {
    countries: [],
    loading: false,
    addingCountry: false
}

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_COUNTRIES:
            return {
                ...state,
                loading: true
            }
        case types.GET_COUNTRIES_SUCCESS:
            return {
                ...state,
                countries: action.countries,
                loading: false
            }
        case types.GET_COUNTRIES_FAIL:
            return {
                ...state,
                loading: false
            }
        case types.ADD_COUNTRY:
            return {
                ...state,
                addingCountry: true
            }
        case types.ADD_COUNTRY_SUCCESS:
        case types.ADD_COUNTRY_FAIL:
            return {
                ...state,
                addingCountry: false
            }
        default: return state;
    }
}