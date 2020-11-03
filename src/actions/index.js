import * as types from '../constants/action-types';

export const login = ({ username, password }) => ({
    type: types.LOGIN,
    username,
    password
})

export const logout = () => ({
    type: types.LOGOUT
})

export const toggleDarkMode = darkMode => ({
    type: types.TOGGLE_DARK_MODE,
    darkMode
})

export const toggleMenu = showMenu => ({
    type: types.TOGGLE_MENU,
    showMenu
})

export const changeScreenSize = screenSize => ({
    type: types.CHANGE_SCREEN_SIZE,
    screenSize
})

export const getCountries = () => ({
    type: types.GET_COUNTRIES
})

export const addCountry = country => ({
    type: types.ADD_COUNTRY,
    country
})

export const addImage = (image, description, countryID) => ({
    type: types.ADD_IMAGE,
    image,
    description,
    countryID
})

export const getImages = (countryID) => ({
    type: types.GET_COUNTRY_IMAGES,
    countryID
})
