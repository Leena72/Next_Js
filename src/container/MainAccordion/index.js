'use client';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import right from "../../Assets/images/right.png";
import AddNonMedReq from '../Add_Non_Med_Req';
import FormFilling from '../FormFilling';
import FormFieldConsent from '../../component/FormFieldConsent';
import Consent from '../Consent';
import CounterPage from '../counterPage';
import Payment from '../../container/Payment';
import { scrollToTop, convertToIST } from '../../utils/utils';
import QuoteGenerated from "../../component/QuoteGenerated/index"

const MainAccordion = ({ data }) => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const accDetails = useSelector((state) => state.customerDetailReducer);
  const accordionDetails = accDetails?.newgenStatusResponseDTOList
  const policyDocuments = accDetails?.policyDocuments

  const renderList = (accordionDetails, item) => {
    // which list acc to be shown
    let renderItem = true // by default render 
    accordionDetails?.map((acc) => {
      if (renderItem && acc.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENT' && item.heading === 'Additional Non-Medical Requirements') {
        if (acc?.subStatus !== 'AR') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'REVISED_OFFER' && item.heading === 'Revised Offer') {
        if (acc?.subStatus !== 'CO') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'PAYMENT_REQUIREMENT' && item.heading === 'Payment Required') {
        if (acc?.subStatus !== 'CO' || acc?.subStatus !== 'SP') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'DATA_CHANGE' && item.heading === 'Consent for change in the application details') {
        if (acc?.subStatus !== 'AD') {
          renderItem = false
        }
      }
    })
    return renderItem
  }

  const renderElement = (data, heading, title) => {
    // on click list acc 
    let showElement;
    let detail;
    switch (heading) {
      case 'Quote Generated':
        detail = accordionDetails?.filter(item => {
          return item.status === 'QUOTE';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <QuoteGenerated
            quoteDetail={detail && detail[0]}
            policyDocumentFile={policyDocuments['BI_TAG_NAME']}
            proposalNo={accDetails?.proposalNumber}
          />
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Form Filling':
        return <FormFilling
          data={data.content}
          label='form-filling'
          proposalNo={accDetails?.proposalNumber}
        />
      case 'Medical Requirement':
        detail = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'MEDICAL_REQUIREMENT';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('MEDICAL_REQUIREMENT')}
          </div>
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Additional Non-Medical Requirements':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENT';
        });

        return <AddNonMedReq
          accDetails={accDetails} //whole data
          proposalNo={accDetails?.proposalNumber}
        // addNonMedDetail={addNonMedDetail}
        />
      case 'Revised Offer':
        return <CounterPage />
      case 'Consent for change in the application details':
        return <Consent />
      case 'Payment Required':
        detail = accordionDetails?.filter(item => {
          return item.status === 'PAYMENT_REQUIREMENT';
        })
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <FormFieldConsent
            text='To initiate the Download the Payment Receipt'
            buttonText='Click Here'
            clickHandler={paymentReqHandler}
          />
          :
          <Payment
            paymentValue={accDetails?.premium} // change required
            accDetails={accDetails}
          />
        return showElement
      case 'Quality Check':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'QUALITY_CHECK';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('QUALITY_CHECK')}
          </div>
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Medical Risk Verification':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'MEDICAL_RISK_VERIFICATION';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('MEDICAL_RISK_VERIFICATION')}
          </div>
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Financial and Medical Risk Verification':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'FINANCIAL_AND_MEDICAL_RISK_VERIFICATION';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('FINANCIAL_AND_MEDICAL_RISK_VERIFICATION')}
          </div>
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      case 'Policy Decision':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'POLICY_STATUS';
        });
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('POLICY_STATUS')}
          </div>
          :
          <div className='blue-block-container'>
            <p>Yet to Start</p>
          </div>
        return showElement
      default:
        break;
    }
  }

  const renderStatus = (title) => {
    // show complete image on acc
    let accStatus;
    let detail;
    if (title === 'FORM_FILLING') {
      detail = accordionDetails && accordionDetails?.filter(item => {
        return item.status === 'PROPOSAL_SUBMISSION';
      });
    }
    else {
      detail = accordionDetails?.filter(item => {
        return item.status === title;
      });
    }
    accStatus = detail && detail[0]?.actual_status === "COMPLETED" ? true : false
    return accStatus
  }

  const renderDate = (date) => {
    const istDate = convertToIST(date);
    return istDate
  }

  const renderCreateOn = (title) => {
    let dateStatus;
    let detail = accordionDetails && accordionDetails?.filter(item => {
      return item.status === title;
    });
    if (title === 'FORM_FILLING') {
      let proposalSub = accordionDetails && accordionDetails?.filter(item => {
        return item.status === 'PROPOSAL_SUBMISSION';
      });
      dateStatus = proposalSub && proposalSub[0]?.actual_status === 'COMPLETED' ? true : false
      if (dateStatus) {
        let date = proposalSub[0]?.updatedOn
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
  const paymentReqHandler = () => { }

  const toggleAccordion = (id) => {
    scrollToTop(id)
    setOpenAccordion(openAccordion === id ? null : id)
  }

  return (
    <ul>
      {
        data.map((item, idx) => {
          if (!renderList(accordionDetails, item)) {
            return
          }
          return (
            <li className={`acc-container ${openAccordion === item.id ? 'acc-after-container' : 'acc-after-container1'}`}
              key={idx} >
              <div className={`acc-block ${openAccordion === item.id ? 'acc-active' : 'acc-inActive'}`}
                id={item.id} onClick={() => toggleAccordion(item.id)}>
                <div className='acc-item'>
                  <div className={`acc-img ${openAccordion === item.id ? 'acc-inActive' : 'acc-active'}`}>
                    <Image
                      src={openAccordion === item.id ? item.active_icon : item.img}
                      alt='icon'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className='acc-content'>
                    <p className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveText'}`}>{item.heading}</p>
                    <div className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{renderCreateOn(item.title)}</div>
                  </div>
                </div>
                <div className='acc-activeState'>
                  {
                    renderStatus(item.title)
                      ?
                      <div className='acc-completed'>
                        <Image
                          src={right}
                          alt='icon'
                          width={100}
                          height={100}
                        />
                      </div>
                      :
                      openAccordion === item.id ?
                        <div className='acc-activeRed'></div>
                        :
                        <div className='acc-default'></div>
                  }
                </div>
              </div>
              {openAccordion === item.id &&
                <div className={`acc-show-content`}>
                  {
                    renderElement(item, item.heading, item.title)
                  }
                </div>
              }
            </li>
          )
        })
      }
    </ul>
  )
}

export default MainAccordion
