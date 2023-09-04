import React, { useState, useEffect } from 'react'
// import PopUpPage from '@/component/PopUpPage';
// import Input from "../../component/Input";
import PopUpPage from '../../component/PopUpPage';
import Input from '../../component/Input';
import { toaster } from '@/utils/toaster';
import Axios from "axios";

const Payment = (props) => {
  const [showOfflinePopup, setShowOfflinePopup] = useState(false)
  const [showOnlinePopup, setShowOnlinePopup] = useState(false)
  const [validationInput, setValidationInput] = useState('')
  const [dob, setDob] = useState();
  const [pan, setPan] = useState();
  const [enabled, setenabled] = useState(false)


  useEffect(() => {
    const panReg = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
    if ((validationInput.length === 10 || panReg.test(validationInput))) {
      setenabled(true)
    }
    else {
      setenabled(false)
    }
  }, [validationInput])

  const closeHandler = () => {
    setShowOfflinePopup(false)
    setShowOnlinePopup(false)
  }

  const offlineBtnHandler = () => {
    setShowOfflinePopup(true)
  }

  const onlineBtnandler = () => {
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
      return
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

  const getBillDeskRequest = (data, cb) => () => {
    // dispatch({
    //   type: actionTypes.loadingOn
    // });
    Axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/newbilldesk/fetchPaymentReqInfo`, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization":'Bearer'+' '+localStorage.getItem("accessToken")
      },
    })
      .then((resp) => {
        if (cb) {
          cb(resp.data.body)
        }
        // dispatch({
        //   type: actionTypes.loadingOff
        // });
      })
      .catch((err) => {
        // if (err.status == '401') {
        //   window.location.href = apiConstants.TRACKER_URL
        // }
        if (err.response && err.response.data) {
          toaster("error", err.response.data.errors && err.response.data.errors.length > 0 &&
            err.response.data.errors[0]);
        } else {
          toaster("error", err.data && err.data.message);
        }
        // dispatch({
        //   type: actionTypes.loadingOff
        // });
      });
  }
  const openBillDesk = (txAmount, emandate, onlyMandate) => {
    // this.setState({
    //     payNowBtnHide:true
    // })
    // openBillDesk = (txAmount) => {
    let billDeskReqData = {
        currencyType: "INR",
        // onlyMandate? !emandate: emandate,
        onlyMandate: onlyMandate ? onlyMandate : false,
        customerEmailId:"ok@gmail.com",
        customerMobileNo:"9897043791",
        proposalId: "3816986",
        proposalNumber:localStorage.getItem("proposalNo"),
        // paymentMethod: onlyMandate?"ENACH": "ONLINE_BILL_DESK",
        paymentMethod: "ONLINE_BILL_DESK",
        txAmount: '12344',
        userAgent: navigator.userAgent,
    };
    Axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/newbilldesk/fetchPaymentReqInfo`, billDeskReqData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer'+' '+localStorage.getItem("accessToken")
      },
    })
    .then((resp) => {
      let flow_config = {
                merchantId: resp.data.body.options.merchantId,
                bdOrderId: resp.data.body.options.bdOrderId,
                authToken: resp.data.body.options.orderToken,
                childWindow: true,
                retryCount: resp.data.body.options.retryCount,
                prefs: {}
            };
       let mandate_flow_config = {
                      merchantId: resp.data.body.options.merchantId,
                      mandateTokenId: resp.data.body.options.mandateTokenId,
                      authToken: resp.data.body.options.orderToken,
                      childWindow: true,
                      retryCount: resp.data.body.options.retryCount,
                  }
                  // console.log("test>>>>", flow_config)
                  let config = {
                            responseHandler: (txn) => {
                              // console.log("test222",txn)
                              ()=>{}
                            },
                            merchantLogo: "/logo_2x.png",
                            flowConfig: resp.data.body.options.onlyMandate ? mandate_flow_config : flow_config,
                            flowType: resp.data.body.options.onlyMandate ? "emandate" : "payments",
                        };
                        // console.log('window',window.loadBillDeskSdk)
                        window.loadBillDeskSdk(config);

      // dispatch({
      //   type: actionTypes.loadingOff
      // });
    })
      .catch((err) => {
        // if (err.status == '401') {
        //   window.location.href = apiConstants.TRACKER_URL
        // }
        if (err.response && err.response.data) {
          toaster("error", err.response.data.errors && err.response.data.errors.length > 0 &&
            err.response.data.errors[0]);
        } else {
          toaster("error", err.data && err.data.message);
        }
        // dispatch({
        //   type: actionTypes.loadingOff
        // });
      });
    // getBillDeskRequest(billDeskReqData, (data) => {
    //     let flow_config = {
    //         merchantId: data.options.merchantId,
    //         bdOrderId: data.options.bdOrderId,
    //         authToken: data.options.orderToken,
    //         childWindow: true,
    //         retryCount: data.options.retryCount,
    //         prefs: {}
    //         // prefs: { payment_categories: ["card", "nb", "upi", "wallets", "gpay"] },
    //     };
    //     /*if(emandate == true || onlyMandate == true){
    //         flow_config.prefs = { payment_categories: ["card"]}
    //     }*/

    //     let mandate_flow_config = {
    //         merchantId: data.options.merchantId,
    //         mandateTokenId: data.options.mandateTokenId,
    //         authToken: data.options.orderToken,
    //         childWindow: true,
    //         retryCount: data.options.retryCount,
    //     }
    //     let config = {
    //         // responseHandler: (txn) => {
    //         //     this.props.getProposalDetails(this.props.proposalDetails.proposalId, (data) => {
    //         //         this.setState({
    //         //             payNowBtnHide:false
    //         //         })
    //         //         //let payment = data.paymentDetails.methodsOfPayments.find(item => item?.orderId == txn.txnResponse?.orderid);
    //         //         let payment = data?.paymentDetails?.methodsOfPayments && data?.paymentDetails?.methodsOfPayments.length > 0
    //         //             && data?.paymentDetails?.methodsOfPayments[data.paymentDetails.methodsOfPayments.length - 1]
    //         //         if (payment && payment.orderId && payment.txPaymentStatus === "COMPLETED") {
    //         //             lmSMTObj.track("orderCompleted", {
    //         //                 paymentMethod: "Online Payment",
    //         //                 orderId: payment.orderId + "",
    //         //                 "products": [
    //         //                     {
    //         //                         "product_name": this.props.proposalDetails.basicDetails.coverageDetails.coverageName,
    //         //                         "product_shortName": getProductShortName(this.props.proposalDetails.basicDetails.coverageDetails.coverageName)
    //         //                     }
    //         //                 ]
    //         //             });
    //         //         }
    //         //     });
    //         //     if (this.state.showPaymentModal) {
    //         //         this.setState({
    //         //             showPaymentModal: !this.state.showPaymentModal,
    //         //         });
    //         //     }
    //         // },
    //         merchantLogo: logo,
    //         flowConfig: data.options.onlyMandate ? mandate_flow_config : flow_config,
    //         // flowConfig:  flow_config,
    //         flowType: data.options.onlyMandate ? "emandate" : "payments",
    //         // flowType: "payments",
    //     };
    //     window.loadBillDeskSdk(config);
    // });
};
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
        if (resp.data.body.DateValidate || resp.data.body.PanValidate) {
          setValidationInput('')
          setDob('')
          setPan('')
          setShowOnlinePopup(false)
          openBillDesk();
        }
        else if(resp.data.body.DateValidate === false){
          toaster("error", "Please enter valid DOB")
          setValidationInput('')
          setDob('')
          setPan('')
        }
        else if(resp.data.body.PanValidate === false){
          toaster("error", "Please enter valid PAN")
          setValidationInput('')
          setDob('')
          setPan('')
        }
      })
      .catch((err) => {
        dobPanHandler('error', err?.message);

      });
  }
  const validateData = () => {
    let query;
    let proposalNo = localStorage.getItem("proposalNo")
    if (dob && dob.length === 10) {
      query = `proposalNumber=${proposalNo}&dateOfBirth=${validationInput}&panNumber`;
      validatePaymentLink(query);
    } else if(pan && pan.length === 10) {
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

        </PopUpPage>}
      {showOnlinePopup &&
        <PopUpPage
          heading={'Please Validate Using PAN Or DOB'}
          onClose={closeHandler}
          addCss={'pan-dob'}
        >
          <div className='pan-dob-wrapper'>
            <p className='heading'>PAN/DOB(DD-MM-YYYY)</p>
            <Input
              type="text"
              placeholder="DD-MM-YYYY"
              cssClass="panDobInput"
              label="PAN/DOB(DD-MM-YYYY)"
              value={validationInput}
              changeHandler={(e) => {
                dobPanHandler(e)
              }
              }

            />
          </div>

          <div className='btn'>
            <div onClick={validateData} className={`validate-btn ${enabled ? "enable" : ''}`}>Validate</div>
          </div>
        </PopUpPage>

      }
    </div>
  )
}

export default Payment;