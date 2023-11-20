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

    const createChunckArray=(arr,size)=>{
        // const size = 3; 
       const res = arr?.reduce((acc, curr, i) => {
                    if ( !(i % size)  ) {    // if index is 0 or can be divided by the `size`...
                        acc.push(arr.slice(i, i + size));   // ..push a chunk of the original array to the accumulator
                    }
                    return acc;
                    }, []);
    return res
    }
    const mapSaveData = (data, name, value, referenceAns) => {
        // console.log('reference>>', data, name, value, referenceAns)
        if(title==="Diabetes Questionnaire"){
            // data[1].addMore=true;
            // data[1]. addMoreSubName='treatment',
            // data[2].addMore=true;
            // data[2]. addMoreSubName='mdeication',
            // data[11].addMore=true;
            // data[11]. addMoreSubName='admitted',
            data.forEach(ele=>{
                if(ele.addMore){
                    ele.subQuestions =  ele?.subQuestions.flat();
                }
            })
        }
        console.log("checking data answer",data,name,value)
        data.forEach((item, index) => {
            if (item.name === name) {
                console.log('refname',name)
                referenceAns === true ?
                    item.refAns = value
                    :
                    item.answer = value
            }

            else if (item.subQuestions && item.subQuestions.length > 0) {
                // if(item.addMoreSubName){
                //     item.subQuestions?.forEach(ele=>{
                //         mapSaveData(ele, name, value)
                //     })
                  
                // }else{
                    mapSaveData(item.subQuestions, name, value)
                // }
             
                // saving ans for multiple questions in form diabetes ques 11
                if(referenceAns === true && name==='diabetes_cause'){
                item.refAns = value
                }
                else{return}
            }

        });
         if(title==="Diabetes Questionnaire"){
            // data[1].addMore=true;
            // data[1]. addMoreSubName='treatment',
            // data[2].addMore=true;
            // data[2]. addMoreSubName='mdeication',
            // data[11].addMore=true;
            // data[11]. addMoreSubName='admitted',
            data.forEach(ele=>{
                if(ele.addMore){
                    ele.subQuestions=createChunckArray(ele.subQuestions,ele.totalAdd)
                }
            })
        }
        console.log("checking data answer1",data,name,value)
        return data;
    }
    const checkValidation = (finalFormData) => {
        let check = true;
        const datacheck = (formdata) => {
            if(title==="Diabetes Questionnaire" && formdata[0].answer==="No"){
                check=true
            } else {
                for (let i = 0; i < formdata.length; i++) {
                    const item = formdata[i];
                    // console.log("check1",title, item, item.type !== "HEADING", !item.answer, item.answer == "", item.type !== "HEADING" && (!item.answer || item.answer == ""))
                    if (item.type !== "HEADING" && (!item.answer || item.answer == "")) {
                            // console.log("check validation1", item)
                        check = false;
                        return false;
                        // break;
                    } else if (item.subQuestions && item.subQuestions.length > 0) {
                        // console.log("check validation2")
                        if(title==="Diabetes Questionnaire" && item.answer==="No" && item.ansBtn){
                           check=true
                        }else{
                            if(item.addMoreSubName){
                                item.subQuestions?.forEach(ele=>{
                                    datacheck(ele)
                                })
                              
                            }else{
                                datacheck(item.subQuestions)
                            }
                        }
                       
                      
                    }
                    // return check
                }
            }
            
        }
        datacheck(finalFormData);

        return check;
    }
    const formChangeHandler = ({ name, value, formData, formChangeHandler, referenceAns,addmore }) => {
        //  console.log('name, value, quesData, formName', name, value)
        // if (quesData.type === 'ques') {
        let data = JSON.parse(JSON.stringify(formData))
        let finalFormData = mapSaveData(data, name, value, referenceAns,addmore)
        // console.log('name, value, quesData, formName', finalFormData)
        setFormValues(finalFormData)
        // console.log('check validation data', checkValidation(finalFormData))
        let isvalidform = checkValidation(finalFormData)
        checkIsvalid(isvalidform)
        // console.log("maped data", finalFormData)

        // diabetes form on 'No' click save open

    }

    useEffect(() => {
        const filterQuestion = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        const getApidata = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesDataList?.filter((item) => filterQuestion[0]?.id === item.id)
        let formData = questionnaireList[formName]
        setFormValues(formData)
      
        if (getApidata && getApidata[0]?.data?.length > 0) {
            // console.log("checking data===", [...getApidata[0]?.data])
            const data = [...getApidata[0]?.data]
            if(title==="Diabetes Questionnaire"){
                data[1].addMore=true;
                data[1].addMoreSubName='treatment',
                data[1].totalAdd=3;
                data[2].addMore=true;
                data[2].addMoreSubName='mdeication',
                data[2].totalAdd=4;
                data[11].addMore=true;
                data[11].addMoreSubName='admitted',
                data[11].totalAdd=3;
                data.forEach(ele=>{
                    if(ele.addMore){
                        ele.subQuestions=createChunckArray(ele.subQuestions,ele.totalAdd)
                    }
                })
            }
            console.log("check coming data",data)
            setFormValues(data)
            let isvalidform = checkValidation(data)
            checkIsvalid(isvalidform)
        }else{
            let isvalidform = checkValidation(formData)
            checkIsvalid(isvalidform)
        }

    }, []);
       
    const addMoreQuestionsNew=(item,data,addMoreName)=>{
         console.log("add more 2===>",item,data)
         const items=JSON.parse(JSON.stringify(formValues))
         const updatedData=  items.map(ele=>{
            console.log(ele,ele?.addMoreSubName,addMoreName)
            if(ele?.addMoreSubName===addMoreName){
                ele.subQuestions=item
            }
            return ele;
         })
         setFormValues(updatedData)
        }
        const deleteMoreHandlerNew=(item,index,addMoreName)=>{
            const items=JSON.parse(JSON.stringify(formValues))
            const updatedData=  items.map((ele,idx)=>{
            console.log(ele,ele?.addMoreSubName)
            if(ele?.addMoreSubName===addMoreName){
                const subQuestion=ele.subQuestions.filter((val,idx1)=>idx1 !== index);
                ele.subQuestions= subQuestion
            }
            return ele;
         })
         console.log("updated data===>",updatedData)
         setFormValues(updatedData)
        }
    const renderElement = (formName, formValues, formik, title, newTitle, userType) => {
        // console.log("checking===>", formName, formValues, formik, title)
        // const filterQuestion = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        // const getApidata = accDetails?.additionalInfoDocs && accDetails?.additionalInfoDocs[userType]?.quesDataList?.filter((item) => filterQuestion[0]?.id === item.id)
        // let newFormData = []
        // // if (getApidata && getApidata[0]?.data?.length > 0) {
        // //     newFormData = [...getApidata[0]?.data]
        // // }else{
        //     newFormData=formData;
        // // }
        // console.log("check data for new work", formData)
        return <FormLayout
            formName={formName}
            formData={formValues}
            formValues={formValues}
            formik={formik}
            formChangeHandler={formChangeHandler}
            newTitle={newTitle}
            addMoreQuestionsNew={addMoreQuestionsNew}
            deleteMoreHandlerNew={deleteMoreHandlerNew}
        />
    }


    const formSaveHandler = (e, formName, newTitle, userType) => {
        // console.log('formValues', formName, formValues, formValues[formName], Object.values(formValues[formName]))
        const filterQuestion = accDetails?.additionalInfoDocs[userType]?.quesList.filter((item) => item.documentCdValue?.toLowerCase() === newTitle.toLowerCase())
        // let addNonupload = accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList
        // let docQuesList = addNonupload?.filter(item => item.questionnaire === true)
        // console.log('docQuesList', accDetails?.additionalInfoDocs[userType]?.quesList, userType, filterQuestion && filterQuestion[0])
        // let data = Object.values(formValues[formName])
        let payload = {
            "policyNumber": accDetails?.policyNumber,
            "proposalNumber": accDetails?.proposalNumber,
            "uwId": accDetails?.additionalInfoDocs?.uwId,
            "additionalQuestionnaire": [
                {
                    'id': filterQuestion[0]?.id,
                    "data": []
                }
            ]
        }
        if(title==="Diabetes Questionnaire"){
            const dataCheckDia=JSON.parse(JSON.stringify(formValues))
            dataCheckDia.forEach(ele=>{
                if(ele.addMore){
                  ele.subQuestions =  ele?.subQuestions.flat();
                }
            })
            console.log("final data",dataCheckDia)
            // payload.additionalQuestionnaire[0].data=dataCheckDia;
        }else{
            payload.additionalQuestionnaire[0].data=formValues;
        }
        
        console.log('final data 111', payload)
        dispatch(saveQuestionnaireAction(payload, res => {
            // console.log('res', res)
            dispatch(dashboardAction(accDetails.proposalNumber, (res) => { }))
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


