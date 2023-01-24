import React from 'react'
import './Button.css'
function Button(props) {
  return (
    <button className="ui__button">
      <span>{props.children} </span>
    </button>
  );
}

export default Button