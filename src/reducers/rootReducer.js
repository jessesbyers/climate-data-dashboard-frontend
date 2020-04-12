import { combineReducers } from 'redux'

import chartsReducer from './chartsReducer'
import noticesReducer from './noticesReducer'
import wondersReducer from './wondersReducer'

  


const rootReducer = combineReducers({
    // export default combineReducers({
    charts: chartsReducer,
    notices: noticesReducer,
    wonders: wondersReducer
});

export default rootReducer