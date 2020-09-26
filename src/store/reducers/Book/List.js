import {
  BOOK_LIST_REQUEST,
  BOOK_LIST_SUCCESS,
  BOOK_LIST_FAILURE,
} from 'store/types'

const initialState = {
  loading: false,
  data: [],
  message: null,
}

export default function bookList(state = initialState, action) {
  switch(action.type) {
    case BOOK_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        message: null,
        data: []
      }
    case BOOK_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        message: null,
      }
    case BOOK_LIST_FAILURE: 
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