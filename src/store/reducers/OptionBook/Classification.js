import {
  CLASSIFICATION_REQUEST,
  CLASSIFICATION_SUCCESS,
  CLASSIFICATION_FAILURE,
} from 'store/types'

const initialState = {
  loading: false,
  data: [],
  message: null,
}

export default function classification(state = initialState, action) {
  switch(action.type) {
    case CLASSIFICATION_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        data: []
      }
    case CLASSIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        message: null,
      }
    case CLASSIFICATION_FAILURE: 
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