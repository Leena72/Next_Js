import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import NonMedForm from './form.js'
import Button from '../../component/Button'
import otpCross from "../../Assets/images/otp-cross-icon.png"
import thankYou from "../../Assets/images/thank-you-bg.png";
import dwnArrow from "../../Assets/images/dwn-arw.png";
import OTPInput from '../OTPInput'
import { questionnaireAction, saveQuestionnaireAction } from '../../redux/action/questionnaireAction'
import { sendOTPAction, verifyOTPAction } from '../../redux/action/OTPAction'
import { toaster } from '@/utils/toaster';
import Accordion2 from '../../component/Accordion/Accordion2.js';
import { questionnaireList } from '../../data'

const Health = ({ insureddata, proposerdata, category }) => {
  const [formValues, setFormValues] = useState()
  const [openAcc, setOpenAcc] = useState(null)
  const [openCatAcc, setOpenCatAcc] = useState(null)
  const [showOtp, setShowOtp] = useState(false);
  const [showThankyou, setShowThankyou] = useState();
  const [overlay, setOverlay] = useState(false);
  const [otp, setOtp] = useState('');
  const [refId, setRefId] = useState();
  const [fileName, setFileName] = useState('')
  const [submitOtpValid, setSubmitValid] = useState(true)
  const accDetails = useSelector((state) => state.customerDetailReducer);
  let uwId = accDetails?.additionalInfoDocs?.uwId

  const dispatch = useDispatch()
  const toggleAccordion = (id) => {
    setOpenAcc(openAcc === id ? null : id)
  }
  const toggleCatAccordion = (id) => {
    setOpenCatAcc(openCatAcc === id ? null : id)
  }
  const renderElement = ({ formName, title, newTitle }, userType) => {
    console.log("checked==", formName, userType)
    let formData = questionnaireList[formName]
    // setFormValues(formData)
    return <NonMedForm formName={formName}
      formValues={formValues}
      accDetails={accDetails}
      setFormValues={setFormValues}
      title={title}
      newTitle={newTitle}
      userType={userType}
    />
  }
  // console.log('formValues',formValues)
  const checkSubmitValidation = (data) => {
    return data.forEach(item => {
      if (item.data && item.data.length===0) {
        console.log('check submit otp4', item.data)
        setSubmitValid(false)
      }
    });
  }
  useEffect(() => {
    const { primaryInsuredDocumentDetail, proposerDocumentDetail } = accDetails?.additionalInfoDocs;
    setSubmitValid(true)
    if (primaryInsuredDocumentDetail && primaryInsuredDocumentDetail?.quesDataList?.length > 0) {
      checkSubmitValidation(primaryInsuredDocumentDetail?.quesDataList)
    }
    if (proposerDocumentDetail && proposerDocumentDetail?.quesDataList?.length > 0) {
      checkSubmitValidation(proposerDocumentDetail?.quesDataList)
     }
    // console.log("check submit otp1", submitValid)
    // setSubmitValid(submitValid)
  }, [accDetails])
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
      // verifyOtp()
    }))
  }

  const finalFormSubmit = () => {
    sendOtp()
  }

  const verifyOtp = () => {
    const data = {
      "otp": otp,
      "refId": refId,
      "key": "ADDITIONAL_QUESTIONNAIRE",
      "action": ""
    }
    let proposalNo = localStorage.getItem("proposalNo")
    dispatch(verifyOTPAction(data, proposalNo, fileName, (resp) => {
      if (resp?.body?.body) {
        toaster('success', resp?.body?.message);
        setOtp("")
        formSubmitHandler()
        setShowOtp(false);
        setShowThankyou(true)

      } else {
        toaster('error', resp?.body?.message);
        setOtp('')
      }
    }))
  }
  const otpSubmitHandler = () => {
    verifyOtp()
  }

  const formSubmitHandler = () => {
    let payload = {
      "proposalNumber": accDetails?.proposalNumber,
      "policyNumber": accDetails?.policyNumber,
      "uwId": uwId,
      "otp": otp
    }
    dispatch(questionnaireAction(payload, (res) => {
      setFileName(res.body.fileName)
      formvalidate()
    }))
  }
  const renderCatElement = (item, title) => {
    switch (title) {
      case 'Insured':
        return <>{
          insureddata?.length > 0
          &&
          <>
            <ul className='nonMedListBlock'>

              {insureddata.map(item => {
                return (
                  <li className='nonMedList' key={item.id} >
                    <div className='non-block-heading ' onClick={() => toggleAccordion(item.id)}>
                      <div>{item.title}</div>
                      <div className='acc-active-icon '>
                        <Image
                          className={openAcc === item.id ? 'upArrow' : ''}
                          src={dwnArrow}
                          alt='icon'
                        />
                      </div>
                    </div>
                    {openAcc === item.id ?
                      <div className='show'>
                        {
                          renderElement(item, 'primaryInsuredDocumentDetail')
                        }
                      </div>
                      : ''
                    }
                  </li>
                )
              })}
            </ul>

          </>
        }
        </>
      case 'Proposer':
        return <>  {
          proposerdata?.length > 0
          &&
          <>
            <ul className='nonMedListBlock'>
              {proposerdata.map(item => {
                return (
                  <li className='nonMedList' key={item.id} >
                    <div className='non-block-heading ' onClick={() => toggleAccordion(item.id)}>
                      <div>{item.title}</div>
                      <div className='acc-active-icon '>
                        <Image
                          className={openAcc === item.id ? 'upArrow' : ''}
                          src={dwnArrow}
                          alt='icon'
                        />
                      </div>
                    </div>
                    {openAcc === item.id ?
                      <div className='show'>
                        {
                          renderElement(item, 'proposerDocumentDetail')
                        }
                      </div>
                      : ''
                    }
                  </li>
                )
              })}
            </ul>
          </>
        } </>

      default:
        break;
    }
  }
  return (
    <>
      <div
        className="overlay__popup_nw"
        style={{ display: overlay ? "block" : "none" }}
      ></div>
      <ul>
        {category?.map((item, id) =>
          <li
            key={id}>
            <Accordion2
              item={item}
              openAccordion={openCatAcc}
              toggleAccordion={toggleCatAccordion}
            />
            {openCatAcc === item.id ?
              <div className='show'>
                {
                  renderCatElement(item, item.title)

                }
              </div>
              : ''
            }

          </li>
        )}
        <div className='consent-blk submit-consent-btn'>
          <div className='form-btn'>
            <Button
              className={'activeBtn'}
              clickHandler={finalFormSubmit}
              type='button'
              buttonText={'Submit'}
              disabled={!submitOtpValid}
            />
          </div>
        </div>
      </ul>

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
            <button onClick={otpSubmitHandler} className="sbmt_btn">Submit</button>
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

export default Health
