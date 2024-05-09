import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import ProposedAcc from './ProposedAcc'
import Button from '../../component/Button'
import { docSubmitAction } from '../../redux/action/questionnaireAction'
import { dashboardAction } from '@/redux/action/dashboardAction'

const DocumentUpload = ({ label, formFillDocDownload, addDocUpload, listItem,documentDetails }) => {
    const dispatch = useDispatch()
    const accDetails = useSelector((state) => state.customerDetailReducer);
    const accordionDetails = accDetails?.newgenStatusResponseDTOList
    const addNonMedDocDetail = accordionDetails && accordionDetails.filter(item => {
        return item.status === 'ADDITIONAL_NON_MEDICAL_REQUIREMENTS';
    });
    const addNonMedDocLock = addNonMedDocDetail[0]?.additionalInfo?.docLock
    const policyFor = accDetails.policyFor
    const [openAcc, setOpenAcc] = useState(null)
    const [openInAcc, setOpenInAcc] = useState(null)
    let lockForm
    let addNonupload
    let addInsuredNonupload
    let docInsuredQuesList
    let docQuesList
    let uwId
    if (label === "form-filling") {
        // console.log('formFillDocDownload', formFillDocDownload)
    }
    else if (label === 'add-form') {
        //insured
        
        addInsuredNonupload = addDocUpload && addDocUpload?.additionalInfoDocs?.primaryInsuredDocumentDetail?.ServiceDocumentList
        docInsuredQuesList = addInsuredNonupload && addInsuredNonupload?.filter(item => item.questionnaire === false)
        // proposer
        addNonupload = addDocUpload?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList
        
        docQuesList = addNonupload?.filter(item => item.questionnaire === false)
        uwId = addDocUpload?.additionalInfoDocs?.uwId

        // form lock unable disable submit form
        lockForm = addInsuredNonupload && addInsuredNonupload?.every((x) => {
            return x.url !== '';
        })
    }

    const toggleAccordion = (id) => {
        setOpenAcc(openAcc === id ? null : id)
    }
    const toggleInsAccordion = (id) => {
        setOpenInAcc(openInAcc === id ? null : id)
    }
    const renderElement = (title, documentList) => {  
        return <ProposedAcc
            label={label}
            title={title}
            formFillDocDownload={formFillDocDownload} //accDetails?.requiredDocuments
            addNonupload={addNonupload} // proposer
            // addNonupload1={documentList} // document list
            addNonupload1={title==='INSURER'? addInsuredNonupload:  addNonupload} // document list
            addInsuredNonupload={addInsuredNonupload} //insurer
            uwId={uwId}
            hideSection={!addNonMedDocLock}
            documentDetails={documentDetails}
        />
    }
    const finaldocFormSubmit = () => {
        let payload = {
            proposalNumber: addDocUpload?.proposalNumber,
            policyNumber: addDocUpload?.policyNumber,
            uwId: addDocUpload?.additionalInfoDocs?.uwId,
            otp: "",
            docLock: lockForm, //when all doc upload
            questionLock: false
        }
        dispatch(docSubmitAction(payload, () => {
            dispatch(dashboardAction(addDocUpload?.proposalNumber, (res) => {
            }))
        }))
    }
    const renderTitle = (title) => {
        let item
        if (title === 'INSURER') {
            item = accDetails?.insuredName !== null ?accDetails?.insuredName  : 'INSURER'
            return item
        }
        if (title === 'PROPOSER') {
            item = accDetails?.proposerName !== null ?accDetails?.proposerName :  'PROPOSER'
            return item
        }
    }
    return (
        <>
            {label === 'form-filling' ?
                <ul className='nonMedListBlock'>
                    {
                        formFillDocDownload?.list?.map((item, idx) => (
                            <li className='nonMedList' key={idx}>
                                <div className='non-block-heading ' onClick={() => toggleAccordion(idx)}>
                                    <div>{item.personName}</div>
                                    <div className='acc-active-icon '>
                                        <Image
                                            className={openAcc === idx ? 'upArrow' : ''}
                                            src={dwnArrow}
                                            alt='icon'
                                        />
                                    </div>
                                </div>
                                {openAcc === idx ?
                                    <div className='show'>
                                        {
                                            renderElement(item.name, item.documentList)
                                        }
                                    </div>
                                    :
                                    ''
                                }
                            </li>
                        ))
                    }
                </ul>
                :
                <>
                    <ul className='nonMedListBlock'>
                        {policyFor === 'SELF' ?
                            listItem?.map((item, idx) => {
                                if (item.title === 'INSURER') {
                                    return (
                                        <li className='nonMedList' key={idx}>
                                            <div className='non-block-heading ' onClick={() => toggleInsAccordion(idx)}>
                                                <div>{accDetails?.insuredName}
                                                </div>
                                                <div className='acc-active-icon '>
                                                    <Image
                                                        className={openInAcc === idx ? 'upArrow' : ''}
                                                        src={dwnArrow}
                                                        alt='icon'
                                                    />
                                                </div>
                                            </div>
                                            {openInAcc === idx ?
                                                <div className='show'>
                                                    {
                                                        renderElement('INSURER', docInsuredQuesList)
                                                    }
                                                </div>
                                                :
                                                ''
                                            }
                                        </li>)
                                }
                                
                            })
                            :
                            listItem?.map((item, idx) =>{
                                if(item.title==='INSURER' && (addInsuredNonupload?.length >0 || addInsuredNonupload !==null  )){
                               return (
                                    <li className='nonMedList' key={idx}>
                                        <div className='non-block-heading ' onClick={() => toggleInsAccordion(idx)}>
                                            <div className='block-heading'>
                                                {
                                                    renderTitle(item.title)
                                                }
                                            </div>
                                            <div className='acc-active-icon '>
                                                <Image
                                                    className={openInAcc === idx ? 'upArrow' : ''}
                                                    src={dwnArrow}
                                                    alt='icon'
                                                />
                                            </div>
                                        </div>
                                        {openInAcc === idx ?
                                            <div className='show'>
                                                {
                                                    renderElement(item.title)
                                                }
                                            </div>
                                            :
                                            ''
                                        }
                                    </li>)
                                }
                                else if(item.title==='PROPOSER' && (addNonupload?.length>0 || addNonupload !==null ) ){
                                    return (
                                         <li className='nonMedList' key={idx}>
                                             <div className='non-block-heading ' onClick={() => toggleInsAccordion(idx)}>
                                                 <div className='block-heading'>
                                                     {
                                                         renderTitle(item.title)
                                                     }
                                                 </div>
                                                 <div className='acc-active-icon '>
                                                     <Image
                                                         className={openInAcc === idx ? 'upArrow' : ''}
                                                         src={dwnArrow}
                                                         alt='icon'
                                                     />
                                                 </div>
                                             </div>
                                             {openInAcc === idx ?
                                                 <div className='show'>
                                                     {
                                                         renderElement(item.title)
                                                     }
                                                 </div>
                                                 :
                                                 ''
                                             }
                                         </li>)
                                     }
                            })
                            
                        }

                        {/* --- */}
                        {
                            !docQuesList && !docInsuredQuesList
                            &&
                            <div className='blue-block-container'>
                                <p>Documents are not available!</p>
                            </div>}
                    </ul>
                    {
                        !addNonMedDocLock &&
                        <div className='consent-blk submit-consent-btn'>
                            <div className='form-btn'>
                                <Button
                                    className={'activeBtn'}
                                    clickHandler={finaldocFormSubmit}
                                    type='button'
                                    buttonText={'Submit'}
                                    disabled={!lockForm}
                                />
                            </div>
                        </div>
                    }
                </>
            }
        </>

    )
}

export default DocumentUpload
