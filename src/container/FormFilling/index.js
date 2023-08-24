import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Accordion1 from '../../component/Accordion/Accordion1';
import ProposalForm from './ProposalForm';
import DocumentUpload from '../Doc_Upload';
import Payment from '../../container/Payment';
import FormFieldConsent from '../../component/FormFieldConsent';
import { videoPIVCAction } from '../../redux/action/videoPIVCAction'
import { consentHandlerAction } from '../../redux/action/consentHandlerAction'

const FormFilling = ({ data, accDetails, accordionDetails, formFillDocDownload }) => {
  const [openAccordion, setOpenAccordion] = useState(null)

  const dispatch = useDispatch()

  const videoPIVCHandler = () => {
    const payload = {
      "message": null,
      "proposalNumber": localStorage.getItem("proposalNo"),
    }
    const linkTo = "insta"
    dispatch(videoPIVCAction(payload, linkTo))
  }
  const consentHandler = () => {
    const payload = {
      "message": null,
      "proposalNumber": localStorage.getItem("proposalNo"),
    }
    dispatch(consentHandlerAction(payload))
  }

  const renderElement = (data, title) => {
    switch (title) {
      case 'Proposal Form':
        let proposalFormList = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'PROPOSAL';
        });
        return (proposalFormList.length !== 0 ?
          <ProposalForm data={data.subContent} proposalFormList={proposalFormList} />
          :
          <div className='blue-block-container'>
            <p>Proposal forms not available!</p>
          </div>)
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
        return <DocumentUpload label='form-filling' formFillDocDownload={formFillDocDownload} />
      case 'Basic Document Upload':
        return <div>Basic Document Upload</div>
      case 'Proposal Submission':
        let proposalSub = accordionDetails && accordionDetails?.filter(item => {
          return item.status === 'PROPOSAL_SUBMISSION';
        });
        return (proposalSub[0]?.subStatus === "PENDING" ?
          <div className='blue-block-container'>
            <p>{proposalSub[0].subStatus}</p>
          </div>
          :
          <div className='blue-block-container'>
            <p>Policy Number: {accDetails?.policyNumber}</p>
          </div>
        )
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
              {openAccordion === item?.id ?
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
