import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux'
import { questionnaireList,formikValidationSchema } from '../../../data'
import OTPInput from '../../OTPInput'
import Button from '@/component/Button'
import FormLayout from './FormLayout'

import { sendOTPAction, verifyOTPAction } from '../../../redux/action/OTPAction'
import { questionnaireAction } from '../../../redux/action/questionnaireAction'
import { toaster } from '@/utils/toaster';


const NonMedForm = ({ formName, formValues, setFormValues }) => {
    const [otp, setOtp] = useState('');
    const [refId, setRefId] = useState();
    const [fileName, setFileName] = useState('')

    let formData = questionnaireList[formName]
    let validationSchema=formikValidationSchema[formName].validationSchema
    let initialValues=formikValidationSchema[formName].initialValues

    const dispatch = useDispatch()

    const formChangeHandler = ({ name, value, quesData, formName, formData }) => {
        // console.log('name, value, quesData, formName', name, value, quesData, formName, formData)
        let formField
        let subQuesFields
        if (quesData.type === 'ques') {
            formField = {
                questionId: quesData.ques.id,
                questionSetCD: '',
                questionTypeCD: 'text',
                dataElementCD: 'dataElelementCD',
                answer: value,
                question: quesData.ques.question,
                details: 'testDeatils',
                rowGuid: 'testRowGuide',
                subQuestions: formValues?.[formName]?.[quesData.ques.id]?.subQuestions || [],
                editable: true
            }
            let currentFormValue = formValues?.[formName] || {}
            setFormValues({ ...formValues, ...{ [formName]: { ...currentFormValue, [quesData.ques.id]: formField } } });
        }
        else if (quesData.type === 'subQues') {
            if (!formValues?.[formName]?.[quesData.parent.id]) {
                formField = {
                    questionId: quesData.parent.id,
                    questionSetCD: '',
                    questionTypeCD: 'text',
                    dataElementCD: 'dataElelementCD',
                    answer: '',
                    question: quesData.parent.question,
                    details: 'testDeatils',
                    rowGuid: 'testRowGuide',
                    subQuestions: [],
                    editable: true
                }
            }
            else {
                formField = formValues?.[formName][quesData.parent.id]
            }
            subQuesFields = {
                questionId: quesData.ques.id,
                questionSetCD: '',
                questionTypeCD: 'text',
                dataElementCD: 'dataElelementCD',
                answer: value,
                question: quesData.ques.question,
                details: 'testDeatils',
                rowGuid: 'testRowGuide',
                editable: true
            }

            let prevSubQues = formValues?.[formName]?.[quesData.parent.id]?.subQuestions?.filter(item => item.questionId != quesData.ques.id) || []
            formField.subQuestions = [...prevSubQues, subQuesFields]

            let currentFormValue = formValues?.[formName] || {}
            // setFormValues({ ...formValues, ...{ [quesData.parent.id]: formField } });
            setFormValues({ ...formValues, ...{ [formName]: { ...currentFormValue, [quesData.parent.id]: formField } } });

        }


    }
    const renderElement = (formName, formValues,formik) => {
        return <FormLayout
            formName={formName}
            formData={formData}
            formValues={formValues}
            formik={formik}
            formChangeHandler={formChangeHandler}
        />
    }
    const formvalidate = () => {
        sendOtp()
        setShowOtp(true)
    }

    const formSubmitHandler = () => {
        let payload = {}
        Object.keys(formValues)?.map((item) => {
            payload[item] = Object.values(formValues[item])
        })
        dispatch(questionnaireAction(payload, (res) => {
            // setShowOtp(true)
            setFileName(res.body.fileName)
            formvalidate()
        }))
    }

    const sendOtp = () => {
        const data = {
            "consentType": "ADDITIONAL_QUESTIONNAIRE",
            "proposalNumber": localStorage.getItem("proposalNo"),
            "consentAction": "ACCEPTED",
        }

        dispatch(sendOTPAction(data, (resp) => {
            // console.log('resp?.data?.body?.body?.refId', resp?.body?.body?.refId)
            setRefId(resp?.body?.body?.refId)
            setShowOtp(true);
            setOverlay(true)
        }))
    }
    const verifyOtp = () => {
        const data = {
            "otp": otp,
            "refId": refId,
            "key": "ADDITIONAL_QUESTIONNAIRE"
        }
        let proposalNo = localStorage.getItem("proposalNo")
        dispatch(verifyOTPAction(data, proposalNo, fileName, (resp) => {
            if (resp?.body?.body) {
                toaster('success', resp?.body?.message);
                setOtp("")
                setShowOtp(false);
                setShowThankyou(true)

            } else {
                toaster('error', resp?.body?.message);
                setOtp('')
            }
        }))
    }
    const submitHandler = () => {
        verifyOtp();
    }
    return (
        <div className='form-container'>
            <Formik 
            initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log('values>>>',values);
                  }}
            >
                {(formik) => (
                    <Form>
                        {renderElement(formName, formValues,formik)}

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
                                disabled={!(formik.dirty && formik.isValid)}
                                clickHandler={formSubmitHandler}
                                type={''}
                                buttonText={'Save'}
                            />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NonMedForm


