import { SET_AGE, SET_NAME } from '../Actiontype'

const initialState = {
  name: '于媛媛',
  age: 24
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
    default: return state
  }
}