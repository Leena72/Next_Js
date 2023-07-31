'use client';

import React, { useEffect, useState } from 'react'
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
  const [disabled, setdisabled] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
   if(proposalNo.length!==10){

   }
  }, [proposalNo])
  
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
    console.log('length',val.length)
    if (val.length >= 11) {
      return false
    }
    if (val.length === 10) {
      seterrDOB(false)
    }
    else {
      seterrDOB(true)
    }
    setDOB(val.replace(/((\d{4})(?=[0-9]))/g, "$1-").replace(/(((\d{4})-(\d{2}))(?=[0-9]))/g, "$1-").slice(0, 10))
  }


  const clickHandler = () => {
    // console.log('proposalNo', proposalNo)
    // console.log('dob', DOB + ' ' + '00:00:00')
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
          toaster('success', res.data.message)
          router.push('/dashboard');
        }
        else {
          // router.push('/login');
          toaster('error', res.data.message)
        }
      })
  }
  // console.log('errDOB',errDOB.length)
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
        {errDOB && <span>Please enter valid DOB. </span>}
        <div className='login-button'>
          <Button
            className='blue-button'
            clickHandler={clickHandler}
            type='button'
            buttonText={'Track Application'}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
