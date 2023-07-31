import React, { useState } from 'react'
import Image from 'next/image'
import dwnArrow from "../../Assets/images/dwn-arw.png";
import NonMedForm from './form.js'

const Health = ({ data }) => {
  const [openAcc, setOpenAcc] = useState(null)
  const toggleAccordion = (id) => {
    setOpenAcc(openAcc === id ? null : id)
  }
  const renderElement = (formName) => {
    return <NonMedForm formName={formName} />
  }
  return (
    <ul className='nonMedListBlock'>
      {data.map(item => {
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
                  renderElement(item.formName)
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

export default Health
