import React from 'react'

const ProposalForm = ({data}) => {
    return (
        <ul className='acc-active-sub-container'>
            {
                data.map((item, idx) => (
                    <li key={idx}>
                        <p>{item.title}</p>
                        <p>{item.subTitle}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProposalForm
