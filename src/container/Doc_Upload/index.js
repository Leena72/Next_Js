import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import ProposedAcc from './ProposedAcc'
import { consentData } from '../../data'

const DocumentUpload = ({ label, formFillDocDownload, addDocUpload }) => {
    const accDetails = useSelector((state) => state.customerDetailReducer);
    const dispatch = useDispatch()
    const [openAcc, setOpenAcc] = useState(null)
    const [openInAcc, setOpenInAcc] = useState(null)
    let addNonupload
    let addInsuredNonupload
    let docInsuredQuesList
    let docQuesList
    if (label === "form-filling") {
        // console.log('formFillDocDownload', formFillDocDownload)
    }
    else if (label === 'add-form') {
        //insured
        addInsuredNonupload = addDocUpload?.additionalInfoDocs?.primaryInsuredDocumentDetail?.ServiceDocumentList
        docInsuredQuesList = addInsuredNonupload?.filter(item => item.questionnaire === false)
        // proposer
        addNonupload = addDocUpload?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList
        docQuesList = addNonupload?.filter(item => item.questionnaire === false)
    }


    const toggleAccordion = (id) => {
        setOpenAcc(openAcc === id ? null : id)
    }
    const toggleInsAccordion = (id) => {
        setOpenInAcc(openInAcc === id ? null : id)
    }
    const renderElement = (title, documentList) => {
        switch (title) {
            case 'OWNER':
                return <ProposedAcc
                    label={label}
                    title={title}
                    formFillDocDownload={formFillDocDownload}
                    addNonupload={documentList}
                />
            case 'INSURER':
                return <ProposedAcc
                    label={label}
                    title={title}
                    formFillDocDownload={formFillDocDownload}
                    addNonupload={documentList}
                />
            case 'Insured':
                return <ProposedAcc
                    label={label}
                    title={title}
                    formFillDocDownload={formFillDocDownload}
                    documentList={documentList}
                />
            default:
                break;
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
                <ul className='nonMedListBlock'>
                    {
                        docQuesList?.map((item, idx) => (
                            <li className='nonMedList' key={idx} >
                                <div className='non-block-heading ' onClick={() => toggleAccordion(idx)}>
                                    <div>{
                                        item.partyType === "OWNER"
                                        ?
                                        !accDetails?.proposerName ? item.partyType : accDetails?.proposerName
                                        :
                                        item.partyType
                                        }</div>
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
                                            renderElement(item.partyType, docQuesList)
                                        }
                                    </div>
                                    :
                                    ''
                                }
                            </li>
                        ))
                    }
                    {
                        docInsuredQuesList?.map((item, idx) => (
                            <li className='nonMedList' key={idx}>
                                <div className='non-block-heading ' onClick={() => toggleInsAccordion(idx)}>
                                    <div>{item.partyType === "INSURER"
                                        ?
                                        !accDetails?.insuredName ? item.partyType : accDetails?.insuredName
                                        :
                                        item.partyType
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
                                            renderElement(item.partyType, docInsuredQuesList)
                                        }
                                    </div>
                                    :
                                    ''
                                }
                            </li>
                        ))
                    }
                    {
                        !docQuesList && !docInsuredQuesList
                        &&
                        <div className='blue-block-container'>
                            <p>Documents are not available!</p>
                        </div>}
                </ul>
            }
        </>

    )
}

export default DocumentUpload
