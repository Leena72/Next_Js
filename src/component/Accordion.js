import React, { useState } from 'react';
import Image from 'next/image'
import right from "../Assets/images/right.png";

const Accordion = ({ data, index, toggleAcc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className={`acc-container ${isActive ? 'acc-after-container' : 'acc-after-container1'}`}>
      <div className={`acc-block ${isActive ? 'acc-active' : 'acc-inActive'}`} onClick={() => setIsActive(!isActive)}>
        <div className='acc-item'>
          <div className={`acc-img ${!isActive ? 'acc-active' : 'acc-inActive'}`}>
            {
              isActive ?
                <Image
                  src={data.active_icon}
                  alt='icon'
                  width={100}
                  height={100}
                />
                :
                <Image
                  src={data.img}
                  alt='icon'
                  width={100}
                  height={100}
                />
            }
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
      {isActive && <div className={`acc-show-content`}>{'content'}</div>}
    </li>
  )
};

export default Accordion;