import {
  POST_DATA_REQUEST,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
} from 'store/types'

export const requestPost = () => ({
  type: POST_DATA_REQUEST,
})

export const requestPostSuccess = () => ({
  type: POST_DATA_SUCCESS,
})

export const requestPostFailure = () => ({
  type: POST_DATA_FAILURE,
})

