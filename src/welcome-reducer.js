import { actions } from './actions'

const initialState = {}

export const welcomeReducer = (state = initialState, action) => {
  console.info('Redux Action:', action)
  switch (action.type) {
    default:
      return state
  }
}

