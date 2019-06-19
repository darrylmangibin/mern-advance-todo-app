import { GET_TODOS, REMOVE_TODO, ADD_TODO, CHECK_TODO, FILTER_TODOS, HIDE_TODOS } from './types';
import url from '../baseURL/url';

export const getTodos = () => {
  return (dispatch) => {
    url.get('/').then((response) => {
      dispatch({
        type: GET_TODOS,
        payload: response.data
      })
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const removeTodo = (id) => {
  return (dispatch) => {
    url.delete(`/${id}`).then((response) => {
      dispatch({
        type: REMOVE_TODO,
        payload: id
      })
    })
  }
}

export const addTodo = (todo) => {
  return (dispatch) => {
    url.post('/', todo).then((response) => {
      dispatch({
        type: ADD_TODO,
        payload: response.data
      })
    })
  }
}

export const checkTodo = (id, todo) => {
  return (dispatch) => {
    url.put('/'+id, todo).then((response) => {
      dispatch({
        type: CHECK_TODO,
        payload: response.data
      })
    })
  }
}

export const filterTodos = (filter) => {
  return {
    type: FILTER_TODOS,
    payload: filter
  }
}

export const hideTodos = (val) => {
  return {
    type: HIDE_TODOS,
    payload: val
  }
}
