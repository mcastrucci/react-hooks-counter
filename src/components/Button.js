import React from 'react';

const Button = (props) => {
    const handleClick = ()  => {
        props.clickHandler(props.increment);
    } 
    return (
        <button onClick={handleClick}>+{props.increment}</button>
    )
}

export default Button;