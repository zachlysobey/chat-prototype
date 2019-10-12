// rootReducer.js
import { combineReducers } from 'redux'

import { welcomeReducer } from './welcome-modal/welcome-reducer'
import { chatRoomReducer } from './chat-room/chat-room-reducer';

export const rootReducer = combineReducers({
    welcome: welcomeReducer,
    chatRoom: chatRoomReducer,
});
