import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { questionnaireList } from '../../../data'
import OTPInput from '../../OTPInput'
import Button from '@/component/Button'
import FormLayout from './FormLayout'
import {questionnaireAction} from '../../../redux/action/questionnaireAction'

const NonMedForm = ({ formName }) => {
    const [formValues, setFormValues] = useState([]);
    const [openOtpModal, setopenOtpModal] = useState(false)
    const [showForm, setshowForm] = useState(true)
    const [otp, setOtp]= useState('');


    let formData = questionnaireList[formName]
    const dispatch = useDispatch()

    const formChangeHandler = (name, value, ele, formName) => {
        // console.log('.>>',name,value,ele)
        let subQuesFields;
        let formField = {
            questionId: ele.id,
            questionSetCD: '',
            questionTypeCD: 'text',
            dataElementCD: 'dataElelementCD',
            answer: value,
            question: ele.question,
            details: 'testDeatils',
            rowGuid: 'testRowGuide',
            subQuestions: [],
            editable: true
        }
        if (name === 'subQues') {
            subQuesFields = {
                questionId: ele.id,
                questionSetCD: '',
                questionTypeCD: 'text',
                dataElementCD: 'dataElelementCD',
                answer: value,
                question: ele.question,
                details: 'testDeatils',
                rowGuid: 'testRowGuide',
                editable: true
            }
        }
        else { }
        formField.subQuestions.push(subQuesFields)


        // subQuestions
        setFormValues(c => [...c, formField]);
        // setFormValues({ ...formField});
        console.log('formField', formField)

    }
    const renderElement = (formName) => {
        return <FormLayout
            formName={formName}
            formData={formData}
            formChangeHandler={formChangeHandler}
        />
    }
    const formSubmitHandler = () => {
        let payload ={
            "ALCOHOL_HABIT_QUESTION":formValues
        }
        console.log('payload', payload)

        dispatch(questionnaireAction(payload ,() => { 
            
            setopenOtpModal(true)
        }))
    }

    console.log('formValues', formValues)
    return (
        <>
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
                    clickHandler={formSubmitHandler}
                    type={''}
                    buttonText={'Submit'}
                />
            </div>
        </div>
        {openOtpModal && <OTPInput
           otp={otp}
           resendFunc={() => {
           setOtp('')
           //    this.showOtpHandler();
           }}
           //  triggerTimmer={this.state.showOTP}
           getOTP={(otp) =>
           setOtp(otp)}
           otpKeyDownFunc={()=>{}}
        />}
        </>
    )
}

export default NonMedForm


