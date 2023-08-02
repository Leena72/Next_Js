import React, { useState } from 'react'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import ProposedAcc from './ProposedAcc'
import { consentData } from '../../data'

const DocumentUpload = () => {
    const [openAcc, setOpenAcc] = useState(null)
    const toggleAccordion = (id) => {
        setOpenAcc(openAcc === id ? null : id)
    }
    const renderElement = (title) => {
        switch (title) {
            case 'Proposed':
                return <ProposedAcc />
            case 'Insured':
                return <ProposedAcc />
            default:
                break;
        }
    }
    return (
        <ul className='nonMedListBlock'>
            {consentData.map(item => {
                return (
                    <li className='nonMedList' key={item.id} >
                        <div className='non-block-heading ' onClick={() => toggleAccordion(item.id)}>
                            <div>{item.title}</div>
                            <div className='acc-active-icon '>
                                <Image
                                    className={openAcc === item.id ? 'upArrow' : ''}
                                    src={dwnArrow}
                                    alt='icon'
                                />
                            </div>
                        </div>
                        {openAcc === item.id ?
                            <div className='show'>
                                {
                                    renderElement(item.title)
                                }
                            </div>
                            : ''
                        }
                    </li>
                )
            })}
        </ul>
    )
}

export default DocumentUpload
