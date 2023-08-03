import React, { useState, useEffect} from 'react'
// import PopUpPage from '@/component/PopUpPage';
// import Input from "../../component/Input";
import PopUpPage from '@/container/PopUpPage';
import Input from '../Input';
import { toaster } from '@/utils/toaster';
import Axios from "axios";

const Payment = (props) => {
 const [showOfflinePopup, setShowOfflinePopup]= useState(false)
 const [showOnlinePopup, setShowOnlinePopup] = useState(false)
 const [validationInput, setValidationInput] = useState('')
 const [dob, setDob] = useState();
 const [pan, setPan] = useState();
 const [enabled, setenabled] = useState(false)


    useEffect(() => {
        const panReg = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
        if ((validationInput.length === 10 || panReg.test(validationInput)) ) {
          setenabled(true)
        }
        else {
          setenabled(false)
        }
      }, [validationInput])

    const closeHandler=()=>{
        setShowOfflinePopup(false)
        setShowOnlinePopup(false)
    }
    
    const offlineBtnHandler= ()=>{
        setShowOfflinePopup(true)
    }

    const onlineBtnandler =()=>{
        setShowOnlinePopup(true)
    }
    const dobPanHandler = (e) => {
        let val = e.target.value;
        const reg = /^[A-Za-z]/
        if (reg.test(val.charAt(0))) {
          let value = val.toUpperCase()
          if (val.length >= 11) {
            return false
          }
          setValidationInput(value)
          setPan(value)
        }
        else {
          if (val.length >= 11) {
            return false
          }
          let abcd = transformDateFormat(val)
          setValidationInput(abcd)
          setDob(abcd)
        }
    
      }
    
      const transformDateFormat = (dateStr) => {
        const pattern = /^(\d{2})(\d{2})(\d{4})$/;
        const replacement = '$1-$2-$3';
        const transformedDate = dateStr.replace(pattern, replacement);
        return transformedDate;
      }

      const validatePaymentLink = (query) => {
        Axios
        .get(
          `https://dev-api-proposal.bhartiaxa.com/public/api/v1/newbilldesk/validatePaymentLink?${query}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((resp) => {
          if(resp.data.body.DateValidate || resp.data.body.PanValidate) {
             setShowOnlinePopup(false)
            // this.openPaymentOption();
          } 
        })
        .catch((err) => {
          toaster('error', err?.message);

        });
      }
    const validateData =()=>{
        let query;
        let proposalNo ="3107424841"
        if(dob){
            query = `proposalNumber=${proposalNo}&dateOfBirth=${validationInput}&panNumber`;
            validatePaymentLink(query);
        }else{
            query = `proposalNumber=${proposalNo}&panNumber=${validationInput}&dateOfBirth`;
            validatePaymentLink(query);
        }
    }
  return (
    <div>
         <ul className="lst_prpsl">
                    <li>
                      <div className="lnkbx">Click here to initiate the 
                        <span onClick={onlineBtnandler} className="lnktxtbx">{props.isText ? props.isText : 'Pay Online'}</span>
                             {!props.showOffline &&
                              <>
                               <span className='text'>OR</span>
                            <span className=" ml-5 lnktxtbx"><span onClick={offlineBtnHandler}>Pay Offline</span></span> 
                              </>}
                              
                        </div>
                    </li>
         </ul>

         {showOfflinePopup && 
         <PopUpPage
         heading={'Pay Offline'}
         onClose={closeHandler}
         >
            <>
            <div className='content'>Request you to please connect with your sales representative or agent</div>        
            <div className='btn'>
             <div onClick={closeHandler} className="okbtnbx payofline_close">OK</div>
            </div>
            </>
        
         </PopUpPage> }
         {showOnlinePopup &&
         <PopUpPage
           heading={'Please Validate Using PAN Or DOB'}
           onClose={closeHandler}
           addCss={'pan-dob'}
         >
            <div className='pan-dob-wrapper'>
            <div>PAN/DOB(DD-MM-YYYY)</div>
              <Input
              type="text"
              placeholder=""
              cssClass="panDobInput"
              label="PAN/DOB(DD-MM-YYYY)"
              value={validationInput}
              changeHandler={(e) =>
                { 
                    dobPanHandler(e)
                }
              }
              
            />
            </div>
           
             <div className='btn'>
             <div onClick={validateData} className={`validate-btn ${enabled? "enable": ''}`}>Validate</div>
            </div>
         </PopUpPage>

         }
    </div>
  )
}

export default Payment;