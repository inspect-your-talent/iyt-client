import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './main_redux/reducers';

const reducers = combineReducers({
    mainReducer
})

const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store