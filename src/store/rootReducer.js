import { combineReducers } from 'redux'
import { reducer as messageReducer } from './message/reducer'

const rootReducer = combineReducers({
  messageReducer,
})

export default rootReducer
