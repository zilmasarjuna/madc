import {  
  CHANGE_MENU_ACTIVE
} from 'store/types'

const initialState = {
  menu: 'dashboard'
}

export default function config(state = initialState, action) {
  switch(action.type) {
    case CHANGE_MENU_ACTIVE:
      return {
        ...state,
        menu: action.menu
      }
    default:{
      return state
    }
  }
}