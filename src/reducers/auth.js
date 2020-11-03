import { LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../constants/action-types';

const initialState = {
    error: false,
    loading: false,
    authenticated: sessionStorage.getItem('admin')
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            return {
                ...state,
                authenticated: action.authenticated,
                loading: true
            }
        }
        case LOGIN_SUCCESS:
            return {
                ...state,
                authenticated: true,
                loading: false,
                error: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                error: true,
                loading: false
            }
        case LOGOUT: {
            return {
                ...state,
                authenticated: false
            }
        }
        default: return state;
    }
} 