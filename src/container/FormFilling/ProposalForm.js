import React from 'react'
import {dateFormat} from '../../utils/utils'
const ProposalForm = ({data,proposalDetail}) => {
    return (
        <ul className='acc-active-sub-container'>
            {
                proposalDetail.map((item, idx) => (
                    <li key={idx}>
                        <p>{item.subStatus.split('_').join(' ')}</p>
                        <p>{dateFormat(item.createdOn)}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProposalForm
