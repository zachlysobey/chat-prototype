import { actions } from '../actions'
import { createReducer } from 'redux-starter-kit'

const initialState = {
    isOpen: false,
    loggedInUser: null,
}

export const chatRoomReducer = createReducer(initialState, {
    [actions.logIn]: (state, action) => ({
        ...state,
        isOpen: true,
        loggedInUser: action.payload,
    }),
})
