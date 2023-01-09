import PropTypes from 'prop-types'
import React from 'react'
import Button from './Button';
const Header = (props) => {
    const OnClick=()=>{
        console.log('Click');
    }
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button title={props.btnTitle} sty='btn' OnClick={props.onAdd} col={props.col}/>
    </header>
  )
};
Header.defaultProps={
    title:"Task Tracker"
};

Header.propTypes={
    title: PropTypes.string.isRequired
};

export default Header;