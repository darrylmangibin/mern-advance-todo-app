import { GET_TODOS, REMOVE_TODO, ADD_TODO, CHECK_TODO, FILTER_TODOS, HIDE_TODOS } from '../actions/types';


const initialState = {
  todos: [],
  filter: '',
  completed: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TODOS: {
      return {
        ...state,
        todos: [ ...state.todos, ...action.payload ]
      }
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: [ 
          ...state.todos.filter((todo) => todo._id !== action.payload)
         ]
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload
        ]
      }
    }
    case CHECK_TODO: {
      return {
        ...state,
        todo: [
          ...state.todos,
          action.payload
        ]
      }
    }
    case FILTER_TODOS: {
      return {
        ...state,
        filter: action.payload
      }
    }
    case HIDE_TODOS: {
      return {
        ...state,
        completed: action.payload
      }
    }
    default: {
      return state
    }
  }
}