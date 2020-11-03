import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { layoutReducer } from './layout';
import { countriesReducer } from './countries';
import { imagesReducer } from './images';

const reducers = combineReducers({
    authReducer,
    layoutReducer,
    countriesReducer,
    imagesReducer
})

export default reducers;