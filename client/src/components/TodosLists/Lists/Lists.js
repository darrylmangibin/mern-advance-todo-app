import React from 'react';
import classes from './Lists.module.css';

const Lists = () => {
  return (
    <label className={`${classes.Lists}`}>
      <div style={{ flex: 1, padding: '10px' }}>
        <input type="checkbox" />
        <span style={{ fontSize: '21px' }}>Darryl</span>
      </div>
      <button>
        remove
      </button>
    </label>
  )
}

export default Lists;