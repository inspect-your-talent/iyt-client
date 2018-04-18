import { TOKEN_LINKEDIN } from './type'

const initialState = {
    //Content initial state
    token_linkedin: null,
}

const reducer = (state = initialState, action) => {
    // Switch case conditions
    switch (action.type) {
      case TOKEN_LINKEDIN:
          return {...state, token_linkedin: action.payload}
        break;
      default:
        return state
    }
    return state
}

export default reducer
