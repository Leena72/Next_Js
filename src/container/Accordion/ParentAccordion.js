import React, { useState } from 'react';
import SuperSubAccordion from './SuperSubAccordion'
import Image from 'next/image'
import right from "../../Assets/images/right.png";
import AddNonMedReq from '../Add_Non_Med_Req'
import { scrollToTop } from '../../utils/utils'

const ParentAccordion = ({ items }) => {
  const [accordion, setaccordion] = useState(-1)
  const toggleHandler = (idx, id) => {
    scrollToTop(id)
    setaccordion(idx)
  }

  const renderElement = (heading) => {
   switch (heading) {
    case 'Add Non-Medical':
     return  <AddNonMedReq/>
      break;
    default:
      break;
   }
  }

  return (
    <ul>
      {
        items.map((item, idx) => {
          const isActive = accordion === idx ? 'active' : ''
          return (
            <li className={`acc-container ${isActive ? 'acc-after-container' : 'acc-after-container1'}`}
              key={idx} >
              <div className={`acc-block ${isActive ? 'acc-active' : 'acc-inActive'}`}
                id={item.id}
                onClick={() => toggleHandler(idx, item.id)}>
                <div className='acc-item'>
                  <div className={`acc-img ${!isActive ? 'acc-active' : 'acc-inActive'}`}>
                    <Image
                      src={isActive ? item.active_icon : item.img}
                      alt='icon'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className='acc-content'>
                    <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveText'}`}>{item.heading}</p>
                    <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{item.subHeading}</p>
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
                    !isActive ?
                      <div className='acc-default'></div>
                      :
                      <div className='acc-activeRed'></div>
                  }
                </div>

              </div>
              {isActive && <div className={`acc-show-content`}>
                {/* {
                  !item.contentStatus ?
                    <div className='acc-dummy-content'>{item.dummyContent}</div>
                    :
                    <SuperSubAccordion items={item.content} />
                } */}
                {
                    renderElement(item.heading)
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

export default ParentAccordion
