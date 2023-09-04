import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import right from "../../Assets/images/right.png";
import AddNonMedReq from '../Add_Non_Med_Req';
import FormFilling from '../FormFilling';
import Consent from '../Consent';
import CounterPage from '../counterPage';
import Payment from '../../container/Payment';
import { scrollToTop, dateFormat } from '../../utils/utils';
import QuoteGenerated from "../../component/QuoteGenerated/index"

const MainAccordion = ({ data, downloadData, accDetails }) => {
  const [openAccordion, setOpenAccordion] = useState(null)
  const accordionDetails = accDetails?.newgenStatusResponseDTOList
  const policyDocuments = accDetails?.policyDocuments
  const formFillDocDownload = accDetails?.requiredDocuments

  // console.log('formFillDocDownload',formFillDocDownload)
  // console.log('accDetails', accDetails)
  // console.log('policyDocuments',policyDocuments)
  // console.log('accordionDetails', accordionDetails)
  // console.log('statusDetail', statusDetail)

  const renderElement = (data, heading) => {
    switch (heading) {
      case 'Quote Generated':
        let quoteDetail = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'QUOTE';
        });
        return (quoteDetail.length !== 0 ?
          <QuoteGenerated
            quoteDetail={quoteDetail && quoteDetail[0]}
            policyDocumentFile={policyDocuments['BI_TAG_NAME']}
          />
          :
          <div className='blue-block-container'>
            <p>Quote not available!</p>
          </div>
        )

      case 'Form Filling':
        return <FormFilling
          accDetails={accDetails} //whole data
          accordionDetails={accordionDetails} //status data
          data={data.content} // accordion data
          formFillDocDownload={formFillDocDownload} //download doc data
        />

      case 'Medical Requirement':
        let medReq = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'MEDICAL_RISK_VERIFICATION';
        });
        return (
          <div className='blue-block-container'>
            <p>{medReq && medReq[0].subStatus}</p>
          </div>
        )
      case 'Additional Non-Medical Requirements':
        let addNonMedDetail;
        addNonMedDetail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENT';
        });
        return <AddNonMedReq addNonMedDetail={addNonMedDetail} />
      case 'Revised Offer':
        return <CounterPage />
      case 'Consent for change in the application details':
        return <Consent />
      case 'Payment Required':
        return <Payment />
      case 'Quality Check':
        let qualityChkDetail;
        qualityChkDetail = accordionDetails && accordionDetails.filter(item => {
          return item.status === 'Quality_Check';
        });
        return <div>Quality Check</div>
      case 'Medical Risk Verification':
        return <div>Medical Risk Verification</div>
      case 'Financial and Medical Risk Verification':
        return <div>Financial and Medical Risk Verification</div>
      case 'Policy Decision':
        return <div>Policy Decision</div>
      default:
        break;
    }
  }

  const dateRender = (status,) => {
    let detail = accordionDetails && accordionDetails?.filter(item => {
      return item.status === status;
    });
    let date = detail && detail[0]?.updatedOn
    if (date?.length > 0) {
      let newdate = dateFormat(date)
      return newdate
    }
    else {
      return <div>Yet to start</div>
    }
  }

  const renderCreateOn = (heading) => {
    let date
    switch (heading) {
      case 'Quote Generated':
        date = dateRender('QUOTE')
        return date
      case 'Form Filling':
        date = dateRender('PROPOSAL_SUBMISSION')
        return date
      case 'Medical Requirement':
        date = dateRender('MEDICAL_REQUIREMENT')
        return date
      case 'Additional Non-Medical Requirements':
        date = dateRender('ADDITIONAL_NON_MEDICAL_REQUIREMENT')
        return date
      case 'Revised Offer':
        date = dateRender('REVISED_OFFER')
        return date
        case 'Consent for change in the application details':
          return ''
        case 'Payment Required':
        date = dateRender('PAYMENT_REQUIREMENT')
        return date
        case 'Quality Check':
          date = dateRender('QUALITY_CHECK')
          return date
        case 'Medical Risk Verification':
        date = dateRender('MEDICAL_RISK_VERIFICATION')
        return date
        case 'Financial and Medical Risk Verification':
          date = dateRender('FINANCIAL_AND_MEDICAL_RISK_VERIFICATION')
        return date
        case 'Policy Decision':
          date = dateRender('POLICY_STATUS')
          return date
        default:
          break;
    }
  }

  const toggleAccordion = (id) => {
    scrollToTop(id)
    setOpenAccordion(openAccordion === id ? null : id)
  }
  return (
    <ul>
      {
        data.map((item, idx) => {
          return (
            <li className={`acc-container ${openAccordion === item.id ? 'acc-after-container' : 'acc-after-container1'}`}
              key={idx} >
              <div className={`acc-block ${openAccordion === item.id ? 'acc-active' : 'acc-inActive'}`}
                id={item.id}
                onClick={() => toggleAccordion(item.id)}>
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
                    <p className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{renderCreateOn(item.heading)}</p>
                  </div>
                </div>
                <div className='acc-activeState'>
                  {item.actual_status === 'COMPLETED' ?
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
                    renderElement(item, item.heading)
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
