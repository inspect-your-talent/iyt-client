import {
    FB_TOKEN
} from './type'

export const setFBTokenFunc = (payload) => {
    console.log(payload, 'ini di action')
    return dispatch => {
        dispatch(setFBToken(payload))
    }
}

const setFBToken = (payload) => {
    return {
        type: FB_TOKEN,
        payload: payload
    }
}