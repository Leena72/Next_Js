import React from 'react'
import Layout1 from './Layout1'
import Layout2 from './Layout2'

const FormLayout = ({ formName, formData, formChangeHandler }) => {
  const renderFormLayout = (formName) => {
    switch (formName) {
      case 'alcohol':
        return <Layout1
          formName={formName}
          formData={formData} 
          formChangeHandler={formChangeHandler} />
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

export default FormLayout