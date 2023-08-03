import React, { useState } from 'react';
import Input from '@/component/Input'
import OTPInput from '../OTPInput';
import otpCross from "../../Assets/images/otp-cross-icon.png"
import thankYou from "../../Assets/images/thank-you-bg.png";
import questionMark from "../../Assets/images/qstn.png"
import Image from 'next/image';

const CounterPage = () => {
    const[inputValue, setInputValue]= useState('');
    const[showOtp, setShowOtp]= useState(false);
    const[declineCounter, setDeclineCounter] = useState(false);
    const[reasonOne, setReasonOne] = useState(false);
    const[reasonTwo, setReasonTwo] = useState(false);
    const [declineReason, setDeclineReason] = useState('');
    const [otp, setOtp]= useState('');
    const[showThankyou, setShowThankyou] = useState();
    const[overlay, setOverlay] = useState(false)

    const changeHandler = (name, value)=>{
        setInputValue({
            [name]: value,
          });
          if(value==='Accept the revised offer' || value=== 'Adjust the Sum Assured to match Existing Premium') {setShowOtp(true); setOverlay(true)}
          else setShowOtp(false)
          if(value==='Decline the revised offer') setDeclineCounter(true)
          else setDeclineCounter(false)
    }
    
    const declineHandler = (value1, value2)=>{
       if(value1){
        setReasonOne(true)
        setReasonTwo(false)
        setDeclineReason("Not Interested to buy the policy")
       }
       else if(value2){
        setReasonTwo(true)
        setReasonOne(false)
        setDeclineReason("Request for reconsidering the revised offer")
       }
    }

    const submitHandler =()=>{
        setShowThankyou(true)
        setShowOtp(false)
    }
  return (
    <div className='card-body'>
        <div className="rvsd_dwnld_outr">
				<div className="rvsd_dwnld" >Please download the below documents to check your revised offer <br/><br/>
                    <span className="lnktxtbx">Counter Offer Letter</span>
                    <span className="lnktxtbx">Revised Benefit Illustration</span>
                </div>             
		</div>
        <div className='mb-2'>
        <div className='list'>
            <Input
            type='radio'
            value='Accept the revised offer'
            name='counterReason'
            changeHandler={(e)=>changeHandler(e.target.name, e.target.value)}
            checked={
                inputValue ==="Accept the revised offer"
              }
            />
                   </div>
            <div className='label'>Accept the revised offer</div>
              <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt=""/>
				 <span className="tooltiptext">Check the counter offer letter and revised benefit illustration for your revised offer and if you are ok then please select this option to provide consent via OTP</span>
              </span>
        </div>
       
 
       <div className='mb-2'>
       <div className='list'>
        <Input
            type='radio'
            value='Adjust the Sum Assured to match Existing Premium'
            name='counterReason'
            changeHandler={(e)=>changeHandler(e.target.name, e.target.value)}
            checked={
                inputValue ==="Adjust the Sum Assured to match Existing Premium"
              }
            />
            </div>
            <div className='label'>Adjust the Sum Assured to match Existing Premium</div>
                <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt=""/>
                    <span className="tooltiptext">Select this option and provide OTP consent if you want to adjust your insurance cover and keep the premium same as what you have already paid.</span>
                </span>
        </div> 
       
       <div className='list'>
       <Input
            type='radio'
            value='Decline the revised offer'
            name='counterReason'
            changeHandler={(e)=>changeHandler(e.target.name, e.target.value)}
            checked={
                inputValue ==="Decline the revised offer"
              }
            />
            </div>
             <div className='label'>Decline the revised offer</div>
               <span className="tooltipbx"><Image src={questionMark} width="14" height="14" alt=""/>
					<span className="tooltiptext">If you are not ok with the revised offer as either you are no more interested to buy this plan or you want to request for a reconsideration (proof required for the reason for reconsideration). OTP consent is required</span>
			    </span>

             <div
              className="overlay__popup_nw"
              style={{ display: overlay ? "block" : "none" }}
            ></div>

        {declineCounter && 
            <div className="box-wrap">
            <div className={`${reasonOne? 'declinebox-selected':'declinebox' }`}>
              <p onClick={()=>{declineHandler(true, false);  setShowOtp(true) ; setOverlay(true)}}>Not Interested to buy the policy</p>
            </div>
            <div className={`${reasonTwo? 'declinebox-selected':'declinebox' }`}>
              <p onClick={()=>{declineHandler(false, true); setShowOtp(true); setOverlay(true)}}>Request for reconsidering the revised offer</p>
            </div>
          </div>
        }
        {showOtp &&
        <div className={`header-otp-popup popupcmn ${showOtp && 'active'}`} >
        <div className="header-otp-popup-head">
          <div className="header-otp-popup-left">
            <h2> OTP </h2>
          </div>
          <div className="header-reject-popup-right">
          <Image onClick={()=>{setShowOtp(false); setOverlay(false)}} src={otpCross} alt="otp-cross-icon"/> </div>
        </div>
        
          <OTPInput
            otp={otp}
            resendFunc={() => {
            setOtp('')
            //    this.showOtpHandler();
            }}
            //  triggerTimmer={this.state.showOTP}
            getOTP={(otp) =>
            setOtp(otp)}
            otpKeyDownFunc={()=>{}}
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
      <Image onClick={()=>{setShowThankyou(false);setOverlay(false)}} src={otpCross} alt="otp-cross-icon"/> </div>
    </div>
    <div className="header-otp-popup-content pt-4 pl-5 pr-5 pb-3">
      <div className="row">
        <div className="col-md-12 pt-0 pb-4">
          <div> <Image className='img' style={{width:"100%", height:"12rem"}} src={thankYou} alt="thank-you-bg"/> </div>
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

    </div>
  )
}

export default CounterPage