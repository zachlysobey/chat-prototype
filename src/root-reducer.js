// rootReducer.js
import { combineReducers } from 'redux'

import { welcomeReducer } from './welcome-reducer'

export const rootReducer = combineReducers({
    welcomeReducer
});
