import {
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_FAILURE,
  AUTHENTICATE_USER_LOGOUT
} from 'store/types'

const initialState = {
  loading: false,
  isAuth: false,
  data: {},
  message: null,
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
      }
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuth: true,
        message: null,
      }
    case AUTHENTICATE_USER_FAILURE: 
      return {
        ...state,
        loading: false,
        isAuth: false,
        message: action.error,
      }
    case AUTHENTICATE_USER_LOGOUT:
      return initialState
    default:
      return state
  }
}