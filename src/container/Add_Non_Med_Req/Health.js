import React, { useState } from 'react'
import Image from 'next/image'
import NonMedForm from './form.js'
import Button from '../../component/Button'
// import otpCross from "../..Assets/images/otp-cross-icon.png"
import thankYou from "../../Assets/images/thank-you-bg.png";
import dwnArrow from "../../Assets/images/dwn-arw.png";


const Health = ({ data }) => {
  const [formValues, setFormValues] = useState({})
  const [openAcc, setOpenAcc] = useState(null)
  const [showOtp, setShowOtp] = useState(false);
  const [showThankyou, setShowThankyou] = useState();
  const [overlay, setOverlay] = useState(false);

  const toggleAccordion = (id) => {
    setOpenAcc(openAcc === id ? null : id)
  }
  const renderElement = (formName) => {
    return <NonMedForm formName={formName}
    formValues={formValues} 
    setFormValues={setFormValues}
    />
  }
  // console.log('formValues',formValues)

  return (
    <>
      <div
        className="overlay__popup_nw"
        style={{ display: overlay ? "block" : "none" }}
      ></div>

      <ul className='nonMedListBlock'>
        {data.map(item => {
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
                    renderElement(item.formName)
                  }
                </div>
                : ''
              }
            </li>
          )
        })}
      </ul>

      <div className='consent-blk'>
        <div className='consent-btn'>
          <Button
            className={'activeBtn'}
            clickHandler={''}
            type='button'
            buttonText={'Submit'}
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

export default Health
