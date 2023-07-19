import React from 'react';

const SubAccordion = ({ items }) => {
    return (
        <ul className='acc-active-sub-container'>
            {
                items.map((item,idx) => (
                    <li key={idx}>
                        <p>{item.title}</p>
                        <p>{item.subTitle}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default SubAccordion
