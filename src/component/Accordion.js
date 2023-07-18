import React, { useState } from 'react';

const Accordion = ({ data, index, toggleAcc }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <li className="acc-container">
      <div className={`acc-block ${isActive ? 'acc-active' : 'acc-inActive'}`} onClick={() => setIsActive(!isActive)}>
        <div className='acc-item'>
          <div className={`acc-img ${isActive ? 'acc-inActive' : 'acc-active'}`}></div>
          <div className='acc-content'>
            <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveText'}`}>{data.heading}</p>
            <p className={`${isActive ? 'acc-activeText' : 'acc-inActiveGreyText'}`}>{data.subHeading}</p>
          </div>
        </div>
        <div className='acc-activeState'>
          {/* <div className='acc-completed'></div> */}
          <div className='acc-default'></div>
          {/* <div className='acc-activeRed'></div> */}
        </div>
      </div>
      {isActive && <div className={`acc-show-content`}>{'content'}</div>}
    </li>
  )
};

export default Accordion;