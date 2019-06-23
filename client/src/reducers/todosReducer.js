import { GET_TODOS, DELETE_TODOS, ADD_TODOS, CHECK_TODOS } from '../actions/types';

const initialState = {
  todos: [],
  completed: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS: {
      return {
        ...state,
        todos: action.payload
      }
    }
    case DELETE_TODOS: {
      return {
        ...state,
        todos: state.todos.filter(todo => action.payload !== todo._id)
      }
    }
    case ADD_TODOS: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    }
    case CHECK_TODOS: {
      return {
        ...state,
        todos: [
          ...state.todos
        ]
      }
    }
    default: {
      return state
    }
  }
}