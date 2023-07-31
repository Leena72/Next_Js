import React from 'react'

export const FormLayout = ({ formName, formData }) => {
  const renderFormLayout = (formName) => {
    switch (formName) {
      case 'alcohol':
        return <Layout1 formData={formData} />
      case 'chest':
        return <Layout2 formData={formData} />
      case 'deformity':
        return <Layout1 formData={formData} />
      case 'diabetes':
        return <div>diabetes</div>
      case 'digestive':
        return <Layout1 formData={formData} />
      case 'epilepsy':
        return <Layout1 formData={formData} />
      case 'musculoskeletal':
        return <Layout1 formData={formData} />
      case 'nervous':
        return <Layout1 formData={formData} />
      case 'resipratory':
        return <Layout1 formData={formData} />
      case 'thyroid':
        return <Layout1 formData={formData} />
      case 'tumour':
        return <Layout1 formData={formData} />
      default:
        break;
    }
  }
  return (
    <>
      {renderFormLayout(formName)}
    </>
  )
}

// alcohol-------
const Layout1 = ({formData}) => {
  return (
    <>
    {
      formData.map(item => {
        return (
          <div className='form-block'>
            <div className='form-declaration'>{item.declaration}</div>
            <div className='form-question'>{item.heading}</div>
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
  </>
  )
}

// chest------

const Layout2 = ({formData}) => {
  return (
    <>
    {
      formData.map(item => {
        return (
          <div className='form-block'>
            <div className='form-declaration'>{item.declaration}</div>
            <div className='form-quesAns'>
              <div className='form-question'>{item.question}</div>
              <div className='form-answer'><textarea id={item.id} /></div>
            </div>
            {
              item.subQuestions.map(ele => (
                <div className='form-quesAns'>
                  <div className='form-question'>{ele.question}</div>
                  <div className='form-answer'><textarea id={ele.id} /></div>
                </div>
              ))
            }
          </div>
        )
      })
    }
  </>
  )
}
