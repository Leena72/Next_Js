import React, { useState } from 'react';
import SubAccordion from './SubAccordion'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import { scrollToTop } from '../../utils/utils'


const SuperSubAccordion = ({ items }) => {
  const [accordion, setaccordion] = useState(0)
  const toggleHandler = (idx, id) => {
    scrollToTop(id)
    setaccordion(idx)
  }
  return (
    <ul className='acc-active-container'>
      {
        items.map((item, idx) => {
          const isActive = accordion === idx ? 'active' : ''
          return (
            <li className={`acc-active-list`}
              key={idx} >
              <div className={`acc-active-block ${isActive}`}
                id={item.id}
                onClick={() => toggleHandler(idx,item.id)}>
                <div className='acc-active-item'>
                  <div className={`acc-active-img`}>
                    <Image
                      src={item.img}
                      alt='icon'
                      width={100}
                      height={100}
                    />
                  </div>
                  <div className='acc-active-content'>
                    <p>{item.heading}</p>
                    <p>{item.subHeading}</p>
                  </div>
                </div>
                <div className='acc-active-icon'>
                  <Image
                    className={isActive ? 'upArrow' : ''}
                    src={dwnArrow}
                    alt='icon'
                  />
                </div>
              </div>
              {isActive && <div className={`acc-show-sub-content`}>
                {
                  !item.contentStatus ?
                    <div className='acc-dummy-content'>{item.dummyContent}</div>
                    :
                    <SubAccordion items={item.subContent} />
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

export default SuperSubAccordion
