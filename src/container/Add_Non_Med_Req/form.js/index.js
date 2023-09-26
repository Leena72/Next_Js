import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { questionnaireList, formikValidationSchema } from '../../../data'
import OTPInput from '../../OTPInput'
import Button from '@/component/Button'
import FormLayout from './FormLayout'
import { dashboardAction } from '@/redux/action/dashboardAction'
import { questionnaireAction, saveQuestionnaireAction } from '../../../redux/action/questionnaireAction'
import { toaster } from '@/utils/toaster';


const NonMedForm = ({ formName, formValues, setFormValues, title, newTitle, userType }) => {
    const accDetails = useSelector((state) => state.customerDetailReducer);

    let formData = questionnaireList[formName]
    let validationSchema = formikValidationSchema[formName].validationSchema
    let initialValues = formikValidationSchema[formName].initialValues
    const [isValid, checkIsvalid] = useState(false)
    const dispatch = useDispatch()
    const mapSaveData = (data, name, value) => {
        data.forEach((item, index) => {
            if (item.name === name) {
                item.answer = value
            } else if (item.subQuestions && item.subQuestions.length > 0) {
                mapSaveData(item.subQuestions, name, value)
            }

        });
        return data;
    }
    const checkValidation = (finalFormData) => {
        let check = true;
        const datacheck = (formdata) => {
            for (let i = 0; i < formdata.length; i++) {
                const item = formdata[i];
                console.log("check1", item, item.type !== "HEADING", !item.answer, item.answer == "", item.type !== "HEADING" && (!item.answer || item.answer == ""))
                if (item.type !== "HEADING" && (!item.answer || item.answer == "")) {
                    console.log("check validation1", item)
                    check = false;
                    return false;
                    // break;
                } else if (item.subQuestions && item.subQuestions.length > 0) {
                    console.log("check validation2")
                    datacheck(item.subQuestions)
                }
                // return check
            }
        }

        datacheck(finalFormData);
        return check;
    }
    const formChangeHandler = ({ name, value, formData }) => {
        // console.log('name, value, quesData, formName', name, value, quesData, formName, formData)
        // if (quesData.type === 'ques') {
        let data = JSON.parse(JSON.stringify(formData))
        let finalFormData = mapSaveData(data, name, value)
        setFormValues(finalFormData)
        console.log('check validation data', checkValidation(finalFormData))
        let isvalidform = checkValidation(finalFormData)
        checkIsvalid(isvalidform)
        console.log("maped data", finalFormData)
    }
    useEffect(() => {
        const filterQuestion = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        const getApidata = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesDataList?.filter((item) => filterQuestion[0]?.id === item.id)
        let formData = questionnaireList[formName]
        setFormValues(formData)
        if (getApidata && getApidata[0]?.data?.length > 0) {
            console.log("checking data===", [...getApidata[0]?.data])
            const data = [...getApidata[0]?.data]
            setFormValues(data)
            let isvalidform = checkValidation(data)
            checkIsvalid(isvalidform)
        }
    }, []);
    const renderElement = (formName, formValues, formik, title, newTitle, userType) => {
        // console.log("checking===>", formName, formData, formValues, formik, title, formData)
        // const filterQuestion = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        // const getApidata = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesDataList?.filter((item) => filterQuestion[0]?.id === item.id)
        // let newFormData = []
        // // if (getApidata && getApidata[0]?.data?.length > 0) {
        // //     newFormData = [...getApidata[0]?.data]
        // // }else{
        //     newFormData=formData;
        // // }
        console.log("check data for new work", formData)
        return <FormLayout
            formName={formName}
            formData={formValues}
            formValues={formValues}
            formik={formik}
            formChangeHandler={formChangeHandler}
            newTitle={newTitle}
        />
    }


    const formSaveHandler = (e, formName, newTitle, userType) => {
        // console.log('formValues', formName, formValues, formValues[formName], Object.values(formValues[formName]))
        const filterQuestion = accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        // let addNonupload = accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList
        // let docQuesList = addNonupload?.filter(item => item.questionnaire === true)
        console.log('docQuesList', accDetails?.additionalInfoDocs[userType]?.quesList, userType, filterQuestion && filterQuestion[0])
        // let data = Object.values(formValues[formName])
        let payload = {
            "policyNumber": accDetails?.policyNumber,
            "proposalNumber": accDetails?.proposalNumber,
            "uwId": accDetails?.additionalInfoDocs?.uwId,
            "additionalQuestionnaire": [
                {
                    'id': filterQuestion[0]?.id,
                    "data": formValues
                }
            ]
        }
        console.log('payload', filterQuestion[0]?.id, formValues)
        dispatch(saveQuestionnaireAction(payload, res => {
            console.log('res', res)
            dispatch(dashboardAction(accDetails.proposalNumber, (res) => {

            }))
        }))
    }
    return (
        <div className='form-container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={values => {
                    // console.log('values>>>',values);
                }}
            >
                {(formik) => (
                    <Form>
                        {renderElement(formName, formValues, formik, title, newTitle, userType)}

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
                                disabled={!isValid}
                                clickHandler={(e) => formSaveHandler(e, formName, newTitle, userType)}
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


