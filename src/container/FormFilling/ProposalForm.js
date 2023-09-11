import React from 'react'
import { dateFormat, convertToIST } from '../../utils/utils'

const ProposalForm = ({ data, proposalFormList, proposalReversedList }) => {
    const renderHeding = (heading) => {
        switch (heading) {
            case 'Personal_Details':
                return 'Basic detail Section (Proposer)'
            case 'Insured_Proposer_Details':
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
            return <div>Yet to start</div>
        }
    }


    return (
        <ul className='acc-active-sub-container'>
            {
                proposalReversedList?.map((item, idx) => (
                    <li key={idx}>
                        <p>{renderHeding(item.subStatus)}</p>
                        <p>{renderCreateOn( item)}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default ProposalForm
