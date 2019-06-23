import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(
    rootReducers,
    {},
    compose(
      applyMiddleware(thunk)
    )
  )
  return store
}

export default configureStore;