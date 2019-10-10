import { createAction } from "redux-starter-kit";

export const actions = {
    openWelcomeModal: createAction('OPEN_WELCOME_MODAL'),
    closeWelcomeModal: createAction('CLOSE_WELCOME_MODAL'),
}
