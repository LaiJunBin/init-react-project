const prefix = '[Message] '

export const SET_MESSAGE = prefix + 'SET_MESSAGE'

export const messageActions = {
  setMessage: (payload) => ({
    type: SET_MESSAGE,
    payload,
  }),
}
