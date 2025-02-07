import React from 'react';
import './Button.css';

const Button = ({ text, handleClick, className = '' }) => {
  return (
    <button className={`button ${className}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
