import { TOKEN_LINKEDIN, PROFILE_LINKEDIN } from './type'

const initialState = {
    token_linkedin: null,
    profil_linkedin: ''
}

const reducer = (state = initialState, action) => {
    // Switch case conditions
    switch (action.type) {
      case TOKEN_LINKEDIN:
          return {...state, token_linkedin: action.payload}
      case PROFILE_LINKEDIN:
          return {...state, profil_linkedin: action.payload}
      default:
        return state
    }
    return state
}

export default reducer
