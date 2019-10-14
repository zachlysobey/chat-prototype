import { actions } from '../actions'
import { createReducer } from 'redux-starter-kit'

const initialState = {
    isOpen: false,
    messages: []
}

export const chatRoomReducer = createReducer(initialState, {
    [actions.addNewMessage]: (state, action) => ({
        ...state,
        messages: [...state.messages, JSON.parse(action.payload)]
    }),
})
