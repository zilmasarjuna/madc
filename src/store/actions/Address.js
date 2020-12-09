import axios from 'utils/API'

import {
  PROVINCE_FAILURE,
  PROVINCE_REQUEST,
  PROVINCE_SUCCESS,
  CITY_FAILURE,
  CITY_REQUEST,
  CITY_SUCCESS,
} from 'store/types'

export const provinceRequest = () => ({
  type: PROVINCE_REQUEST,
})

export const provinceSuccess = (data) => ({
  type: PROVINCE_SUCCESS,
  data
})

export const provinceFailure = error => ({
  type: PROVINCE_FAILURE,
  error,
})

export const cityRequest = () => ({
  type: CITY_REQUEST,
})

export const citySuccess = (data) => ({
  type: CITY_SUCCESS,
  data
})

export const cityFailure = error => ({
  type: CITY_FAILURE,
  error,
})

export const getProvince = () => (
  async (dispatch) => {
    dispatch(provinceRequest())

    try {
      const res = await axios.get('/provinces')
      dispatch(provinceSuccess(res.data))
    } catch (e) {
      dispatch(provinceFailure('Ada masalah dengan server.'))
    }
  }
)

export const getCity = (province) => (
  async (dispatch) => {
    dispatch(cityRequest())

    try {
      const res = await axios.get(`/cities/${province}`)
      dispatch(citySuccess(res.data.data))
    } catch (e) {
      dispatch(cityFailure('Ada masalah dengan server.'))
    }
  }
)