import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Input from '@/component/Input'
import OTPInput from '../OTPInput';
import otpCross from "../../Assets/images/otp-cross-icon.png"
import thankYou from "../../Assets/images/thank-you-bg.png";
import questionMark from "../../Assets/images/qstn.png"
import Image from 'next/image';
import { downloadAction } from '../../redux/action/downloadAction';
import { dashboardAction } from '@/redux/action/dashboardAction'
import UploadDocModal from '../../component/PopUpPage/UploadDocModal'
import { downloadData } from '../../data'
import { sendOTPAction, verifyOTPAction } from '../../redux/action/OTPAction'
import { toaster } from "../../utils/toaster"
import { uploadAction } from '../../redux/action/uploadAction'


const CounterPage = ({ accDetails }) => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('');
  const [showOtp, setShowOtp] = useState(false);
  const [declineCounter, setDeclineCounter] = useState(false);
  const [reasonOne, setReasonOne] = useState(false);
  const [reasonTwo, setReasonTwo] = useState(false);
  const [declineReason, setDeclineReason] = useState('');
  const [otp, setOtp] = useState('');
  const [showThankyou, setShowThankyou] = useState();
  const [showUploadModal, setShowUploadModal] = useState(false);

  const [overlay, setOverlay] = useState(false);
  const [refId, setRefId] = useState();
  const [revisedAction, serevisedActiont] = useState('')

  const customerDetail = useSelector((state) => state.customerDetailReducer);
  const documentList = useSelector((state) => state.customerDetailReducer?.policyDocuments)

  useEffect(() => {
    if (declineReason || (!declineReason && inputValue
      // && inputValue.counterReason !== 'Request for reconsidering the counter offer'
    )) {
      sendOtp();
      setOverlay(true)
    }
  }, [declineReason, inputValue])


  const changeHandler = (name, value) => {
    setInputValue({
      [name]: value,
    });
    if (value === 'Accept the revised offer' || value === 'Adjust the Sum Assured to match Existing Premium') {
      setReasonOne(''); setReasonTwo(''); setDeclineReason('')
    }
    else setShowOtp(false)

    if (value === 'Decline the revised offer') setDeclineCounter(true)
    else setDeclineCounter(false)

    if (value === 'Accept the revised offer') {
      serevisedActiont('ACCEPTED')
    }
    else if (value === 'Adjust the Sum Assured to match Existing Premium') {
      serevisedActiont('ADJUST_SUM_ASSURED')
    }
    else if (value === 'Decline the revised offer') {
      serevisedActiont('REJECTED')
    }
    else if (value === 'Request for reconsidering the counter offer') {
      serevisedActiont('RECONSIDER_COUNTER_OFFER')
      // serevisedActiont('ACCEPTED')
    }
  }

  const declineHandler = (value1, value2) => {
    if (value1) {
      setReasonOne(true)
      setReasonTwo(false)
      setDeclineReason("Not Interested to buy the policy")
    }
    else if (value2) {
      setReasonTwo(true)
      setReasonOne(false)
      setDeclineReason("Request for reconsidering the counter offer")
    }
  }

  const submitHandler = () => {
    verifyOtp();
  }

  const sendOtp = () => {
    console.log('declineReason', declineReason)
    const data = {
      "consentType": "REVISED_OFFER",
      "proposalNumber": localStorage.getItem("proposalNo"),
      "consentAction": revisedAction,
      "rejectionReason": declineReason
    }


    dispatch(sendOTPAction(data, (resp) => {
      // console.log('res', resp)
      setRefId(resp?.body?.body.refId)
      setShowOtp(true);
      setOverlay(true)
    }))
  }

  const verifyOtp = () => {
    const data = {
      "otp": otp,
      "refId": refId,
      "key": "REVISED_OFFER",
      "action": revisedAction
    }
    let proposalNo = localStorage.getItem("proposalNo")
    let fileName = [documentList['REVISED_OFFER_DOC'], documentList['REVISED_BI_DOC']]

    dispatch(verifyOTPAction(data, proposalNo, fileName, (resp) => {
      // console.log('resp', resp)
      setOtp("")
      setShowOtp(false);
      if (inputValue.counterReason === 'Request for reconsidering the counter offer') {
        setShowUploadModal(true)
      }
      else {
        setShowThankyou(true)
        dispatch(dashboardAction(customerDetail.proposalNumber, (res) => {
        }))
        window.location.reload();
      }
    }))
  }

  const downloadHandler = (fileName) => {
    let proposalNo = localStorage.getItem("proposalNo")
    let file = documentList[fileName]
    if (file === '' || file === ' ') {
      toaster('error', 'File not exist.')
    }
    else {
      dispatch(downloadAction(proposalNo, file))
    }
  }

  const uploadDocHandler = (fileValue) => {
    let file = fileValue
    let fileSize = fileValue.size
    let formData = new FormData();
    formData.append("file", file);
    let headerData
    if (fileSize <= 10485760) {
      headerData = {
        documentCd: 'COC',
        docCategoryCd: 'COCL',
        docCategoryTypeCd: 'CO',
        documentType: 'CO',
        partyType: 'INSURER',
        id: 1,
        documentSide: 'FRONT_SIDE',
        policyNo: customerDetail?.policyNumber,
        documentNumber: 1,
        proposalNo: customerDetail?.proposalNumber,
        uwId: 49786
      };
      dispatch(uploadAction(headerData, formData, (res) => {
        if (res.status === 'OK') {
          setShowUploadModal(false)
          setShowThankyou(true)
          dispatch(dashboardAction(customerDetail.proposalNumber, (res) => {
          }))
        }
      }))
    }
  }

  return (
    <div className='card-body'>
      <div className="rvsd_dwnld_outr">
        <div className="rvsd_dwnld" >Please download the below documents to check your revised offer <br /><br />
          <span className="lnktxtbx" onClick={() => downloadHandler('REVISED_OFFER_DOC')}>Counter Offer Letter</span>
          <span className="lnktxtbx" onClick={() => downloadHandler('REVISED_BI_DOC')}>Revised Benefit Illustration</span>
        </div>
      </div>
      {
     accDetails?.counterOfferConsentAction !=='true' && 
     <div>
        <div>
          <div className='mb-2 rvsd-conatiner'>
            <div className='rvsd_blk'>
              <div className='list'>
                <Input
                  type='radio'
                  value='Accept the revised offer'
                  name='counterReason'
                  changeHandler={(e) => changeHandler(e.target.name, e.target.value)}
                  checked={
                    inputValue.counterReason === "Accept the revised offer"
                  }
                />
              </div>
              <div className='label'>Accept the revised offer</div>
            </div>
            <div className='rvsd_blk-tooltip'>
              <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt="" />
                <span className="tooltiptext">Check the counter offer letter and revised benefit illustration for your revised offer and if you are ok then please select this option to provide consent via OTP</span>
              </span>
            </div>
          </div>
        </div>
        <div className='mb-2 rvsd-conatiner'>
          <div className='rvsd_blk'>
            <div className='list'>
              <Input
                type='radio'
                value='Adjust the Sum Assured to match Existing Premium'
                name='counterReason'
                changeHandler={(e) => changeHandler(e.target.name, e.target.value)}
                checked={
                  inputValue.counterReason === "Adjust the Sum Assured to match Existing Premium"
                }
              />
            </div>
            <div className='label'>Adjust the Sum Assured to match Existing Premium</div>
          </div>
          <div className='rvsd_blk-tooltip'>
            <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt="" />
              <span className="tooltiptext">Select this option and provide OTP consent if you want to adjust your insurance cover and keep the premium same as what you have already paid.</span>
            </span>
          </div>
        </div>
        <div className='mb-2 rvsd-conatiner'>
          <div className='rvsd_blk'>
            <div className='list display_flex'>
              <Input
                type='radio'
                value='Decline the revised offer'
                name='counterReason'
                changeHandler={(e) => changeHandler(e.target.name, e.target.value)}
                checked={
                  inputValue.counterReason === "Decline the revised offer"
                }
              />
            </div>
            <div className='label'>Decline the revised offer</div>
          </div>
          <div className='rvsd_blk-tooltip'>
            <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt="" />
              <span className="tooltiptext">If you are not ok with the revised offer as either you are no more interested to buy this plan or you want to request for a reconsideration (proof required for the reason for reconsideration). OTP consent is required</span>
            </span>
          </div>
        </div>
        <div className='mb-2 rvsd-conatiner'>
          <div className='rvsd_blk'>
            <div className='list display_flex'>
              <Input
                type='radio'
                value='Request for reconsidering the counter offer'
                name='counterReason'
                changeHandler={(e) => changeHandler(e.target.name, e.target.value)}
                checked={
                  inputValue.counterReason === "Request for reconsidering the counter offer"
                }
              />
            </div>
            <div className='label'>Request for reconsidering the counter offer</div>
          </div>
          <div className='rvsd_blk-tooltip'>
            <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt="" />
              <span className="tooltiptext">Request for reconsidering the counter offer</span>
            </span>
          </div>
        </div>
      </div>
       }
      <div
        className="overlay__popup_nw"
        style={{ display: overlay ? "block" : "none" }}
      ></div>

      {/* {declineCounter &&
        <div className="box-wrap">
          <div className={`${reasonOne ? 'declinebox-selected' : 'declinebox'}`}>
            <p onClick={() => { declineHandler(true, false); }}>Not Interested to buy the policy</p>
          </div>
          <div className={`${reasonTwo ? 'declinebox-selected' : 'declinebox'}`}>
            <p onClick={() => { declineHandler(false, true); }}>Request for reconsidering the counter offer</p>
          </div>
        </div>
      } */}
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

      {showUploadModal && <UploadDocModal
        heading={`Upload`}
        // subheading={'uploadModalHeading'}
        onClose={() => setShowUploadModal(false)}
        // label={label}
        uploadDocHandler={uploadDocHandler}
        proposalNo={customerDetail.proposalNumber}
      />}

    </div>
  )
}

export default CounterPage