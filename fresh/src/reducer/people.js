import {SET_NAME, SET_AGE} from '../Actiontype'

const initialState = {
  name: '刘宇',
  age: 100
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return Object.assign({}, state, {
        name: action.name
      })
    case SET_AGE:
      return Object.assign({}, state, {
        age: action.age
      })
    default:
      return state
  }
}