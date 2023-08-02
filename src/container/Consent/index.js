import React from 'react'
import Button from '../../component/Button'

const Consent = ({}) => {
    const clickHandler = () => { }
    return (
        <div className='consent-container'>
            <p>Please click below to check the changes that has been done and provide consent</p>
            <Button
                className={'activeBtn'}
                clickHandler={clickHandler}
                type='button'
                buttonText={'View the changes'}
            />
        </div>
    )
}

export default Consent
