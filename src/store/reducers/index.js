import { combineReducers } from 'redux'

import request from './Request'
import auth from './Auth/Auth'

export default combineReducers({
  request,
  auth
})