
import {
    FB_TOKEN,
    TOKEN_LINKEDIN,
    USER_POST_FB,
    RESULT_ANALYSIST
} from './type'

const initialState = {
    FBToken: '',
    token_linkedin: null,
    user_FBPost: '',
    resultAnalysist : null
}

const reducer = (state = initialState, action) => {
    // console.log(action.payload ,' ini di reducers')
    switch (action.type) {
        case FB_TOKEN:
           return {
               ... state, FBToken: action.payload
           }
        case TOKEN_LINKEDIN:
          return {
            ...state, token_linkedin: action.payload
          }
        case USER_POST_FB:
          return {
            ...state, user_FBPost: action.payload
          }
        case RESULT_ANALYSIST:
          return {
            ...state, resultAnalysist: action.payload
          }
        default:
            return state
    }

}

export default reducer
