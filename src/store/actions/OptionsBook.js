import axios from 'utils/API'

import {
  SUBJECT_FAILURE,
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
  CLASSIFICATION_FAILURE,
  CLASSIFICATION_REQUEST,
  CLASSIFICATION_SUCCESS,
} from 'store/types'

export const subjectRequest = () => ({
  type: SUBJECT_REQUEST,
})

export const subjectSuccess = (data) => ({
  type: SUBJECT_SUCCESS,
  data
})

export const subjectFailure = error => ({
  type: SUBJECT_FAILURE,
  error,
})

export const classificationRequest = () => ({
  type: CLASSIFICATION_REQUEST,
})

export const classificationSuccess = (data) => ({
  type: CLASSIFICATION_SUCCESS,
  data
})

export const classificationFailure = error => ({
  type: CLASSIFICATION_FAILURE,
  error,
})

export const getSubject = () => (
  async (dispatch) => {
    dispatch(subjectRequest())

    try {
      const res = await axios.get('/subject')
      if (res.data.meta.code === 200) {
        dispatch(res.data.data)
      } else {
        dispatch(subjectFailure(res.data.meta.message))
      }
    } catch (e) {
      dispatch(subjectFailure('Ada masalah dengan server.'))
    }
  }
)

export const getClassifcation = () => (
  async (dispatch) => {
    dispatch(classificationRequest())

    try {
      const res = await axios.get('/classification/')
      if (res.data.meta.code === 200) {
        dispatch(res.data.data)
      } else {
        dispatch(classificationFailure(res.data.meta.message))
      }
    } catch (e) {
      dispatch(classificationFailure('Ada masalah dengan server.'))
    }
  }
)