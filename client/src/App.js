import React from 'react';
import 'normalize.css';
import './App.css';

import NavBar from './components/NavBar';
import Filter from './components/Filter';
import Lists from './components/Lists';
import FormLists from './components/Form';

const App = () => {
  return (
    <React.Fragment>
      <NavBar
        title="Todo-App"
      />
      <Filter />
      <Lists />
      <FormLists />
    </React.Fragment>
  )
}

export default App;