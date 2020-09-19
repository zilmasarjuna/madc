import {
  SUBJECT_REQUEST,
  SUBJECT_SUCCESS,
  SUBJECT_FAILURE,
} from 'store/types'

const initialState = {
  loading: false,
  data: [],
  message: null,
}

export default function subject(state = initialState, action) {
  switch(action.type) {
    case SUBJECT_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        data: []
      }
    case SUBJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        message: null,
      }
    case SUBJECT_FAILURE: 
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