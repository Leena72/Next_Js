import React, { useState } from 'react'
import Input from '@/component/Input'
import Accordion2 from '../../component/Accordion/Accordion2'
import { consentDataList } from '../../data'

const ConsentLayout = ({ accDetails, data, title, label, consentData }) => {
    const [openAccordion, setOpenAccordion] = useState(null)


    const dataAcc = accDetails?.policyFor === 'OTHER' ? [
        {
            id: 1,
            title: 'Insured'
        },
        {
            id: 2,
            title: 'Proposer'
        },
    ]
        : [
            {
                id: 1,
                title: 'Insured'
            }
        ]

    const changeHandler = () => { }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }
    const renderListItem = (ele) => {
        // console.log('consentDataList',consentDataList)
        if (ele in consentDataList) {
            return consentDataList[ele]
        }
        else {
            return ele
        }

    }
    // health questionnaire 
    const renderElement = (title) => {
        // console.log('consentData>>', consentData)
        let detail = title === 'Insured' ? Object.entries(consentData.insuredQuestionDetails).slice(0,6) :
            Object.entries(consentData.proposerQuestionDetails).slice(0,6)
            // console.log('detail',detail)
        const renderData = <div className='consent-ques-blk'>{
            detail.map((item, id) => {
                return (<div className='consent-ques-ans' key={id}>
                    <div className='consent-ques'>
                        {id + 1}{'. '}{item[0]}
                    </div>
                    <div className='consent-ans-blk'>
                        <div className='consent-ans'>
                            <span>Old details</span>
                            <Input
                                type='text'
                                name={item[1].oldDetails}
                                value={item[1].oldDetails}
                                // changeHandler={changeHandler}
                                readOnly={true}
                            />
                        </div>
                        <div className='consent-ans'>
                            <span>New details</span>
                            <Input
                                type='text'
                                name={item[1].revisedDetails}
                                value={item[1].revisedDetails}
                                // changeHandler={changeHandler}
                                readOnly={true}

                            />
                        </div>
                    </div>
                </div>)
            })
        }</div>
        return renderData

    }
    return (
        <div className='form-container'>
            {title !== 'Health Questionnaire Details' ?
                <table className='form-table'>
                    <thead>
                        <tr>
                            <th></th>
                            <th><span>Old details</span></th>
                            <th><span>Revised Details</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            consentData.map((item, idx) => {
                                return (
                                    <tr
                                        key={idx}
                                    >
                                        <td>
                                            {/* {item[0]} */}
                                            <span>{renderListItem(item[0])}</span>
                                        </td>
                                        <td>
                                            <Input
                                                type='text'
                                                name={item[1].oldDetails}
                                                value={item[1].oldDetails}
                                                // changeHandler={changeHandler}
                                                readOnly={true}

                                            />
                                        </td>
                                        <td>
                                            <Input
                                                type='text'
                                                name={item[1].revisedDetails}
                                                value={item[1].revisedDetails}
                                                // changeHandler={changeHandler}
                                                readOnly={true}

                                            />
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <ul>
                    {dataAcc.map((item) => {
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
                                            renderElement(item.title)
                                        }
                                    </div>
                                    : ''
                                }
                            </li>
                        )
                    })}
                </ul>
            }
        </div>
    )
}

export default ConsentLayout
