// function allows us to manage state across multiple reducers and a single reducer into createStore function in index.js
import { combineReducers } from 'redux'

// importing individual reducers, all managing a single aspect of state for the the redux store
import chartsReducer from './chartsReducer'
import noticesReducer from './noticesReducer'
import wondersReducer from './wondersReducer'

const rootReducer = combineReducers({
    charts: chartsReducer,
    notices: noticesReducer,
    wonders: wondersReducer
});

export default rootReducer