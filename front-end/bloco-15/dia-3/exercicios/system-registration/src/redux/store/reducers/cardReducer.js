import { ADD_TO_CARD } from '../actions/index';

const INITIAL_STATE = []

const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CARD: 
      return [ ...state, action.value ]
    default:
      return state
  }
}

export default cardReducer;