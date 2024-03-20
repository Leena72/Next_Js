import React, { useState } from 'react'
import { questionnaireData } from '../../data'
import Health from './Health'
import Accordion2 from '../../component/Accordion/Accordion2';
import DocumentUpload from '../Doc_Upload';

const AddNonMedReq = ({ addNonMedDetail, accDetails }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    // health
    const isProposerDocPresent = accDetails && accDetails?.additionalQuestionnaireListDTO?.proposerAdditionalQuestionnaireDocs.length !== 0
    const isInsurerDocPresent = accDetails && accDetails?.additionalQuestionnaireListDTO?.insuredAdditionalQuestionnaireDocs.length !== 0
    
    // const isProposerDocPresentHide = accDetails && accDetails?.additionalQuestionnaireListDTO?.proposerAdditionalQuestionnaireDocs.length > 0
    // const isInsurerDocPresentHide = accDetails && accDetails?.additionalQuestionnaireListDTO?.insuredAdditionalQuestionnaireDocs.length > 0
   
    //document
    // const addInsuredNonupload = accDetails && accDetails?.additionalInfoDocs?.primaryInsuredDocumentDetail?.ServiceDocumentList?.length>0 && accDetails?.additionalInfoDocs?.primaryInsuredDocumentDetail?.ServiceDocumentList.every((x) => {
    //     return x.questionnaire === false;
    // })
    // const addProposerNonupload = accDetails && accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList?.length>0 && accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList.every((x) => {
    //     return x.questionnaire === false;
    // })
    const addInsuredNonupload = accDetails && accDetails?.additionalInfoDocs?.primaryInsuredDocumentDetail?.ServiceDocumentList?.length>0 
    const addProposerNonupload = accDetails && accDetails?.additionalInfoDocs?.proposerDocumentDetail?.ServiceDocumentList?.length>0 

    console.log('addInsuredNonupload',addInsuredNonupload)
    // console.log('isInsurerDocPresent',  isProposerDocPresentHide,isInsurerDocPresentHide)

    console.log('accDetails', accDetails)

    const renderElement = (data, title) => {
        const InsuredCheckData = accDetails && accDetails?.additionalInfoDocs?.primaryInsuredDocumentDetail?.quesList?.map((item) => {
            return data?.list.filter((val) => item?.documentCdValue?.toLowerCase() === val?.newTitle?.toLowerCase())
        });
        const proposerCheckData = accDetails && accDetails?.additionalInfoDocs?.proposerDocumentDetail?.quesList?.map((item) => {
            return data?.list.filter((val) => item?.documentCdValue?.toLowerCase() === val?.newTitle?.toLowerCase())
        });
        //  console.log('isProposerDocPresent',isProposerDocPresent)
        // console.log("checkData for medical===", data.list, InsuredCheckData.flat(), proposerCheckData.flat())
        switch (title) {
            case 'Health and Lifestyle Questionnaire':
                return <Health insureddata={InsuredCheckData && InsuredCheckData.flat()}
                    proposerdata={proposerCheckData && proposerCheckData.flat()}
                    accDetails={accDetails}
                    isProposerDocPresent={isProposerDocPresent}
                    isInsurerDocPresent={isInsurerDocPresent}
                    category={accDetails.policyFor === 'OTHER' ? [{
                        id: 1,
                        heading: 'Insured',
                        title: accDetails?.insuredName !== null ? accDetails?.insuredName : 'INSURER'
                    },
                    {
                        id: 2,
                        heading: 'Proposer',
                        title: accDetails?.proposerName !== null ? accDetails?.proposerName : 'PROPOSER'
                    }] :
                        [{
                            id: 1,
                            heading: 'Insured',
                            title: accDetails?.insuredName !== null ? accDetails?.insuredName : 'INSURER'
                        }]
                    }
                />
            case 'Documents':
                return <DocumentUpload label={'add-form'}
                    addDocUpload={accDetails}
                    listItem={data?.list} //proposer, insured
                />
            default:
                break;
        }
    }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }
    return (
        <ul className='addNonMedAcc'>
            {
                questionnaireData.map(item => {
                    
                    if (item.title === 'Health and Lifestyle Questionnaire') {
                        
                        if(isInsurerDocPresent) {
                            return (
                                <li className='addNonMedAccList' key={item.id} >

                                    <Accordion2
                                        item={item}
                                        openAccordion={openAccordion}
                                        toggleAccordion={toggleAccordion}
                                        isProposerDocPresent={isProposerDocPresent}
                                        isInsurerDocPresent={isInsurerDocPresent}
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
                        }
                     else {
                            return false
                        }
                    }
                    else if (item.title === 'Documents') {
                        if(addInsuredNonupload || addProposerNonupload){
                        return (
                            <li className='addNonMedAccList' key={item.id} >

                                <Accordion2
                                    item={item}
                                    openAccordion={openAccordion}
                                    toggleAccordion={toggleAccordion}
                                    isProposerDocPresent={isProposerDocPresent}
                                    isInsurerDocPresent={isInsurerDocPresent}
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
                        )}
                        else {
                            return false
                        }
                    }
                    
                })
            }
        </ul>
    )
}

export default AddNonMedReq
