import React, { useState } from 'react'
import Accordion1 from '../../component/Accordion/Accordion1';
import ProposalForm from './ProposalForm';

const FormFilling = ({ data }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const renderElement = (data, title) => {

        switch (title) {
            case 'Proposal Form':
                return <ProposalForm data={data.subContent} />
            case 'Insta Verify':
                return <div>Insta Verify</div>
            case 'Insta Verify':
                return <div>Insta Verify</div>
            case 'Customer Consent':
                return <div>Customer Consent</div>
            case 'Payment':
                return <div>Payment</div>
            case 'Basic Document Upload':
                return <div>Basic Document Upload</div>
            case 'Proposal Submission':
                return <div>Proposal Submission</div>
            default:
                break;
        }
    }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }
    return (
        <ul className='acc-active-container'>
            {
                data.map((item, idx) => {
                    return (
                        <li className={`acc-active-list`}
                            key={idx} >
                            <Accordion1
                                openAccordion={openAccordion}
                                item={item}
                                toggleAccordion={toggleAccordion}
                            />
                            {openAccordion === item.id ?
                                <div className='show'>
                                    {
                                        renderElement(item, item.heading)
                                    }
                                </div>
                                : ''
                            }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default FormFilling
