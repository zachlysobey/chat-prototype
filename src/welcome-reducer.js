import {
    actions
} from './actions'
import { createReducer } from 'redux-starter-kit'

const initialState = {
    isOpen: true,
}

export const welcomeReducer = createReducer(initialState, {
    [actions.openWelcomeModal]: state => ({
        ...state,
        isOpen: true,
    }),
    [actions.closeWelcomeModal]: state => ({
        ...state,
        isOpen: false,
    }),
})
