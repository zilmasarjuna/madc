import { combineReducers } from 'redux'

import config from './Config'
import request from './Request'
import auth from './Auth/Auth'
import province from './Address/Province'
import city from './Address/City'
import classification from './OptionBook/Classification'
import subject from './OptionBook/Subject'

export default combineReducers({
  config,
  request,
  auth,
  province,
  city,
  classification,
  subject,
})