import axios from 'utils/API'
import Cookies from 'js-cookie'
import config from 'config'
import { purgeStoredState } from 'redux-persist'

import { mainPersistConfig } from 'store/configStore'

import {
  AUTHENTICATE_USER_FAILURE,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_LOGOUT,
} from 'store/types'

export const authenticateUserRequest = () => ({
  type: AUTHENTICATE_USER_REQUEST,
})

export const authenticateUserSuccess = (token) => ({
  type: AUTHENTICATE_USER_SUCCESS,
  token
})

export const authenticateUserFailure = error => ({
  type: AUTHENTICATE_USER_FAILURE,
  error,
})

export const authenticateUserLogout = () => ({
  type: AUTHENTICATE_USER_LOGOUT,
})


export const getAccessToken = () => (
  Cookies.get(config.store_app)
)

const removeToken = () => {
  Cookies.remove(config.store_app)
}

export const loginUser = token => (
  (dispatch) => {
    dispatch(authenticateUserSuccess(token))

    Cookies.set(config.store_app, token)
    
    window.location = '/dashboard'
  }
)

export const fetchLogin = (params) => {
  return (dispatch) => {
    dispatch(authenticateUserRequest())

    return axios.post('/api/login', params).then(res => {
      const { token } = res.data
      dispatch(loginUser(token))
    }).catch(err => {
      dispatch(authenticateUserFailure(err))
    })
  }
}

export   const clearCurrentUser = () => (
  (dispatch) => {
    console.log('jalan')
    purgeStoredState(mainPersistConfig).then(() => {
      removeToken()
      let clear = new Promise((resolve) => {
        dispatch(authenticateUserLogout())
        resolve('done')
      })
      clear.then(() => console.log('jalan'))
    })
  }
)

