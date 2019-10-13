import { actions } from '../actions'
import { createReducer } from 'redux-starter-kit'
import { assoc } from 'ramda'

const initialState = {
    isOpen: true,
    email: '',
}

export const welcomeReducer = createReducer(
    initialState,
    {
        [actions.updateEmail]: (state, { payload: email }) => ({ ...state, email }),
        [actions.openWelcomeModal]: assoc('isOpen', true),
        [actions.closeWelcomeModal]: assoc('isOpen', false),
    }
)
