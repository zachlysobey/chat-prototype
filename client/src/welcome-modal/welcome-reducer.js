import { actions } from '../actions'
import { createReducer } from 'redux-starter-kit'

const initialState = {
    isOpen: true,
    email: '',
}

export const welcomeReducer = createReducer(initialState, {
    [actions.updateEmail]: (state, action) => ({
        ...state,
        email: action.payload,
    }),
    [actions.openWelcomeModal]: state => ({
        ...state,
        isOpen: true,
    }),
    [actions.closeWelcomeModal]: state => ({
        ...state,
        isOpen: false,
    }),
})
