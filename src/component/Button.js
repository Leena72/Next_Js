import React from 'react'

const Button = (props) => {
    return (
        <button
            id={props.id}
            className={props.className}
            disabled={props.disabled}
            onClick={props.clickHandler}
            type={props.type}
            autoFocus={props.autofocus}
            value={props.buttonText}
            name={props.name?props.name:'cta button'}
        >
            {props.buttonIcon }
            {props.buttonText}
        </button>
    )
}

export default Button
