import { combineReducers } from 'redux'

import config from './Config'
import request from './Request'
import auth from './Auth/Auth'

export default combineReducers({
  config,
  request,
  auth
})