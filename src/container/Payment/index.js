import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import PopUpPage from '@/component/PopUpPage';
// import Input from "../../component/Input";
import PopUpPage from '../../component/PopUpPage';
import Input from '../../component/Input';
import { toaster } from '@/utils/toaster';
import Axios from "axios";
import { downloadAction } from "../../redux/action/downloadAction";


const Payment = (props) => {
  const [showOfflinePopup, setShowOfflinePopup] = useState(false)
  const [showOnlinePopup, setShowOnlinePopup] = useState(false)
  const [validationInput, setValidationInput] = useState('')
  const [dob, setDob] = useState();
  const [pan, setPan] = useState();
  const [enabled, setenabled] = useState(false)
  const dispatch = useDispatch()

  // console.log('accDetails>>', props.accDetails)

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
        "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
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
      customerEmailId: props.accDetails?.emailId,
      customerMobileNo: props.accDetails?.mobileNo,
      proposalId: props.accDetails?.proposalId,
      proposalNumber: props.accDetails?.proposalNumber,
      // paymentMethod: onlyMandate?"ENACH": "ONLINE_BILL_DESK",
      paymentMethod: "ONLINE_BILL_DESK",
      // txAmount: '11287.05',
      txAmount: props.paymentValue,
      userAgent: navigator.userAgent,
    };
    dispatch({
      type: "LOADER_ON",
    });
    Axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/newbilldesk/fetchPaymentReqInfo`, billDeskReqData, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
      },
    })
      .then((resp) => {
        dispatch({
          type: "LOADER_OFF",
        });
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
            // console.log("test222",txn),
            () => {
              // console.log('>>chk')
              dispatch(dashboardAction(props.accDetails?.proposalNumber, (res) => { }))
            }
          },
          merchantLogo: "/logo_2x.png",
          flowConfig: resp.data.body.options.onlyMandate ? mandate_flow_config : flow_config,
          flowType: resp.data.body.options.onlyMandate ? "emandate" : "payments",
        };
        // console.log('window',window.loadBillDeskSdk)
        if (resp.data.status === 'OK') {
        if (typeof document !== "undefined" && typeof window !== "undefined") {
          window.loadBillDeskSdk(config);
                }        }
        else {
          toaster("error", 'BillDesk Order Creation Exception')
        }

        // dispatch({
        //   type: actionTypes.loadingOff
        // });
      })
      .catch((err) => {
        // console.log('err>>', err)
        dispatch({
          type: "LOADER_OFF",
        });
        toaster("error", 'BillDesk Order Creation Exception')

        // if (err.status == '401') {
        //   window.location.href = apiConstants.TRACKER_URL
        // }
        // if (err.response && err.response.data) {
        //   toaster("error", err.response.data.errors && err.response.data.errors.length > 0 &&
        //     err.response.data.errors[0]);
        // } else {
        //   toaster("error", err.data && err.data.message);
        // }
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
  const validatePaymentLink = (query, cb) => {
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
          // toaster("success", "Successfully validated")
          setValidationInput('')
          setDob('')
          setPan('')
          setShowOnlinePopup(false)
          openBillDesk();
          cb(resp.data.body)
        }
        else if (resp.data.body.DateValidate === false) {
          toaster("error", "Please enter valid DOB")
          setValidationInput('')
          setDob('')
          setPan('')
        }
        else if (resp.data.body.PanValidate === false) {
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
      validatePaymentLink(query, (res) => {
        if (res.DateValidate === true) {
          toaster('success', 'DOB validated successfully')
        }
      });
    } else if (pan && pan.length === 10) {
      query = `proposalNumber=${proposalNo}&panNumber=${validationInput}&dateOfBirth`;
      validatePaymentLink(query, (res) => {
        toaster('success', 'PAN validated successfully')
      });
    }
  }

  const enachInitiated = (payload, cb) => {

    Axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/eNACH/paymentBegin`, payload, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer' + ' ' + localStorage.getItem("accessToken")
        // "Authorization" :"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjkyMTIiLCJhdXRob3JpdGllcyI6W3siYXV0aG9yaXR5IjoiQUdFTlQifV0sImlhdCI6MTY5NDc1NDgxMCwiZXhwIjoxNjk0ODQxMjEwfQ.u6VwxAj4GZuIIuSldDPXjTtE3NigvLZqlVQt8MDJokWTZaN4UjIjPC8A0PGeWiYvxfz7SXE2PMwET6-iJcTKTQ"

      },
    })
      .then((resp) => {
        toaster("success", "E-nach initiated successfully");
        if (cb) {
          cb(resp.data.body)
        }
      })
      .catch((err) => {

        toaster("error", err.response?.data?.errors);
        if (err.status == '401') {
          window.location.href = apiConstants.TRACKER_URL
        }
        if (cb) {
          // cb(false)
        }

      });
  }
  const enachHandler = () => {
    const data = {
      paymentMode: "E_MANDATE",
      proposalNumber: localStorage.getItem("proposalNo")
    }
    enachInitiated(data, (res) => {
      if (typeof document !== "undefined" && typeof window !== "undefined") {
      let newWindow = window?.open();
      newWindow.location = res.DATA;
      }    })
  }
  const downloadHandler = (fileName) => {
    let proposalNo = props.accDetails.proposalNumber
    // let file = "3108426724FNA.pdf"
    // let file =documentList[fileName]
    dispatch(downloadAction(proposalNo, fileName))
  }
  const paymentCompleted = props.paymentDetail && props.paymentDetail[0]?.paymentInfo?.paymentAmountCompleted
  // console.log('paymentCompleted',paymentCompleted,props.paymentDetail[0]?.paymentInfo?.paymentAmountCompleted,props.showOffline )
  // console.log('>>>>>>>>>>>>.here')
  const revisedOfferPayment = props.accDetails?.newgenStatusResponseDTOList.filter(item => {
    return item.status === 'REVISED_OFFER';
  })
  const revisedOfferPaymentDone = revisedOfferPayment[0]?.paymentInfo?.counterOfferPaymentCompleted
  // console.log('revisedOfferPaymentDone', revisedOfferPaymentDone)

  return (
    <div>
      <ul className="lst_prpsl">
        <li>
          {/* form-fill */}
          {(!props.isRevised && !paymentCompleted) &&
            <div className="lnkbx">
              <span> Click here to initiate the</span>
              <span onClick={onlineBtnandler} className="lnktxtbx">
                Online Payment
              </span>
            </div>
          }
          {(!props.isRevised && paymentCompleted &&
            props.paymentDetail[0]?.paymentInfo?.paymentRenewal === false) &&
            <div className="lnkbx">
              <span> Click here to initiate the</span>
              <span onClick={enachHandler} className="lnktxtbx">E-Nach</span>
            </div>
          }
          {!props.isRevised && paymentCompleted && !props.accDetails?.paymentReceipts?.length &&
            <div className="lnkbx">
              <span>Payment completed. <br></br>Receipts are not generated yet.</span>
            </div>
          }
          {!props.isRevised &&
            props.accDetails?.paymentReceipts.length > 0 &&
            <div className="lnkbx receipt-download">
              <span>Download Receipts:</span>
              {
                props.accDetails?.paymentReceipts.map((item, idx) => {
                  return <div key={idx} onClick={() => downloadHandler(item)}>{item}</div>
                })
              }
            </div>
          }

          {/* revised payment-- main acc */}
          {props.isRevised && !revisedOfferPaymentDone &&
            <div className="lnkbx">
              <span> Click here to initiate the</span>
              <span onClick={onlineBtnandler} className="lnktxtbx">Pay Online</span>
              <span className='text'>OR</span>
              <span className=" ml-5 lnktxtbx"><span onClick={offlineBtnHandler}>Pay Offline</span></span>
            </div>
          }
          {
            props.isRevised &&
            props.accDetails?.counterOfferPaymentReceipts?.length > 0 &&
            <div className="lnkbx receipt-download">
              <span>Download Receipts:</span>
              {
                props.accDetails?.counterOfferPaymentReceipts.map((item, idx) => {
                  return <div key={idx} onClick={() => downloadHandler(item)}>{item}</div>
                })
              }
            </div>
          }   
          {props.isRevised && revisedOfferPaymentDone && !props.accDetails?.counterOfferPaymentReceipts?.length &&
            <div className="lnkbx">
              <span>Payment completed. <br></br>Receipts are not generated yet.</span>
            </div>
          }  
          <div className="lnkbx"> 
          <span>Your policy will be processed further subject to payment done, either offline/online
            </span>
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