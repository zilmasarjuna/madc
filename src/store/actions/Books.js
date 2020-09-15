import axios from 'utils/API'

import {
  requestPost,
  requestPostSuccess,
  requestPostFailure
} from './Request'

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

export const registerBooks = params => (
  (dispatch) => {
    dispatch(requestPost())

    const reqPromise = new Promise((resolve, reject) => {
      axios.post('/books', getFormData(params)).then((response) => {
        if (response.data.meta.code === 200) {
          dispatch(requestPostSuccess())

          resolve({ status: true })
        } else {
          dispatch(requestPostFailure())
          resolve({
            status: false,
            message: response.data.meta.message,
          })
        }
      }).catch((e) => {
        reject({
          status: false,
          message: 'Ada masalah dengan server.'
        })
      })
    })

    return reqPromise
  }
)