import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { consentForChangeData } from '.././../data'
import Accordion2 from '../../component/Accordion/Accordion2'
import Button from '../../component/Button'
import Input from '../../component/Input'
import ConsentLayout from './ConsentLayout'
import FormFieldConsent from '../../component/FormFieldConsent'
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";

const Consent = ({ accDetails, accordionDetails, proposalNo }) => {
    const [openAccordion, setOpenAccordion] = useState(null)

    const consentDetail = accordionDetails.filter((item) => item.status === 'QUALITY_CHECK')
    const addConsentInfo = consentDetail && consentDetail[0]?.additionalInfo
    const policyDocuments = accDetails?.policyDocuments
    const renderElement = (data, title) => {
        let label
        if (title === 'Proposer Details') {
            label = 'ProposerDetails'
        }
        else if (title === 'Insured Details') {
            label = 'InsuredDetails'
        }
        else if (title === 'Plan Details') {
            label = 'PlanDetails'
        }
        else if (title === 'Health Questionnaire Details') {
            label = 'QuestionnaireDetails'
        }

        return <ConsentLayout
            data={data.detail}
            title={title}
            label={label}
            consentData={label !== 'QuestionnaireDetails' ? Object.entries(addConsentInfo[label]) : addConsentInfo[label]}
        />
    }
    const clickHandler = () => { }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }
    const changeHandler = () => { }
    const downloadHandler = () => { }
    const acceptHandler = () => { }
    const rejectHandler = () => { }
    return (<>
        <ul className='addNonMedAcc'>
            {
                consentForChangeData.map(item => {
                    return (
                        <li className='addNonMedAccList' key={item.id} >
                            <Accordion2
                                item={item}
                                openAccordion={openAccordion}
                                toggleAccordion={toggleAccordion}
                            />
                            {openAccordion === item.id ?
                                <div className='show'>
                                    {
                                        renderElement(item, item.title)
                                    }
                                </div>
                                : ''
                            }
                        </li>
                    )
                })
            }
        </ul>
        <div className='consent-blk consent-tag-blk'>
            <div clssName='consent-tag'>Please check the below documents for your reference</div>
            <div className='consent-down-container'>
                
                    <div className='consent-download'>
                        <span>Revised Benefit Illustration</span>
                        
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        
                    </div>
                    <div className='consent-download'>
                        <span>Revised Proposal Form</span>
                        
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        
                    </div>
                    <div className='consent-download'>
                        <span>Covid Questionnaire</span>
                        
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        
                    </div>
                    <div className='consent-download'>
                        <span>Form 60</span>
                        
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                                width={15}
                                height={15}
                            />
                        
                    </div>
                
            </div>
            <label>
                <Input
                    type='radio'
                    value={''}
                    name=''
                    changeHandler={changeHandler}
                />
                <span>I agree to the above changes</span>
            </label>
            <div className='consent-btn'>
                <Button
                    className={'activeBtn'}
                    clickHandler={acceptHandler}
                    type='button'
                    buttonText={'Accept'}
                />
                <Button
                    className={'activeBtn'}
                    clickHandler={rejectHandler}
                    type='button'
                    buttonText={'Reject'}
                />
            </div>
        </div>
    </>
    )
}

export default Consent
