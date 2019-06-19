import React from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={`${classes.header} justify-content-center align-items-center flex-column`}>
      <h1>Todo-App</h1>
      <p className="lead">What do you need to do?</p>
    </header>
  )
}

export default Header;