'use client';
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Accordion1 from '../../component/Accordion/Accordion1';
import ProposalForm from './ProposalForm';
import DocumentUpload from '../Doc_Upload';
import Payment from '../../container/Payment';
import FormFieldConsent from '../../component/FormFieldConsent';
import { videoPIVCAction } from '../../redux/action/videoPIVCAction'
import { consentHandlerAction } from '../../redux/action/consentHandlerAction'
import { dateFormat, convertToIST } from '../../utils/utils';

const FormFilling = ({ data, label }) => {
  const [openAccordion, setOpenAccordion] = useState(null)
  const accDetails = useSelector((state) => state.customerDetailReducer);
  const accordionDetails = accDetails?.newgenStatusResponseDTOList
  const formFillDocDownload = accDetails?.requiredDocuments

  // console.log('accordionDetails?.additionalInfoDocs', accordionDetails)

  const dispatch = useDispatch()

  const videoPIVCHandler = () => {
    const payload = {
      "message": null,
      "proposalNumber": localStorage.getItem("proposalNo"),
    }
    dispatch(videoPIVCAction(payload))
  }
  const consentHandler = () => {
    const payload = {
      "message": null,
      "proposalNumber": localStorage.getItem("proposalNo"),
    }
    dispatch(consentHandlerAction(payload))
  }

  const renderElement = (data, title) => {
    let showElement;
    switch (title) {
      case 'Proposal Form':
        let proposalFormList = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'PROPOSAL';
        });
        // console.log('proposalFormList--', proposalFormList)
        const proposalList = proposalFormList;
        const proposalReversedList = proposalList?.reverse();
        showElement = proposalFormList?.length !== 0
          ?
          <ProposalForm
            data={data.subContent}
            proposalFormList={proposalFormList}
            proposalReversedList={proposalReversedList}
          />
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Insta Verify':
        showElement = accDetails?.instaRequired === true
          ?
          <FormFieldConsent
            text='To initiate the Video PIVC'
            buttonText='Click Here'
            clickHandler={videoPIVCHandler}
          />
          :
          <div className='blue-block-container'>
            <p>Insta Verify not applicable</p>
          </div>
        return showElement
      case 'Customer Consent':
        showElement = accDetails?.customerConsentRequired === true
          ?
          <FormFieldConsent
            text='To initiate the Customer Consent '
            buttonText='Click Here'
            clickHandler={consentHandler}
          />
          :
          <div className='blue-block-container'>
            <p>Customer consent not applicable</p>
          </div>
        return showElement
      case 'Payment':
        let paymentDetail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'PAYMENT';
        })
        // console.log('paymentDetail>>', paymentDetail)
        showElement = paymentDetail && paymentDetail[0]?.actual_status === 'COMPLETED'
          ?
          <FormFieldConsent
            text='To Download the Payment Receipt'
            buttonText='Click Here'
            clickHandler={consentHandler}
          />
          :
          <Payment
            showOffline={true}
            isText={'Online Payment'}
            paymentValue={accDetails?.premium}
            accDetails={accDetails}
          />

        return showElement
      case 'Document Upload':
        if (label === 'form-filling') {
          showElement = !!formFillDocDownload?.list
            ?
            <DocumentUpload
              label='form-filling'
              formFillDocDownload={formFillDocDownload}
              addDocUpload={accDetails?.additionalInfoDocs}
            />
            :
            <div className='blue-block-container'>
              <p>Documents are not available!</p>
            </div>
          return showElement
        }
        else {

        }
      case 'Proposal Submission':
        let proposalSub = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'PROPOSAL_SUBMISSION';
        });
        // console.log('proposalSub', proposalSub)
        showElement = proposalSub && proposalSub[0]?.actual_status === 'COMPLETED'
          ?
          <div className='blue-block-container'>
            <p>Policy Number: {accDetails?.policyNumber}</p>
          </div>
          :
          <div className='blue-block-container'>
            {/* <p>{proposalSub[0].subStatus}</p> */}
            <p>Yet to Start</p>
          </div>
        return showElement
      default:
        break;
    }
  }

  const renderDate = (date) => {
    const istDate = convertToIST(date);
    return istDate
  }

  const renderCreateOn = (title) => {
    // console.log('>>', title)
    let dateStatus;
    let propDetail;
    let detail = accordionDetails && accordionDetails?.filter(item => {
      return item.status === title;
    });
    if (title === 'PROPOSAL') {
      propDetail = detail?.filter(item => {
        return item.subStatus === 'Health_Details';
      });
      dateStatus = propDetail && propDetail[0]?.actual_status === 'COMPLETED' ? true : false
      if (dateStatus) {
        let date =propDetail && propDetail[0]?.updatedOn
        let newdate = renderDate(date)
        return 'Completed:' + ' ' + newdate
      }
      else {
        return <div>Yet to start</div>
      }
    }

    else {
      dateStatus = detail && detail[0]?.actual_status === 'COMPLETED' ? true : false
      if (dateStatus) {
        let date = detail && detail[0]?.updatedOn
        let newdate = renderDate(date)
        return 'Completed:' + ' ' + newdate
      }
      else {
        return <div>Yet to start</div>
      }
    }
  }

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <ul className='acc-active-container'>
      {
        data.map((item, idx) => {
          console.log('item>>>>>>', item)
          if ((!accDetails?.instaRequired && item.heading === "Insta Verify")
            ||
            (!accDetails?.customerConsentRequired && item.heading === "Customer Consent")
          ) {
            return
          }
          return (
            <li className={`acc-active-list`}
              key={idx} >
              <Accordion1
                openAccordion={openAccordion}
                item={item}
                renderCreateOn={renderCreateOn}
                toggleAccordion={toggleAccordion}
              />
              {openAccordion === item?.id ?
                <div className='show'>
                  {
                    renderElement(item, item.heading)
                  }
                </div>
                : ''
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default FormFilling
