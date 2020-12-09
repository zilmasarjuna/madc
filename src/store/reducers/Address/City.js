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
      const data = action.data.map(key => {
        return {
          label: key.name,
          value: key.id
        }
      })

      return {
        ...state,
        loading: false,
        data: data,
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