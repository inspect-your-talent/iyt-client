
import {
    FB_TOKEN,
    TOKEN_LINKEDIN
} from './type'

const initialState = {
    FBToken: '',
    token_linkedin: null,
}

const reducer = (state = initialState, action) => {
    console.log(action.payload ,' ini di reducers')
    switch (action.type) {
        case FB_TOKEN:
           return {
               ... state, FBToken: action.payload
           }
        case TOKEN_LINKEDIN:
          return {
            ...state, token_linkedin: action.payload
          }
        default:
            return state
    }

}

export default reducer
