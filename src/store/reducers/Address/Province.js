import {
  CITY_REQUEST,
  CITY_SUCCESS,
  CITY_FAILURE,
} from 'store/types'

const initialState = {
  loading: false,
  data: [],
  message: null,
}

export default function city(state = initialState, action) {
  switch(action.type) {
    case CITY_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        data: []
      }
    case CITY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        message: null,
      }
    case CITY_FAILURE: 
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