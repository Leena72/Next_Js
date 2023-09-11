import React from 'react'
import Layout1 from './Layout1'
import Layout2 from './Layout2'

const FormLayout = (props) => {
  const {formName}=props
  const renderFormLayout = (formName) => {
    if (formName !== 'diabetes') {
      return <Layout1 {...props}/>
    }
    else {
      return <Layout2 {...props}/>
    }
  }
  return (
    <>
      {renderFormLayout(formName)}
    </>
  )
}

export default FormLayout