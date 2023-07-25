import React from 'react'
import {questionnaireData} from '../../data'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import AddNonMedForm from './AddNonMedForm'


const AddNonMedReq = () => {
    const renderElement=(formName)=>{
        switch (formName) {
            case 'chest':
        <AddNonMedForm/>
            default:
                break;
        }
    }
    return (
        <ul>
            {
                questionnaireData.map(item => (
                    <li className='' key={item.id}>
                        <div>{item.title}</div>
                        <div>
                            <Image
                                // className={isActive ? 'upArrow' : ''}
                                src={dwnArrow}
                                alt='icon'
                            />
                        </div>
            {
                renderElement(item.formName)
            }
                                        
                    </li>
                ))
            }
        </ul>
    )
}

export default AddNonMedReq
