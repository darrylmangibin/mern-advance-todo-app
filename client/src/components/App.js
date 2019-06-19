import React from 'react';
import 'normalize.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header/Header';
import FilterTodos from './FIlterTodos/FilterTodos';
import TodosLists from './TodosLists/TodoLists';
import AddTodos from './AddTodos/AddTodos';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <FilterTodos />
      <TodosLists />
      <AddTodos />
    </React.Fragment>
  )
}

export default App;