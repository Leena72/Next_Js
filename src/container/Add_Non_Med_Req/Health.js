import React, { useState } from 'react'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import NonMedForm from './form.js'
import { questions } from '../../data'
import Input from '@/component/Input'


const Health = ({ data }) => {
  const [openAcc, setOpenAcc] = useState(null)
  const toggleAccordion = (id) => {
    setOpenAcc(openAcc === id ? null : id)
  }
  const renderElement = (formName) => {
    return <NonMedForm formName={formName} />
  }
  return (
    <ul>
      {data.map(item => {
        return (
          <li key={item.id} >
            <div className='acc-non-block' onClick={() => toggleAccordion(item.id)}>
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
                  renderElement(item.formName)
                }
                {/* <div>{item.title}</div> */}

              </div>
              : ''
            }
          </li>
        )
      })}
    </ul>
  )
}

export default Health
