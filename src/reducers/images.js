import * as types from '../constants/action-types';

const initialState = {
    loading: false,
    addingImage: false,
    images: []
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_IMAGE:
            return {
                ...state,
                loading: true
            }
        case types.GET_IMAGE_SUCCESS:
            return {
                ...state,
                images: action.image,
                loading: false
            }
        case types.GET_IMAGE_FAIL:
            return {
                ...state,
                loading: false
            }
        case types.ADD_IMAGE:
            return {
                ...state,
                addingImage: true
            }
        case types.ADD_IMAGE_SUCCESS:
        case types.ADD_IMAGE_FAIL:
            return {
                ...state,
                addingImage: false
            }
        case types.GET_COUNTRY_IMAGES:
            return {
                ...state,
                loading: true
            }
        case types.GET_COUNTRY_IMAGES_SUCCESS:
            return {
                ...state,
                images: action.images,
                loading: false
            }
        case types.GET_COUNTRY_IMAGES_FAIL:
            return {
                ...state,
                loading: false
            }
        default: return state;
    }
}