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
import { subStatusList } from '../../data'

const MainAccordion = ({ data, toggleOnPolicyDownload }) => {
  const [openAccordion, setOpenAccordion] = useState(null)
  const accDetails = useSelector((state) => state.customerDetailReducer);
  const accordionDetails = accDetails?.newgenStatusResponseDTOList
  const policyDocuments = accDetails?.policyDocuments
  const sectionId = accDetails?.currentSectionTab

  // accordion open based on value of currentSectionTab 
  useEffect(() => {
    let matchTitle
    if (sectionId === 'JOURNEY_SELECTION') {
      matchTitle = data?.filter(item => item.title === 'QUOTE')
    }
    else if (sectionId === 'QUALITY_CHECK') {
      matchTitle = data?.filter(item => item.title === 'CONSENT_FOR_DATA_CHANGE')
    }
    else if (sectionId === 'CUSTOMER_DETAILS' || sectionId === 'INSURED_DETAILS'
      || sectionId === 'NOMINEE_DETAILS' || sectionId === 'QUESTION_DETAILS'
      || sectionId === 'PAYMENT_DETAILS' || sectionId === 'DOCUMENT_DETAILS') {
      matchTitle = data?.filter(item => item.title === 'FORM_FILLING')
    }
    else {
      matchTitle = data?.filter(item => item.title === sectionId)
    }
    toggleAccordion(matchTitle?.[0]?.id)
  }, [])

  // dynamic accordion shown 
  const renderList = (accordionDetails, item) => {
    // which list acc to be shown
    console.log(accordionDetails,item)
    let renderItem = true // by default render 
    accordionDetails?.map((acc) => {
      if (renderItem && acc.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENTS' &&
        item.heading === 'Additional Non-Medical Requirements') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '' || (acc?.subStatus !== 'AR' && acc?.subStatus !== 'AI') ) {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'REVISED_OFFER' &&
        item.heading === 'Revised Offer') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '' || acc?.subStatus !== 'CO') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'PAYMENT_REQUIREMENT' &&
        item.heading === 'Payment Required') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'QUALITY_CHECK' &&
        item.heading === 'Consent For Change In The Application Details') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '' || acc?.subStatus !== 'DC') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'MEDICAL_RISK_VERIFICATION' &&
        item.heading === 'Medical Risk Verification') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '') {
          renderItem = false
        }
      }
      else if (renderItem && acc.status === 'MEDICAL_REQUIREMENT' &&
        item.heading === 'Medical Requirement') {
        if (acc?.subStatus === null || acc?.subStatus === undefined
          || acc?.subStatus === '') {
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
    let subStatusText;
    switch (heading) {
      // case 'Quote Generated':
      //   detail = accordionDetails?.filter(item => {
      //     return item.status === 'QUOTE';
      //   });
      //   showElement = detail && detail[0]?.actual_status === 'COMPLETED'
      //     ?
      //     <QuoteGenerated
      //       quoteDetail={detail && detail[0]}
      //       policyDocumentFile={policyDocuments['BI_TAG_NAME']}
      //       proposalNo={accDetails?.proposalNumber}
      //     />
      //     :
      //     <div className='blue-block-container'>
      //       <p>Yet to Start</p>
      //     </div>
      //   return showElement
      
        case 'Form Filling':
        return <FormFilling
          data={data.content}
          label='form-filling'
          proposalNo={accDetails?.proposalNumber}
          sectionId={sectionId}
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
          return item.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENTS';
        });

        return <AddNonMedReq
          accDetails={accDetails} //whole data
          proposalNo={accDetails?.proposalNumber}
        // addNonMedDetail={addNonMedDetail}
        />
      case 'Revised Offer':
        return <CounterPage />
      case 'Consent For Change In The Application Details':
        return <Consent
          accDetails={accDetails}
          accordionDetails={accordionDetails}
          proposalNo={accDetails?.proposalNumber}
        />
      case 'Payment Required':
        let revisedOfferPayment = accordionDetails?.filter(item => {
          return item.status === 'REVISED_OFFER';
        })
        // let revisedPayment = revisedOfferPayment[0]?.additionalInfo?.counterOfferDetails?.shortfallPremium
        let revisedPayment = revisedOfferPayment[0]?.additionalInfo?.shortfallPremium


        // console.log('revisedPayment',revisedPayment)
        // console.log('revisedOfferPayment',revisedOfferPayment[0]?.additionalInfo?.counterOfferDetails?.shortfallPremium)

        detail = accordionDetails?.filter(item => {
          return item.status === 'PAYMENT_REQUIREMENT';
        })

        // showElement = detail && detail[0]?.actual_status === 'COMPLETED'
        //   ?
        //   <FormFieldConsent
        //     text='To initiate the Download the Payment Receipt'
        //     buttonText='Click Here'
        //     clickHandler={paymentReqHandler}
        //   />
        //   :
        return <Payment
          paymentValue={revisedPayment} // revised offer --shortfall premium
          accDetails={accDetails}
          isRevised={true}
        />

      case 'Quality Check':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'QUALITY_CHECK';
        });
        subStatusText = subStatusList.filter(item => item.status === detail[0]?.subStatus)
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('QUALITY_CHECK')}
          </div>
          :
          <div className='blue-block-container'>
            <div>{subStatusText.length > 0 ? subStatusText[0]?.customerPortal : <div>Yet to Start</div>}</div>
          </div>
        return showElement
      case 'Medical Risk Verification':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'MEDICAL_RISK_VERIFICATION';
        });
        subStatusText = subStatusList.filter(item => item.status === detail[0]?.subStatus)
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('MEDICAL_RISK_VERIFICATION')}
          </div>
          :
          <div className='blue-block-container'>
            <div>{subStatusText.length > 0 ? subStatusText[0]?.customerPortal : <div>Yet to Start</div>}</div>
          </div>
        return showElement
      case 'Financial and Medical Risk Verification':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'FINANCIAL_AND_MEDICAL_RISK_VERIFICATION';
        });
        subStatusText = subStatusList.filter(item => item.status === detail[0]?.subStatus)
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          ?
          <div>
            {renderCreateOn('FINANCIAL_AND_MEDICAL_RISK_VERIFICATION')}
          </div>
          :
          <div className='blue-block-container'>
            <div>{subStatusText.length > 0 ? subStatusText[0]?.customerPortal : <div>Yet to Start</div>}</div>
          </div>
        return showElement
      case 'Policy Decision':
        detail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'POLICY_STATUS';
        });
        subStatusText = subStatusList.filter(item => item.status === detail[0]?.subStatus)
        console.log('subStatusText', subStatusText, detail[0]?.additionalInfo?.postponedDeclinedReason)
        showElement = detail && detail[0]?.actual_status === 'COMPLETED'
          && <>
            {

              (subStatusText[0]?.status === 'PI' || subStatusText[0]?.status === 'PM' ||
                subStatusText[0]?.status === 'PW' || subStatusText[0]?.status === 'PT') ?
                <div className='blue-block-container'>
                  <p>{subStatusText.length > 0 && subStatusText[0]?.customerPortal}</p>
                </div>
                :
                // for 'PD','PP','PR','PC'
                // <div className='blue-block-container'>
                //   <p>{subStatusText.length > 0 && subStatusText[0]?.customerPortal}</p>
                // </div>
                (subStatusText[0]?.status === 'PD' || subStatusText[0]?.status === 'PP') ?
                  <div className='blue-block-container' >
                    <p>{subStatusText.length > 0 && subStatusText[0]?.customerPortal}</p>
                    <p>Reason: {detail[0]?.additionalInfo?.postponedDeclinedReason}</p>
                  </div>
                  :
                  (subStatusText[0]?.status === 'PR') ?
                    <div className='blue-block-container'>
                      <p>{subStatusText.length > 0 && subStatusText[0]?.customerPortal}</p>
                      <p>Reason: {'Due to non-compliance of Requirements called'}</p>
                    </div>
                    :
                    (subStatusText[0]?.status === 'PC') ?
                      <div className='blue-block-container'>
                        <p>{subStatusText.length > 0 && subStatusText[0]?.customerPortal}</p>
                        <p>Reason: {'As per cancellation request received from Customer'}</p>
                      </div>
                      :

                      <div className='blue-block-container'>
                        <p>{'Yet to start'}</p>
                      </div>
            }
          </>
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
    if (id === 'POLICY_DOWNLOAD_DOC') {
      toggleOnPolicyDownload(id)
    }
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
                    <p className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveText'}`}>
                      {item.heading === 'Revised Offer'? 'Counter Offer' : item.heading}
                    </p>
                    <div className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>
                      {renderCreateOn(item.title)}
                    </div>
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
