'use client';

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { authenticate } from '../../utils/auth';
import login from '../../redux/action/login'
import { useRouter } from 'next/navigation';
import { toaster } from "../../utils/toaster";
import Input from '../../component/Input'
import Button from '../../component/Button'
import loginImg from "../../Assets/images/prfress_img.png";

const Login = () => {
  const router = useRouter();
  const [proposalNo, setProposalNo] = useState('')
  const [DOB, setDOB] = useState('')
  const dispatch=useDispatch()

  const changeHandler = (e) => {
    let val = e.target.value;
    if (!isNaN(val)) {
      setProposalNo(val)
    }
  }
  const clickHandler = () => {
    dispatch(login())
    if (authenticate(proposalNo, DOB)) {
      toaster("success");
      router.push('/dashboard');
    } else {
      console.log('>> error')
      toaster("error");
    }
  }
  return (
    <div className='login-container'>
      <div className='login-header'>
        <h1>Welcome to <br></br>
          Application Tracker
        </h1>
        <p>Track policy applications by entering the details</p>
        <div className='login-img'>
                <Image
                    src={loginImg}
                    alt='loginImg'
                />
            </div>
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
