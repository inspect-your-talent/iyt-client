import { TOKEN_LINKEDIN, PROFILE_LINKEDIN } from './type'

import axios from 'axios'

export const setTokenLinkedin = (token) => {
  return {
    type: TOKEN_LINKEDIN,
    payload: token
  }
}
export const getProfileLinkedin = (access_token) => {
  return dispatch=> {
    axios.get('https://api.linkedin.com/v1/people/~?format=json',{
      headers: {
        Authorization: 'Bearer ' + access_token,
      }
    })
    .then(resp=>dispatch(getProfileLinkedin_success(resp.data)))
    .catch(err=>console.log(err))
  }
}

const getProfileLinkedin_success =(access_token)=>{
  return {
    type: PROFILE_LINKEDIN,
    payload: access_token
  }
}