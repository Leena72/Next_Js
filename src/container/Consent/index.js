import React, { useState } from 'react'
import { consentForChangeData } from '.././../data'
import Accordion2 from '../../component/Accordion/Accordion2'
import Button from '../../component/Button'
import Input from '../../component/Input'
import ConsentLayout from './ConsentLayout'
import FormFieldConsent from '../../component/FormFieldConsent'


const Consent = ({ }) => {
    const [openAccordion, setOpenAccordion] = useState(null)
    const renderElement = (data, title) => {
        return <ConsentLayout
            data={data.detail}
            title={title}
        />
    }
    const clickHandler = () => { }
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id)
    }
    const changeHandler=()=>{}
    const downloadHandler=()=>{}
    const acceptHandler=()=>{}
    const rejectHandler =()=>{}
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
        <div className='consent-blk'>
            <FormFieldConsent
                text='To View And download your revised benefit Illustration'
                buttonText='Click Here'
                clickHandler={downloadHandler}
            />
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
        {/* <div className='consent-container'>
           <p>Please click below to check the changes that has been done and provide consent</p>
           <Button
               className={'activeBtn'}
               clickHandler={clickHandler}
               type='button'
               buttonText={'View the changes'}
           />
       </div> */}
    </>
    )
}

export default Consent
