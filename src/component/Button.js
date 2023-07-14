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
            name='cta button'
        >
            {props.buttonIcon && <span className={props.buttonIcon}></span>}
            {props.buttonText && <span className="">{props.buttonText}</span>}
        </button>
    )
}

export default Button
