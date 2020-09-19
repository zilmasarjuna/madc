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
    let paramsData = getFormData(params)
    paramsData.set('aggreement_publisher', params.aggreement_publisher.file)
    paramsData.set('agreement_writer', params.agreement_writer.file)
    paramsData.set('file_pdf_book', params.file_pdf_book.file)
    paramsData.set('file_pdf_book_no_identity', params.file_pdf_book_no_identity.file)

    const reqPromise = new Promise((resolve, reject) => {
      axios.post('/books', paramsData).then((response) => {
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