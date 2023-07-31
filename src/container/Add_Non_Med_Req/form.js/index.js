import React from 'react'
import { questionnaireList } from '../../../data'
import Button from '@/component/Button'
import {FormLayout} from './FormLayout'

const NonMedForm = ({ formName }) => {
    let formData = questionnaireList[formName]
    const renderElement = (formName) => {
        return <FormLayout
            formName={formName}
            formData={formData} 
            />
    }
    return (
        <div className='form-container'>
            {renderElement(formName)}
            <div className='form-btn'>
                <Button
                    className={'props.className'}
                    disabled={''}
                    clickHandler={''}
                    type={''}
                    buttonText={'Cancel'}
                />
                <Button
                    className={'props.className'}
                    disabled={''}
                    clickHandler={''}
                    type={''}
                    buttonText={'Submit'}
                />
            </div>
        </div>
    )
}

export default NonMedForm


