import React, { useState } from 'react'
import { questionnaireData } from '../../data'
import Health from './Health'
import Accordion2 from '../../component/Accordion/Accordion2';
import DocumentUpload from '../Doc_Upload';

const AddNonMedReq = ({ addNonMedDetail, accDetails }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    let isProposerDocPresent
    let isInsurerDocPresent
    const renderElement = (data, title) => {
        const InsuredCheckData = accDetails && accDetails?.additionalInfoDocs?.primaryInsuredDocumentDetail?.quesList?.map((item) => {
            return data?.list.filter((val) => item?.documentCdValue?.toLowerCase() === val?.newTitle?.toLowerCase())
        });
        const proposerCheckData = accDetails && accDetails?.additionalInfoDocs?.proposerDocumentDetail?.quesList?.map((item) => {
            return data?.list.filter((val) => item?.documentCdValue?.toLowerCase() === val?.newTitle?.toLowerCase())
        });
         isProposerDocPresent=accDetails && accDetails?.additionalQuestionnaireListDTO?.proposerAdditionalQuestionnaireDocs.length!==0
         isInsurerDocPresent=accDetails && accDetails?.additionalQuestionnaireListDTO?.insuredAdditionalQuestionnaireDocs.length!==0
         
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
                        title: accDetails?.insuredName !== null ? accDetails?.insuredName  : 'INSURER'
                    },
                    {
                        id: 2,
                        heading: 'Proposer',
                        title: accDetails?.proposerName !== null ? accDetails?.proposerName  : 'PROPOSER'
                    }] :
                        [ {
                            id: 1,
                            heading: 'Insured',
                            title: accDetails?.insuredName !== null ? accDetails?.insuredName  : 'INSURER'
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
                })
            }
        </ul>
    )
}

export default AddNonMedReq
