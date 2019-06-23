import { FILTER_TODOS, HIDE_TODOS } from '../actions/types';

const initialState = {
  filter: '',
  hide: false
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FILTER_TODOS: {
      return {
        ...state,
        filter: action.payload
      }
    }
    case HIDE_TODOS: {
      return {
        ...state,
        hide: action.payload
      }
    }
    default: {
      return state
    }
  }
}