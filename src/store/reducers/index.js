import { combineReducers } from 'redux'

import config from './Config'
import request from './Request'
import auth from './Auth/Auth'
import province from './Address/Province'
import city from './Address/City'
import classification from './OptionBook/Classification'
import subject from './OptionBook/Subject'
import bookList from './Book/List'

export default combineReducers({
  config,
  request,
  auth,
  province,
  city,
  classification,
  subject,
  bookList
})