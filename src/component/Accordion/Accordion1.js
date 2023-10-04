import React from 'react'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";

const Accordion1 = ({ openAccordion, item, toggleAccordion,renderCreateOn }) => {
    const renderCreateOnDate=(heading)=>{
       return renderCreateOn(heading)
    }
    return (
        <div className={`acc-active-block ${openAccordion === item.id ? 'active' : ''}`}
            id={item.id}
            onClick={() => toggleAccordion(item.id)}>
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
                    {/* <p>{item.status.split('_').join(' ')}</p> */}
                    <p>{item.heading}</p>
                    <div>{renderCreateOnDate(item.title)}</div>
                </div>
            </div>
            <div className='acc-active-icon'>
                <Image
                    className={openAccordion === item.id ? 'upArrow' : ''}
                    src={dwnArrow}
                    alt='icon'
                />
            </div>
        </div>
    )
}

export default Accordion1
