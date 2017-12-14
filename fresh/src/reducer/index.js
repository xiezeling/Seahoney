import { combineReducers } from 'redux'

import people from './people'
import user from './user'

export default combineReducers({
  people,
  user
})