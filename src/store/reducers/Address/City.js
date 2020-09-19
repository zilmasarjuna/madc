import {
  PROVINCE_REQUEST,
  PROVINCE_SUCCESS,
  PROVINCE_FAILURE,
} from 'store/types'

const initialState = {
  loading: false,
  data: [],
  message: null,
}

export default function province(state = initialState, action) {
  switch(action.type) {
    case PROVINCE_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        data: []
      }
    case PROVINCE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        message: null,
      }
    case PROVINCE_FAILURE: 
      return {
        ...state,
        loading: false,
        message: action.error,
        data: []
      }
    default:
      return state
  }
}