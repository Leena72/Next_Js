import React from 'react'
import Input from '@/component/Input'
import Button from '@/component/Button'

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-header'>
        <h1>Welcome to <br></br>
          application tracker
        </h1>
        <p>Track policy applications by entering the details</p>
      </div>
      <div className='login-block'>
        <div className='login-content'>
          <label>Propasal No./Quotation No./Policy No.</label>
          <Input
            type='text'
            name='proposalNo'
            changeHandler='changeHandler'
          />
        </div>
        <div className='login-content'>
          <label>DOB/PAN</label>
          <Input
            type='password'
            name='dob'
            changeHandler='changeHandler'
          />
        </div>
        <div className='login-button'>
          <Button
          className='blue-button'
          clickHandler={'clickHandler'}
          type='button'
          buttonText={'Track Application'}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
