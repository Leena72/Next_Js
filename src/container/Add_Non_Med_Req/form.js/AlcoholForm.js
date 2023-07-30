import React from 'react'

const AlcoholForm = ({ formData }) => {
  console.log('formData', formData)
  return (
    <div className='form-container'>
      {
        formData.map(item => {
          return (
            <div className='form-block'>
              <div className='form-declaration'>{item.declaration}</div>
              <div className='form-heading'>{item.heading}</div>
              {
                item.subQuestions.map(ele => (
                  <div className='form-quesAns'>
                    <div className='form-question'>{ele.question}</div>
                    <div className='form-answer'><textarea id={ele.id} /></div>
                  </div>
                ))
              }
              <div className='form-quesAns'>
                <div className='form-question'>{item.question}</div>
                <div className='form-answer'><textarea id={item.id} /></div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default AlcoholForm
