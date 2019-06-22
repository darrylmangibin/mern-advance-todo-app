import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk)
    )
  );
  return store
}

export default configureStore;