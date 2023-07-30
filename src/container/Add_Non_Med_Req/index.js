import React, { useState } from 'react'
import { questionnaireData } from '../../data'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import Health from './Health'


const AddNonMedReq = () => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const renderElement = (data, title) => {
        switch (title) {
            case 'Health and Lifestyle Questionnaire':
                return <Health data={data.list} />
            case 'Documents':
                return <div>abcd</div>
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
                        <li className='' key={item.id} >
                            <div className='acc-non-block' onClick={() => toggleAccordion(item.id)}>
                                <div>{item.title}</div>
                                <div className='acc-active-icon '>
                                    <Image
                                        className={openAccordion === item.id ? 'upArrow' : ''}
                                        src={dwnArrow}
                                        alt='icon'
                                    />
                                </div>
                            </div>
                            {openAccordion === item.id ?
                                <div className='show'>
                                    {
                                        renderElement(item, item.title)
                                    }
                                    {/* <div>{item.title}</div> */}
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
