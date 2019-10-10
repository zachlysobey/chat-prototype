// rootReducer.js
import { combineReducers } from 'redux'

import { welcomeReducer } from './welcome-modal/welcome-reducer'

export const rootReducer = combineReducers({
    welcome: welcomeReducer,
});
