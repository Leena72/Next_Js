import React, { useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux'
import { questionnaireList, formikValidationSchema } from '../../../data'
import OTPInput from '../../OTPInput'
import Button from '@/component/Button'
import FormLayout from './FormLayout'

import { questionnaireAction, saveQuestionnaireAction } from '../../../redux/action/questionnaireAction'
import { toaster } from '@/utils/toaster';


const NonMedForm = ({ formName, formValues, setFormValues }) => {
    const accDetails = useSelector((state) => state.customerDetailReducer);

    let formData = questionnaireList[formName]
    let validationSchema = formikValidationSchema[formName].validationSchema
    let initialValues = formikValidationSchema[formName].initialValues

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
    const renderElement = (formName, formValues, formik) => {
        return <FormLayout
            formName={formName}
            formData={formData}
            formValues={formValues}
            formik={formik}
            formChangeHandler={formChangeHandler}
        />
    }


    const formSaveHandler = (e, formName) => {
        console.log('formValues', formValues[formName], Object.values(formValues[formName]))
        let addNonupload = accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList
        let docQuesList = addNonupload?.filter(item => item.questionnaire === true)
        console.log('docQuesList',docQuesList)
        let data = Object.values(formValues[formName])
        let payload = {
            "policyNumber": accDetails?.policyNumber,
            "proposalNumber": accDetails?.proposalNumber,
            "uwId": accDetails?.additionalInfoDocs?.uwId,
            "additionalQuestionnaire": [
                {
                    "docCategoryCd": docQuesList[0].docCategoryCd,
                    "docCategoryTypeCd": docQuesList[0].docCategoryTypeCd,
                    "documentCd": docQuesList[0].documentCd,
                    "partyType": docQuesList[0].partyType,
                    "serviceDocListId": docQuesList[0].id,
                    "data": data
                }
            ]
        }
        console.log('payload', payload)
        dispatch(saveQuestionnaireAction(payload, res => {
            console.log('res', res)
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
                        {renderElement(formName, formValues, formik)}

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
                                clickHandler={(e) => formSaveHandler(e, formName)}
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


