import {
    FB_TOKEN,
    TOKEN_LINKEDIN
} from './type'

export const setFBTokenFunc = (payload) => {
    console.log(payload, 'ini di action')
    return dispatch => {
        dispatch(setFBToken(payload))
    }
}

export const setTokenLinkedin = (token) => {
  return {
    type: TOKEN_LINKEDIN,
    payload: token
  }
}

const setFBToken = (payload) => {
    return {
        type: FB_TOKEN,
        payload: payload
    }
}


