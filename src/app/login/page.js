'use client';

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Axios from "axios";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import { toaster } from  "../../utils/toaster"
import Input from "../../component/Input"
import Button from '../../component/Button'
import loginImg from "../../Assets/images/prfress_img.png";


const Login = () => {
  const router = useRouter();
  const [proposalNo, setProposalNo] = useState('')
  const [DOB, setDOB] = useState('')
  const [PAN, setPAN] = useState('')
  const [isDob, setIsDob] = useState(false)
  const [disabled, setdisabled] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    const panReg = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
    if ((DOB.length === 10 || panReg.test(PAN)) && (proposalNo.length >= 10)) {
      setdisabled(false)
    }
    else {
      setdisabled(true)
    }
  }, [DOB, PAN, proposalNo])

  const proposalHandler = (e) => {
    let val = e.target.value
    if (!isNaN(val)) {
      if (val.length >= 21) {
        return false
      }
      setProposalNo(e.target.value)
  }
}

  const dobPanHandler = (e) => {
    let val = e.target.value;
    const reg = /^[A-Za-z]/
    if (reg.test(val.charAt(0))) {
      setIsDob(false)
      let value = val.toUpperCase()
      if (val.length >= 11) {
        return false
      }
      setPAN(value)
    }
    else {
      if (val.length >= 11) {
        return false
      }
      setIsDob(true)
      let abcd = transformDateFormat(val)
      setDOB(abcd)
    }

  }

  const transformDateFormat = (dateStr) => {
    const pattern = /^(\d{2})(\d{2})(\d{4})$/;
    const replacement = '$1-$2-$3';
    const transformedDate = dateStr.replace(pattern, replacement);
    return transformedDate;
  }

  const clickHandler = () => {
    Axios({
      method: "post",
      mode: 'no-cors',
      url: `https://dev-api-auth.bhartiaxa.com/public/api/v1/auth/customer`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
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
          toaster('error', res.data.message)
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
          <label>Proposal No./Quotation No./Policy No.</label>
          <Input
            type='tel'
            value={proposalNo}
            name='proposalNo'
            changeHandler={proposalHandler}
          />
        </div>
        <div className='login-content'>
          <label>Date of Birth/PAN</label>
          <Input
            type='text'
            name={isDob ? 'dob' : 'pan'}
            value={isDob ? DOB : PAN}
            changeHandler={dobPanHandler}
          />
        </div>
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
