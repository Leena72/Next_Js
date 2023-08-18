import React from 'react'
import Layout1 from './Layout1'
import Layout2 from './Layout2'

const FormLayout = ({ formName, formData, formChangeHandler }) => {
  const renderFormLayout = (formName) => {
    switch (formName) {
      case 'ALCOHOL_HABIT_QUESTION':
        return <Layout1
          formName={formName}
          formData={formData} 
          formChangeHandler={formChangeHandler} />
      case 'CHEST_PAIN_QUESTION':
        return <Layout2 formData={formData} />
      case 'DEFORMITY_QUESTION':
        return <Layout1 formData={formData} 
        formName={formName}
        formChangeHandler={formChangeHandler}
        />
      case 'diabetes':
        return <div>diabetes</div>
      case 'DIGESTIVE_DISORDER_QUESTION':
        return <Layout1 formData={formData} />
      case 'EPILEPSY_QUESTION':
        return <Layout1 formData={formData} />
      case 'MUSCULO_SKELETAL_DISORDERS_QUESTION':
        return <Layout1 formData={formData} />
      case 'NERVOUS_DISORDER_QUESTION':
        return <Layout1 formData={formData} />
      case 'RESPIRATORY_DISORDER_QUESTION':
        return <Layout1 formData={formData} />
      case 'THYROID_DISORDER_QUESTION':
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