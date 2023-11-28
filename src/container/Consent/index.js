import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { consentForChangeData } from '.././../data'
import Accordion2 from '../../component/Accordion/Accordion2'
import Button from '../../component/Button'
import Input from '../../component/Input'
import ConsentLayout from './ConsentLayout'
import FormFieldConsent from '../../component/FormFieldConsent'
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";
import { downloadAction } from '../../redux/action/downloadAction';
import { toaster } from '@/utils/toaster';
import { sendOTPAction, verifyOTPAction } from '../../redux/action/OTPAction'
import Aggree from '../../Assets/images/insta-verify.svg'
import Reject from '../../Assets/images/reject-icon.png'
import OTPInput from '../../container/OTPInput';
import otpCross from "../../Assets/images/otp-cross-icon.png"
import thankYou from "../../Assets/images/thank-you-bg.png";
import ConsentReject from '../../component/PopUpPage/ConsentReject';
import ConsentRejectMsg from '../../component/PopUpPage/ConsentRejectMsg';



const Consent = ({ accDetails, accordionDetails, proposalNo }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [showOtp, setShowOtp] = useState(false);
    const [showThankyou, setShowThankyou] = useState();
    const [otp, setOtp] = useState('');
    const [refId, setRefId] = useState();
    const [overlay, setOverlay] = useState(false);
    const [showRejectPopUp, setshowRejectPopUp] = useState(false)
    const [showRejectMsgPopUp, setShowRejectMsgPopUp] = useState(false)
    const [rejectMsg, setRejectMsg] = useState('')
    const dispatch = useDispatch()
    const consentDetail = accordionDetails.filter((item) => item.status === 'QUALITY_CHECK')
    const addConsentInfo = consentDetail && consentDetail[0]?.additionalInfo
    const policyDocuments = accDetails?.policyDocuments
    console.log('>>>', policyDocuments, policyDocuments.hasOwnProperty('BI_TAG_NAME'),

        policyDocuments.hasOwnProperty('REVISED_BI_DOC') &&
        policyDocuments['REVISED_BI_DOC'] !== ' ')
    const [action, setAction] = useState('')

    const renderElement = (data, title) => {
        let label
        if (title === 'Proposer Details') {
            label = 'ProposerDetails'
        }
        else if (title === 'Insured Details') {
            label = 'InsuredDetails'
        }
        else if (title === 'Plan Details') {
            label = 'PlanDetails'
        }
        else if (title === 'Health Questionnaire Details') {
            label = 'QuestionnaireDetails'
        }

        return <ConsentLayout
            data={data.detail}
            title={title}
            label={label}
            consentData={label !== 'QuestionnaireDetails' ? Object.entries(addConsentInfo[label]) : addConsentInfo[label]}
        />
    }
    const clickHandler = () => { }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }

    const downloadHandler = (fileLabel) => {
        if (policyDocuments.hasOwnProperty(fileLabel)) {
            let file = policyDocuments[fileLabel]
            let proposalNo = accDetails?.proposalNumber
            dispatch(downloadAction(proposalNo, file))
        }
        else {
            toaster('error', 'File not exist');
        }
    }
    const acceptHandler = (action) => {
        const data = {
            "consentType": "DATA_CHANGE",
            "proposalNumber": accDetails?.proposalNumber,
            "consentAction": "ACCEPTED",
            "rejectionReason": action === 'rejected' ? rejectMsg : ''
        }

        dispatch(sendOTPAction(data, (resp) => {
            setRefId(resp?.body?.body?.refId)
            if (action === 'rejected') {
                setshowRejectPopUp(false)
                setShowRejectMsgPopUp(false)
                setShowOtp(true);

            }
            else {
                setShowOtp(true);
            }
            setOverlay(true)

            setAction(action)
        }))
    }
    const verifyOtp = () => {
        const data = {
            "otp": otp,
            "refId": refId,
            "key": "DATA_CHANGE",
            "action": action
        }
        let proposalNo = accDetails?.proposalNumber
        let fileName = ''

        dispatch(verifyOTPAction(data, proposalNo, fileName, (resp) => {
            // console.log('resp',resp.data.body)
            setOtp("")
            setShowOtp(false);
            setShowThankyou(true)
        }))
    }
    const submitHandler = () => {
        verifyOtp();
    }
    const rejectChangeHandler = (value) => {
        setRejectMsg(value)
    }
    const consentAcc = accDetails.policyFor === 'OTHER' ? consentForChangeData : 
    consentForChangeData.filter((item)=>{
        return item.title !== 'Proposer Details'
    })
    // console.log('consentAcc',consentAcc)
    return (<>
        <ul className='addNonMedAcc'>
            {
                consentAcc.map(item => {
                    
                    return (
                        <li className='addNonMedAccList' key={item.id} >
                            <Accordion2
                                item={item}
                                openAccordion={openAccordion}
                                toggleAccordion={toggleAccordion}
                            />
                            {openAccordion === item.id ?
                                <div className='show'>
                                    {
                                        renderElement(item, item.title)
                                    }
                                </div>
                                : ''
                            }
                        </li>
                    )
                })
            }
        </ul>
        <div className='consent-blk consent-tag-blk'>
            <div className='consent-tag'>Please check the below documents for your reference</div>
            <div className='consent-down-container'>
                {policyDocuments.hasOwnProperty('REVISED_BI_DOC') &&
                    policyDocuments['REVISED_BI_DOC'].length !== 0 &&
                    policyDocuments['REVISED_BI_DOC'] !== ' ' &&
                        policyDocuments['REVISED_BI_DOC'] !== ''
                    &&
                    <div className='consent-download'>
                        <span>Revised Benefit Illustration</span>
                        <a onClick={() => downloadHandler('REVISED_BI_DOC')}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        </a>
                    </div>
                }
                {policyDocuments.hasOwnProperty('PDF_TAG_NAME') &&
                    policyDocuments['PDF_TAG_NAME'].length !== 0 &&
                    policyDocuments['PDF_TAG_NAME'] !== ' ' &&
                        policyDocuments['PDF_TAG_NAME'] !== ''
                    &&
                    <div className='consent-download'>
                        <span>Revised Proposal Form</span>
                        <a onClick={() => downloadHandler('PDF_TAG_NAME')}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        </a>
                    </div>
                }
                {
                    policyDocuments.hasOwnProperty('COVID_TAG_NAME_2') &&
                    policyDocuments['COVID_TAG_NAME_2'].length !== 0 &&
                    policyDocuments['COVID_TAG_NAME_2'] !== ' ' &&
                        policyDocuments['COVID_TAG_NAME_2'] !== ''
                    &&
                    <div className='consent-download'>
                        <span>Covid Questionnaire</span>
                        <a onClick={() => downloadHandler('COVID_TAG_NAME_2')}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        </a>
                    </div>
                }
                {policyDocuments.hasOwnProperty('FORM60_TAG_NAME') &&
                    policyDocuments['FORM60_TAG_NAME'].length !== 0 &&
                    policyDocuments['FORM60_TAG_NAME'] !== ' ' &&
                        policyDocuments['FORM60_TAG_NAME'] !== ''
                    &&
                    <div className='consent-download'>
                        <span>Form 60</span>
                        <a onClick={() => downloadHandler('FORM60_TAG_NAME')}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        </a>
                    </div>
                }
            </div>
            <label>
                <Input
                    type='radio'
                    id='agree'
                    name='radio'
                    changeHandler={(e) => { e.target.checked ? setDisabled(false) : setDisabled(true) }}
                />
                <span>I agree to the above changes</span>
            </label>
            <div className='consent-btn'>
                <Button
                    className={'activeBtn'}
                    clickHandler={() => acceptHandler('accepted')}
                    type='button'
                    buttonText={'Accept'}
                    // buttonIcon={Aggree}
                    disabled={disabled}
                />
                <Button
                    className={'activeBtn'}
                    clickHandler={() => setshowRejectPopUp(true)}
                    type='button'
                    // buttonIcon={Reject}
                    buttonText={'Reject'}
                />
            </div>
        </div>
        {showOtp &&
            <div className={`header-otp-popup popupcmn ${showOtp && 'active'}`} >
                <div className="header-otp-popup-head">
                    <div className="header-otp-popup-left">
                        <h2> OTP </h2>
                    </div>
                    <div className="header-reject-popup-right">
                        <Image onClick={() => { setShowOtp(false); setOverlay(false) }} src={otpCross} alt="otp-cross-icon" /> </div>
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
        {
            showRejectPopUp &&
            <ConsentReject
                text={'Please reconfirm if you want to reject the application'}
                leftHandler={() => setShowRejectMsgPopUp(true)}
                leftSideBtnText={'Yes'}
                rightHandler={''}
                rightSideBtnText={'No'}
                onClose={() => setshowRejectPopUp(false)}

            />
        }
        {
            showRejectMsgPopUp &&
            <ConsentRejectMsg
                text={'Please let us know what went wrong'}
                message={rejectMsg}
                changeHandler={rejectChangeHandler}
                btnHandler={() => acceptHandler('rejected')}
                btnText={'Submit'}
                onClose={() => setShowRejectMsgPopUp(false)}
            />
        }
    </>
    )
}

export default Consent
