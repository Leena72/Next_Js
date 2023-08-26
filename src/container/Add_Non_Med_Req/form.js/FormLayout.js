import React from 'react'
import Layout1 from './Layout1'
import Layout2 from './Layout2'

const FormLayout = ({ formName, formData, formChangeHandler }) => {
  const renderFormLayout = (formName) => {
    if(formName!=='diabetes'){
    return  <Layout1
      formName={formName}
          formData={formData}
          formChangeHandler={formChangeHandler}
      />
    }
    else{
     return <Layout2
      formName={formName}
          formData={formData}
          formChangeHandler={formChangeHandler}
      />
    }
  }
  return (
    <>
      {renderFormLayout(formName)}
    </>
  )
}

export default FormLayout