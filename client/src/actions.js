import { createAction } from "redux-starter-kit";

import { sendMessage } from './ws-connection'

const messageSent = createAction('MESSAGE_SENT')

export const actions = {
    updateEmail: createAction('UPDATE_EMAIL'),
    addNewMessage: createAction('ADD_NEW_MESSAGE'),
    messageSent,
    sendMessage: (message) => (dispatch) => {
        sendMessage(message)
        dispatch(messageSent)
    },
    openWelcomeModal: createAction('OPEN_WELCOME_MODAL'),
    closeWelcomeModal: createAction('CLOSE_WELCOME_MODAL'),
    logIn: createAction('LOG_IN'),
}
