import React from 'react'
import PropTypes from 'prop-types'
const Button = (props) => {

    // console.log(props.col);
    
  return (
    <button onClick={props.OnClick} style={{backgroundColor: props.col}} className={props.sty}
    >{props.title} </button>
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