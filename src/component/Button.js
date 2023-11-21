import React from 'react'
import Image from 'next/image'

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
            name={props.name ? props.name : 'cta button'}
        >
            <Image
                src={props.buttonIcon}
                alt={props.buttonIcon}
            />
           <span>{props.buttonText}</span>
        </button>
    )
}

export default Button
