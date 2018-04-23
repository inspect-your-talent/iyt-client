import axios from 'axios'

import {
    FB_TOKEN,
    TOKEN_LINKEDIN,
    USER_POST_FB,
    RESULT_ANALYSIST,
    FB_ID
} from './type'

export const setResultAnalyst = (payload) => {
    return dispatch => {
        dispatch({
          type: RESULT_ANALYSIST,
          payload : payload
        })
    }
}


export const setFbId = (payload) => {
  return dispatch => {
    dispatch({
      type: FB_ID,
      payload
    })
  }
}

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
