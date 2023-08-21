import React, { useState } from 'react'
import { questionnaireData } from '../../data'
import Health from './Health'
import Accordion2 from '../../component/Accordion/Accordion2';
import DocumentUpload from '../Doc_Upload';

const AddNonMedReq = () => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const renderElement = (data, title) => {
        switch (title) {
            case 'Health and Lifestyle Questionnaire':
                return <Health data={data.list} />
            case 'Documents':
                return <DocumentUpload label={'add-form'}/>
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
