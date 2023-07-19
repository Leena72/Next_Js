import React, { useState } from 'react';
import Image from 'next/image'
import right from "../Assets/images/right.png";
import dwnArrow from "../Assets/images/dwn-arw.png";

const Accordion = ({ data, index, toggleAcc }) => {
  const [isActive, setIsActive] = useState(false);
  const [isEleActive, setIsEleActive] = useState(false);

  return (
    <li className={`acc-container ${isActive ? 'acc-after-container' : 'acc-after-container1'}`} id={data.id}>
      <div className={`acc-block ${isActive ? 'acc-active' : 'acc-inActive'}`} onClick={() => setIsActive(!isActive)}>
        <div className='acc-item'>
          <div className={`acc-img ${!isActive ? 'acc-active' : 'acc-inActive'}`}>
            <Image
              src={isActive ? data.active_icon : data.img}
              alt='icon'
              width={100}
              height={100}
            />
          </div>
          <div className='acc-content'>
            <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveText'}`}>{data.heading}</p>
            <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{data.subHeading}</p>
          </div>
        </div>
        <div className='acc-activeState'>
          {data.completed ?
            <div className='acc-completed'>
              <Image
                // src={data.icon}
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
        {
          !data.contentStatus ?
            <div className='acc-dummy-content'>{data.dummyContent}</div>
            :
            <ul className='acc-active-container'>
              {data.content.map((ele) => (
                <li className='acc-active-list' key={ele.id}>
                  <div className='acc-active-block' onClick={() => setIsEleActive(!isEleActive)} >
                    <div className='acc-active-item'>
                      <div className={`acc-active-img`}>
                        <Image
                          src={ele.img}
                          alt='icon'
                          width={100}
                          height={100}
                        />
                      </div>
                      <div className='acc-active-content'>
                        <p>{ele.heading}</p>
                        <p>{ele.subHeading}</p>
                      </div>
                    </div>
                    <div className='acc-active-icon'>
                      <Image
                        src={dwnArrow}
                        alt='icon'
                      />
                    </div>
                  </div>
                  {isEleActive && <div className={`acc-show-sub-content`}>
                    {!ele.contentStatus ?
                      <div className='acc-dummy-content'>{ele.dummyContent}</div>
                      :
                      <ul className='acc-active-sub-container'>
                        {ele.subContent.map((item) => (
                          <li key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.subTitle}</p>
                          </li>
                        ))}
                      </ul>
                    }
                  </div>
                  }
                </li>
              ))
              }
            </ul>
        }
      </div>
      }
    </li>
  )
};

export default Accordion;