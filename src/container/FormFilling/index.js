import React, { useState } from 'react'
import Accordion1 from '../../component/Accordion/Accordion1';
import ProposalForm from './ProposalForm';
import DocumentUpload from '../Doc_Upload';
import Payment from '../../container/Payment';
import FormFieldConsent from '../../component/FormFieldConsent';
import axios from 'axios';
import { toaster } from '@/utils/toaster';

const FormFilling = ({ data,formFillingData,proposalDetail,accDetails }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const videoPIVCHandler = () => { 
        const payload = {
            "message": null,
            "proposalNumber": localStorage.getItem("proposalNo"),
          }
          const linkTo = "insta"
          axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/send/${linkTo}Link`, payload, {
            // axios.post(`${apiConstants.PROPOSEL_API_URL}api/v1/newbilldesk/sendOnlinePaymentLink`, payload, {
            headers: {
              "Content-Type": "application/json",
              agentCode: localStorage.getItem('agentCode'),
              "Authorization":'Bearer'+ " "+ localStorage.getItem('accessToken')
            },
          })
          .then((resp) => {
            if (
              resp &&
              resp.status === 200
            ) {
              toaster("success", resp.data.message);
            } else {
              toaster("error", resp.data.message);
            }
          })
    }
    const consentHandler = () => {
        const payload = {
            "message": null,
            "proposalNumber": localStorage.getItem("proposalNo"),
          }  
          axios.post(`https://dev-api-proposal.bhartiaxa.com/public/api/v1/proposal/send/customerConsentLink`, payload, {
            headers: {
              "Content-Type": "application/json",
              "Authorization":'Bearer'+ " "+ localStorage.getItem('accessToken')
            },
          })
          .then((resp) => {
            if (
              resp &&
              resp.status === 200
            ) {
              toaster("success", resp.data.message);
            } else {
              toaster("error", resp.data.message);
            }
          })
     }
    const renderElement = (data, title) => { 
        switch (title) {
            case 'PROPOSAL_FORM':
                return <ProposalForm data={data.subContent} proposalDetail={proposalDetail} />
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
                return <DocumentUpload label='form-filling' />
            case 'Basic Document Upload':
                return <div>Basic Document Upload</div>
            case 'PROPOSAL_SUBMISSION':
                return (data.subStatus==="PENDING" ?<div>Yet to create</div> :<div>
                  <p>Policy Number: {accDetails?.policyNumber}</p>
                </div>)
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
                formFillingData && formFillingData.map((item, idx) => {
                    return (
                        <li className={`acc-active-list`}
                            key={idx} >
                            <Accordion1
                                openAccordion={openAccordion}
                                item={item}
                                toggleAccordion={toggleAccordion}
                            />
                            {openAccordion === item?.id ?
                                <div className='show'>
                                    {
                                        renderElement(item, item.status)
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
