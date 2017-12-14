import { SET_AGE, SET_NAME} from '../Actiontype'

export function set_age (age) {
  return {
    type: SET_AGE,
    age
  }
}

export function set_name (name) {
  return {
    type: SET_AGE,
    name
  }
}