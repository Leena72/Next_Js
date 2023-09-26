import React from 'react'
import { convertToIST } from '../../utils/utils'

const ProposalForm = ({ proposalReversedList }) => {
    const renderHeding = (heading) => {
        switch (heading) {
            case 'Personal_Details':
                return 'Basic detail Section (Proposer)'
            case 'Insured_Details':
                return 'Insured detail Section (Conditional only for Insured-Proposer cases)'
            case 'Nominee_Details':
                return 'Nominee detail Section'
            case 'Health_Details':
                return 'Health Questionnaires section'
            default:
                break;
        }
    }

    const renderDate = (date) => {
        const istDate = convertToIST(date);
        return istDate
    }

    const renderCreateOn = (item) => {
        let dateStatus;
        dateStatus = item.actual_status === 'COMPLETED' ? true : false
        if (dateStatus) {
            let date = item?.updatedOn
            let newdate = renderDate(date)
            return 'Completed:' + ' ' + newdate
        }
        else {
            return <div className='subHeading'>Yet to start</div>
        }
    }

    let listItem = proposalReversedList.filter(ele => {
        return ele !== undefined
    })

    return (
        <ul className='acc-active-sub-container'>
            {
                listItem?.map((item, idx) => (

                    <li key={idx}>
                        <div className='heading'>{renderHeding(item.subStatus)}</div>
                        <div className='subHeading'>{renderCreateOn(item)}</div>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProposalForm
