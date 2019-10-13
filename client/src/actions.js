import { createAction } from "redux-starter-kit";

export const actions = {
    updateEmail: createAction('UPDATE_EMAIL'),
    addNewMessage: createAction('ADD_NEW_MESSAGE'),
    openWelcomeModal: createAction('OPEN_WELCOME_MODAL'),
    closeWelcomeModal: createAction('CLOSE_WELCOME_MODAL'),
    logIn: createAction('LOG_IN'),
}
