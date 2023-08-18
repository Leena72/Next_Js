import React from 'react'
import Button from '../Button'
const FormFieldConsent = (props) => {
    return (
        <div className='FormFieldConsent-container'>
            <p>{props.text}</p>
            <Button
                className=''
                clickHandler={props.clickHandler}
                type='button'
                buttonText={props.buttonText}
            />
        </div>
    )
}

export default FormFieldConsent
