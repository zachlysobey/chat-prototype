import { actions } from '../actions'
import { createReducer } from 'redux-starter-kit'

const initialState = {
    isOpen: false,
    loggedInUser: null,
    messages: []
}

export const chatRoomReducer = createReducer(initialState, {
    [actions.logIn]: (state, action) => ({
        ...state,
        isOpen: true,
        loggedInUser: action.payload,
    }),
    [actions.addNewMessage]: (state, action) => ({
        ...state,
        messages: [...state.messages, action.payload]
    }),
})
