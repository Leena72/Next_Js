import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import right from "../../Assets/images/right.png";
import AddNonMedReq from '../Add_Non_Med_Req';
import FormFilling from '../FormFilling';
import Consent from '../Consent';
import Accordion3 from '../../component/Accordion/Accordion3';
import CounterPage from '../counterPage';
import Payment from '../../container/Payment';
import { scrollToTop } from '../../utils/utils';
import QuoteGenerated from "../../component/QuoteGenerated/index"

const MainAccordion = ({ data, downloadData, accDetails }) => {
  const [openAccordion, setOpenAccordion] = useState(null)
  let accordionDetails = accDetails?.newgenStatusResponseDTOList
  const renderElement = (data, heading) => {
    switch (heading) {
      case 'Quote Generated':
        let quoteDetail;
        quoteDetail = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'QUOTE';
        });
        return <QuoteGenerated
          quoteDetail={quoteDetail && quoteDetail[0]}
        />
      case 'Form Filling':
        let formFillingData = []
        let proposalSubmission = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'PROPOSAL_SUBMISSION';
        });
        let payment = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'PAYMENT';
        });
        let proposalData = {
          actual_status: '',
          createdOn: '',
          id: '',
          status: 'PROPOSAL_FORM',
          subStatus: '',
          updatedOn: ''
        }
        let proposalDetail = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'PROPOSAL';
        });
        formFillingData.push(proposalData, proposalSubmission && proposalSubmission[0], payment && payment[0])

        return <FormFilling
          accDetails={accDetails}
          data={data.content}
          formFillingData={formFillingData}
          proposalDetail={proposalDetail}
        />

      case 'Medical Requirement':
        return <div>Medical Requirement</div>
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
      case 'Quality Check': "Quality_Check"
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
                    <p className={`${openAccordion === item.id ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{item.subHeading}</p>
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
              {openAccordion === item.id && <div className={`acc-show-content`}>
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
