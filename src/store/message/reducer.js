import produce from 'immer'

import { SET_MESSAGE } from './actions'

const initialState = {
  message: 'default message',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      const { message } = action.payload
      const nextState = produce(state, (draft) => {
        draft.message = message
      })

      return nextState
    }
    default:
      return state
  }
}
