import React, { useState } from 'react';
import Image from 'next/image'
import right from "../../Assets/images/right.png";
import AddNonMedReq from '../Add_Non_Med_Req';
import FormFilling from '../FormFilling';
import Consent from '../Consent';
import Accordion3 from '../../component/Accordion/Accordion3';
import CounterPage from '../counterPage';
import Payment from '../../container/Payment';
import {scrollToTop} from '../../utils/utils';
import QuoteGenerated from "../../component/QuoteGenerated/index"

const MainAccordion = ({ data, downloadData }) => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const renderElement = (data, heading) => {
    switch (heading) {
      case 'Quote Generated':
        return <QuoteGenerated/>
      case 'Form Filling':
        return <FormFilling data={data.content} />
      case 'Medical Requirement':
        return <div>Medical Requirement</div>
      case 'Additional Non-Medical Requirements':
        return <AddNonMedReq />
      case 'Revised Offer':
        return <CounterPage/>
      case 'Consent for change in the application details':
        return <Consent/>
      case 'Payment Required':
        return <Payment/>
      case 'Quality Check':
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
                  {item.completed ?
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
