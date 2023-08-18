import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { questionnaireList } from '../../../data'
import OTPInput from '../../OTPInput'
import Button from '@/component/Button'
import FormLayout from './FormLayout'
import Image from 'next/image';
import otpCross from "../../../Assets/images/otp-cross-icon.png"
import thankYou from "../../../Assets/images/thank-you-bg.png";
import { sendOTPAction, verifyOTPAction } from '../../../redux/action/OTPAction'
import { questionnaireAction } from '../../../redux/action/questionnaireAction'
import { toaster } from '@/utils/toaster';


const NonMedForm = ({ formName, formValues, setFormValues }) => {
    // const [formValues, setFormValues] = useState({});
    const [showOtp, setShowOtp] = useState(false);
    const [showForm, setshowForm] = useState(true)
    const [otp, setOtp] = useState('');
    const [overlay, setOverlay] = useState(false);
    const [refId, setRefId] = useState();
    const [showThankyou, setShowThankyou] = useState();


    let formData = questionnaireList[formName]
    const dispatch = useDispatch()
    console.log('formValues', formValues)

    const formChangeHandler = ({ name, value, quesData, formName }) => {
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
    console.log('formvalues', formValues)
    const renderElement = (formName, formValues) => {
        return <FormLayout
            formName={formName}
            formData={formData}
            formValues={formValues}
            formChangeHandler={formChangeHandler}
        />
    }
    const formSubmitHandler = () => {
        // let payload = {}
        // Object.keys(formValues)?.map((item) => {
        //     payload[item] = Object.values(formValues[item])
        // })
        // ----------------------
        // console.log('form payload>>', payload)
        // let payload = {
        //     "ALCOHOL_HABIT_QUESTION": [formValues]
        // }
        // console.log('payload', payload)
        sendOtp()
        setShowOtp(true)

        // dispatch(questionnaireAction(payload, () => {

        //     setShowOtp(true)
        // }))
    }

    const formvalidate = () => {
       
         let payload = {}
        Object.keys(formValues)?.map((item) => {
            payload[item] = Object.values(formValues[item])
        })
        dispatch(questionnaireAction(payload, () => {
            // setShowOtp(true)
        }))
    }

    const sendOtp = () => {
        const data = {
            "consentType": "ADDITIONAL_QUESTIONNAIRE",
            "proposalNumber": localStorage.getItem("proposalNo"),
            "consentAction": "ACCEPTED",
        }

        dispatch(sendOTPAction(data, (resp) => {
            console.log('resp?.data?.body?.body?.refId', resp?.body?.body?.refId)
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
        // formvalidate()
        dispatch(verifyOTPAction(data, proposalNo, (resp) => {
            // console.log('resp',resp.data.body)
            if (resp?.body?.body) {
                toaster('success', resp?.body?.message);
                setOtp("")
                setShowOtp(false); 
                setShowThankyou(true)
                formvalidate()
              }else{
                toaster('error', resp?.body?.message);
                setOtp('')
              }
        }))
    }
    const submitHandler = () => {
        verifyOtp();
    }

    // console.log('formValues', formValues)
    return (
        <>
            <div className='form-container'>
                {renderElement(formName, formValues)}
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
            <div
                className="overlay__popup_nw"
                style={{ display: overlay ? "block" : "none" }}
            ></div>
            {showOtp &&
                <div className={`header-otp-popup popupcmn ${showOtp && 'active'}`} >
                    <div className="header-otp-popup-head">
                        <div className="header-otp-popup-left">
                            <h2> OTP </h2>
                        </div>
                        <div className="header-reject-popup-right">
                            <Image onClick={() => { setShowOtp(false); setOverlay(false) }}
                                src={otpCross} alt="otp-cross-icon" /> </div>
                    </div>

                    <OTPInput
                        otp={otp}
                        resendFunc={() => {
                            setOtp('')
                            sendOtp()
                            //    this.showOtpHandler();
                        }}
                        //  triggerTimmer={this.state.showOTP}
                        getOTP={(otp) =>
                            setOtp(otp)}
                        otpKeyDownFunc={() => { }}
                    />
                    <div className='header-reject-popup-content-fot'>
                        <button onClick={submitHandler} className="sbmt_btn">Submit</button>
                    </div>
                </div>
            }
            {showThankyou &&
                <div className={`popupcmn_otpthnks popupcmn ${showThankyou && 'active'}`}>
                    <div className="header-otp-popup-head-thank-you">
                        <div className="header-reject-popup-right">
                            <Image onClick={() => { setShowThankyou(false); setOverlay(false) }} src={otpCross} alt="otp-cross-icon" /> </div>
                    </div>
                    <div className="header-otp-popup-content pt-4 pl-5 pr-5 pb-3">
                        <div className="row">
                            <div className="col-md-12 pt-0 pb-4">
                                <div> <Image className='img' style={{ width: "100%", height: "12rem" }} src={thankYou} alt="thank-you-bg" /> </div>
                                <div className="popup-thank-you-content-bot text-center">
                                    <h2> Thank you </h2>
                                    <h3> for successfully completing the application review and providing consent. </h3>
                                    <p className="pt-3"> The proposal will be processed further. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default NonMedForm


