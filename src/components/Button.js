import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {

    
    
  return (
    <button onClick={props.OnClick} className={props.sty}>{props.title}</button>
  )
}

Button.defaultProps={
    sty:'btn',
    title:'Button'
};

Button.propTypes={
    title:PropTypes.string.isRequired
};

export default Button