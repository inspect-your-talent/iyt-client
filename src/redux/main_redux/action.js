import axios from 'axios'

import {
    FB_TOKEN,
    TOKEN_LINKEDIN,
    USER_POST_FB
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

export const getUserPost = (token) => {
    return dispatch => {
        axios.get(`https://graph.facebook.com/me?fields=posts{message}&access_token=${token}`)
        .then(resp=>dispatch(getUserPost_Success(resp.data)))
        .catch(err=>console.log(err))
    }
}

const setFBToken = (payload) => {
    return {
        type: FB_TOKEN,
        payload: payload
    }
}
const getUserPost_Success = (payload) => {
    return {
        type: USER_POST_FB,
        payload: payload
    }
}

