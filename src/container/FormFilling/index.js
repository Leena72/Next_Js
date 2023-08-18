import React, { useState } from 'react'
import Accordion1 from '../../component/Accordion/Accordion1';
import ProposalForm from './ProposalForm';
import DocumentUpload from '../Doc_Upload';
import Payment from '../../container/Payment';
import FormFieldConsent from '../../component/FormFieldConsent'

const FormFilling = ({ data }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const videoPIVCHandler = () => { }
    const consentHandler = () => { }
    const renderElement = (data, title) => {

        switch (title) {
            case 'Proposal Form':
                return <ProposalForm data={data.subContent} />
            case 'Insta Verify':
                return <FormFieldConsent
                    text='To initiate the Video PIVC'
                    buttonText='Click Here'
                    clickHandler={videoPIVCHandler}
                />
            case 'Customer Consent':
                return <FormFieldConsent
                    text='To initiate the Customer Consent '
                    buttonText='Click Here'
                    clickHandler={consentHandler}
                />
            case 'Payment':
                return <Payment showOffline={true} isText={'Online Payment'} />
            case 'Document Upload':
                return <DocumentUpload />
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
