import { GET_TODOS, DELETE_TODOS, ADD_TODOS, CHECK_TODOS, FILTER_TODOS, HIDE_TODOS } from './types';
import url from '../axios/url';

export const getTodos = () => {
  return (dispatch) => {
    url.get('/').then((response) => {
      dispatch({
        type: GET_TODOS,
        payload: response.data
      })
    })
  }
}

export const deleteTodo = id => dispatch => {
  url.delete('/'+id).then(response => {
    dispatch({
      type: DELETE_TODOS,
      payload: id
    })
  })
}

export const addTodo = todo => dispatch => {
  url.post('/', todo).then(response => {
    if(response.data.success === false) {
      alert(response.data.message)
      return
    }
    dispatch({
      type: ADD_TODOS,
      payload: response.data
    })
  }).catch((err) => {
    alert('Please add a Todo')
  })
}

export const checkTodo = (id, todo) => {
  return (dispatch) => {
    url.put('/'+id, todo).then((response) => {
      dispatch({
        type: CHECK_TODOS,
        payload: response.data
      })
    })
  }
}

export const filterTodos = (filterWord) => {
  return {
    type: FILTER_TODOS,
    payload: filterWord
  }
}

export const hideTodo = (value) => {
  return {
    type: HIDE_TODOS,
    payload: value
  }
}