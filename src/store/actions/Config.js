import {
  CHANGE_MENU_ACTIVE
} from 'store/types'

export const changeMenu = (menu) => ({
  type: CHANGE_MENU_ACTIVE,
  menu
})