'use client';

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Axios from "axios";
import Image from 'next/image'
import { authenticate } from '../../utils/auth';
import { useRouter } from 'next/navigation';
import { toaster } from "../../utils/toaster";
import Input from '../../component/Input'
import Button from '../../component/Button'
import loginImg from "../../Assets/images/prfress_img.png";


const Login = () => {
  const router = useRouter();
  const [proposalNo, setProposalNo] = useState('')
  const [DOB, setDOB] = useState('')
  const [errProposal, seterrProposal] = useState(false)
  const [errDOB, seterrDOB] = useState(false)
  const [message, setMessage] = useState('')
  const [showStatus, setshowStatus] = useState(false)
  const dispatch = useDispatch()

  const proposalHandler = (e) => {
    let val = e.target.value
    if (!isNaN(val)) {
      if (val.length >= 11) {
        return false
      }
      setProposalNo(e.target.value)
    }
  }
  const dobHandler = (e) => {
    let val = e.target.value;
    setDOB(val.replace(/((\d{4})(?=[0-9]))/g, "$1-").replace(/(((\d{4})-(\d{2}))(?=[0-9]))/g, "$1-").slice(0, 10))
  }


  const clickHandler = () => {
    console.log('proposalNo', proposalNo)
    console.log('dob', DOB + ' ' + '00:00:00')
    debugger
    Axios({
      method: "post",
      mode: 'no-cors',
      url: `https://dev-api-auth.bhartiaxa.com/public/api/v1/auth/customer`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        // "input1": "3107423903",
        // "input2": "2002-12-12 00:00:00"
        "input1": proposalNo,
        "input2": DOB + ' ' + '00:00:00'
      }
    })
      .then((res) => {
        if (res.data.status === 'OK') {
          localStorage.setItem('accessToken', res.data.body.accessToken)
          localStorage.setItem('creationDate', res.data.body.creationDate)
          localStorage.setItem('expirationDate', res.data.body.expirationDate)
          localStorage.setItem('proposalNo', JSON.stringify({ proposalNo }));
          // toaster('success', res.data.message)
          setMessage(res.data.message)
          setshowStatus(false)
          router.push('/dashboard');
        }
        else {
          // router.push('/login');
          // toaster('error', res.data.message)
          setshowStatus(true)
          setMessage(res.data.message)
        }
      })
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
            type='tel'
            value={proposalNo}
            name='proposalNo'
            changeHandler={proposalHandler}
          />
          {errProposal && <span>Please enter valid Propasal No./Quotation No./Policy No. </span>}
        </div>
        <div className='login-content'>
          <label>DOB/PAN</label>
          <Input
            type='text'
            name='dob'
            value={DOB}
            changeHandler={dobHandler}
          />
        </div>
        {showStatus && <p className='loginStatus'>{message}</p>}
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
