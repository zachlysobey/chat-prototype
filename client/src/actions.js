import { createAction } from "redux-starter-kit";

import { sendMessage as sendMessageWs } from './ws-connection'

const messageSent = createAction('MESSAGE_SENT')
const welcomeModalClosed = createAction('WELCOME_MODAL_CLOSED')

const sendMessage = (message) => (dispatch, getState) => {
    const { email: user } = getState().welcome
    sendMessageWs({ user, message })
    dispatch(messageSent)
}

const closeWelcomeModal = () => (dispatch) => {
    console.log('closeWelcomeModal')
    dispatch(welcomeModalClosed())
    dispatch(sendMessage('<connected>'))
}

export const actions = {
    updateEmail: createAction('UPDATE_EMAIL'),
    addNewMessage: createAction('ADD_NEW_MESSAGE'),
    messageSent,
    openWelcomeModal: createAction('OPEN_WELCOME_MODAL'),
    closeWelcomeModal,
    welcomeModalClosed,
    sendMessage,
}
