import axios from 'axios'

import config from '../config'
import configureStore from 'store/configStore'

const instance = axios.create({
  baseURL: config.api_url
})

instance.interceptors.request.use(
  (response) => {
    const { store } = configureStore()
    if (store.getState().bntp.auth.isAuth) {
      response.headers.Authorization = store.getState().bntp.auth.data.remember_token
    }
    return response
  },
  error => Promise.reject(error),
)

export default instance