import { all, put, takeLatest } from 'redux-saga/effects';
import { API } from '../services/api';
import * as types from '../constants/action-types';
import axios from 'axios';

function* login(payload) {
    try {
        const response = yield fetch(API.LOGIN + '/username/' + payload.username + '/password/' + payload.password).then(res => {
            if (res.status === 401) { throw Error(res.statusText); }
            return res.json();
        });
        yield put({ type: types.LOGIN_SUCCESS });
        sessionStorage.setItem('admin', 'true');
        sessionStorage.setItem('token', response.token);
    } catch (error) {
        yield put({ type: types.LOGIN_FAIL });
    }
}

function* getCountries() {
    try {
        const countries = yield axios({
            url: API.GET_COUNTRIES,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(res => { return res.data });
        yield put({ type: types.GET_COUNTRIES_SUCCESS, countries: countries });
    } catch (error) {
        yield put({ type: types.GET_COUNTRIES_FAIL });
    }

}

function* addCountry(payload) {
    try {
        yield axios({
            url: API.ADD_COUNTRY,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            data: { name: payload.country }
        });
        //document.getElementById('addCountry').value=''; // id='addCountry'
        yield getCountries();
        yield put({ type: types.ADD_COUNTRY_SUCCESS });
    } catch (error) {
        yield put({ type: types.ADD_COUNTRY_FAIL });
    }
}

function* getCountryImages(payload) {
    try {
        const imagesData = yield axios({
            url: API.GET_COUNTRY_IMAGES + payload.countryID,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => { return res.data });
        yield put({ type: types.GET_COUNTRY_IMAGES_SUCCESS, images: imagesData });
    } catch (error) {
        yield put({ type: types.GET_COUNTRY_IMAGES_FAIL });
    }
}

function* addImage(payload) {
    let formData = new FormData();
    formData.append('countryID', payload.countryID);
    formData.append('image', payload.image);
    formData.append('description', payload.description);
    formData.enctype = 'multipart/form-data';
    try {
        yield axios({
            url: API.ADD_IMAGE,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': sessionStorage.getItem("token")
            },
            data: formData
        });
        //document.getElementById('addImageForm').reset(); // id='addImageForm'
        yield put({ type: types.ADD_IMAGE_SUCCESS });
        yield getCountryImages({ countryID: payload.countryID });
        
    } catch (error) {
        yield put({ type: types.ADD_IMAGE_FAIL });
    }
}

function* getImage(payload) {
    try {
        const imageData = yield axios({
            url: API.GET_IMAGE + payload,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }
        }).then(res => { return res.data });
        yield put({ type: types.GET_IMAGE_SUCCESS, imageData: imageData });
    } catch (error) {
        yield put({ type: types.GET_IMAGE_FAIL });
    }
}


function* actionWatcher() {
    yield takeLatest(types.LOGIN, login);
    yield takeLatest(types.GET_COUNTRIES, getCountries);
    yield takeLatest(types.ADD_COUNTRY, addCountry);
    yield takeLatest(types.ADD_IMAGE, addImage);
    yield takeLatest(types.GET_COUNTRY_IMAGES, getCountryImages);
    yield takeLatest(types.GET_IMAGE, getImage);
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ]);
}