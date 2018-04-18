import {
    FB_TOKEN
} from './type'

const initialState = {
    FBToken: ''
}

const reducer = (state = initialState, action) => {
    console.log(action.payload ,' ini di reducers')
    switch (action.type) {
        case FB_TOKEN:
           return {
               ... state, FBToken: action.payload
           }
        default:
            return state
    }
}

export default reducer