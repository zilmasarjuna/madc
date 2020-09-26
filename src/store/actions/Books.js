import axios from 'utils/APIContent'

import {
  BOOK_LIST_FAILURE,
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
} from 'store/types'

import {
  requestPost,
  requestPostSuccess,
  requestPostFailure
} from './Request'


export const bookListRequest = () => ({
  type: BOOK_LIST_REQUEST,
})

export const bookListSuccess = (data) => ({
  type: BOOK_LIST_SUCCESS,
  data
})

export const bookListFailure = error => ({
  type: BOOK_LIST_FAILURE,
  error,
})

function getFormData(object) {
  const formData = new FormData();
  Object.keys(object).forEach(key => formData.append(key, object[key]));
  return formData;
}

export const registerBooks = params => (
  (dispatch) => {
    dispatch(requestPost())
    let paramsData = getFormData(params)
    paramsData.set('perjanjian_penerbitan', params.aggreement_publisher.file)
    paramsData.set('pernyataan_penulis', params.agreement_writer.file)
    paramsData.set('book_file', params.file_pdf_book.file)
    paramsData.set('book_file_penilaian', params.file_pdf_book_no_identity.file)

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


export const getBookList = () => (
  async (dispatch) => {
    dispatch(bookListRequest())
    try {
      const res = await axios.get('/book/fetch?')
      if (res.data.meta.status) {
        dispatch(bookListSuccess(res.data.data))
      } else {
        dispatch(bookListFailure(res.data.meta.message))
      }
    } catch (e) {
      dispatch(bookListFailure('Ada masalah dengan server.'))
    }
  }
)
