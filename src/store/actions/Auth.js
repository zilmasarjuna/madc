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

import {
  requestPost,
  requestPostSuccess,
} from './Request'

export const authenticateUserRequest = () => ({
  type: AUTHENTICATE_USER_REQUEST,
})

export const authenticateUserSuccess = (data) => ({
  type: AUTHENTICATE_USER_SUCCESS,
  data
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

export const loginUser = data => (
  (dispatch) => {
    dispatch(authenticateUserSuccess(data))

    if (data.Publisher.id !== 0) {
      window.location = '/dashboard'
    } else {
      window.location = '/publisher/register'
    }
  }
)

export const registerUser = params => (
  (dispatch) => {
    dispatch(requestPost())

    const reqPromise = new Promise((resolve, reject) => {
      axios.post('/user/create/publisher', params).then((response) => {
        dispatch(requestPostSuccess())

        resolve({ status: true })
      }).catch((e) => {
        reject({
          status: false,
          message: e.response.data.meta.message
        })
      })
    })

    return reqPromise
  }
)

export const fetchLogin = (params) => {
  return (dispatch) => {
    dispatch(authenticateUserRequest())

    return axios.post('/ogin', params).then(res => {
      const { data } = res
      dispatch(loginUser(data))
    }).catch(err => {
      dispatch(authenticateUserFailure(err))
    })
  }
}

export   const clearCurrentUser = () => (
  (dispatch) => {
    purgeStoredState(mainPersistConfig).then(() => {
      removeToken()
      let clear = new Promise((resolve) => {
        dispatch(authenticateUserLogout())
        resolve('done')
      })
      clear.then(() => window.location = '/login')
    })
  }
)

