import React from 'react'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";

const Accordion2 = ({ openAccordion, item, toggleAccordion , isInsurerDocPresent}) => {
    return (
        <div className='acc-non-block' onClick={() => toggleAccordion(item.id)}>
            <div>{item.title}</div>
            {/* {isInsurerDocPresent &&  */}
            <div className='acc-active-icon '>
                <Image
                    className={openAccordion === item.id ? 'upArrow' : ''}
                    src={dwnArrow}
                    alt='icon'
                />
            </div>
            {/* } */}
        </div>
    )
}

export default Accordion2
