import React from 'react';
import './Button.css';

const Button = (props) => {
  const classes = `btn ${props.className}`;
  return (
    <button
      type={props.type}
      onClick={props.onClickHandler}
      className={classes}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
