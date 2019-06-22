import React from 'react';
import 'normalize.css';

import NavBar from './components/NavBar';
import Filter from './components/Filter';

const App = () => {
  return (
    <React.Fragment>
      <NavBar
        title="Todo-App"
      />
      <Filter />
    </React.Fragment>
  )
}

export default App;