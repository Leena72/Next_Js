'use client';

import React, { useState } from 'react'
import { authenticate } from '../../utils/auth';
import { useRouter } from 'next/navigation';
import { toaster } from "../../utils/toaster";
import Input from '@/component/Input'
import Button from '@/component/Button'

const Login = () => {
  const router = useRouter();
  const [proposalNo, setProposalNo] = useState('')
  const [DOB, setDOB] = useState('')

  const changeHandler = (e) => {
    let val = e.target.value;
    if (!isNaN(val)) {
      setProposalNo(val)
    }
  }
  const clickHandler = () => {
    if (authenticate(proposalNo, DOB)) {
      toaster("success");
      router.push('/dashboard');
    } else {
      console.log('>> error')
      toaster("error");
    }
  }
  // console.log('proposalNo:', proposalNo, ' DOB:', DOB)

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
            value={proposalNo}
            name='proposalNo'
            changeHandler={changeHandler}
          />
        </div>
        <div className='login-content'>
          <label>DOB/PAN</label>
          <Input
            type='password'
            name='dob'
            value={DOB}
            changeHandler={(e) => setDOB(e.target.value)}
          />
        </div>
        <div className='login-button'>
          <Button
            className='blue-button'
            clickHandler={clickHandler}
            type='button'
            buttonText={'Track Application'}
            disabled={proposalNo.length === 0 || DOB.length === 0}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
