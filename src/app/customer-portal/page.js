'use client';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loginHandler } from '../../redux/action/login-action'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Input from "../../component/Input"
import Button from '../../component/Button'
import loginImg from "../../Assets/images/prfress_img.png";
import SsoLogin from './sso';

const Login = () => {
  const router = useRouter();
  const [proposalNo, setProposalNo] = useState('')
  const [DOB, setDOB] = useState('')
  const [PAN, setPAN] = useState('')
  const [isDob, setIsDob] = useState(false)
  const [disabled, setdisabled] = useState(true)
  const dispatch = useDispatch()
  const showLoader = useSelector((state) => state.loaderReducer);
  const [ssoTrue, ssoIdSet] = useState(true)
  useEffect(() => {
    const panReg = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
    const urlParams = new URLSearchParams(window.location.search);
    const ssoid = urlParams.get('ssoid')
    if (ssoid) {
      ssoIdSet(true)
    } else {
      ssoIdSet(false)
      if ((DOB.length === 10 || panReg.test(PAN)) && (proposalNo.length >= 10)) {
        setdisabled(false)
      }
      else {
        setdisabled(true)
      }
    }

  }, [DOB, PAN, proposalNo])

  const proposalHandler = (e) => {
    let val = e.target.value
    const re = /^[0-9\-/]+$/;
    // if (!isNaN(val)) {
    if (val.length >= 21) {
      return false
    }
    setProposalNo(e.target.value)
    // }
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
      setIsDob(true)
      formatDate(val);
      // if (val.length >= 11) {
      //   return false
      // }

      // let abcd = transformDateFormat(val)
      // setDOB(abcd)
    }
  }


  const formatDate = (input) => {
    const cleanedInput = input.replace(/\D/g, '');
    const match = cleanedInput.match(/^(\d{0,2})(\d{0,2})(\d{0,4})$/);
    if (match) {
      const [, day, month, year] = match;
      let formatted = '';
      if (day) {
        formatted += day;
        if (day.length === 2 && month) formatted += '-';
      }
      if (month) {
        formatted += month;
        if (month.length === 2 && year) formatted += '-';
      }
      if (year) {
        formatted += year;
      }
      setDOB(formatted);
    }
  }

  const transformDateFormat = (dateStr) => {
    const pattern = /^(\d{2})(\d{2})(\d{4})$/;
    const replacement = '$1-$2-$3';
    const transformedDate = dateStr.replace(pattern, replacement);
    return transformedDate;
  }

  const clickHandler = () => {
    dispatch(loginHandler(proposalNo, DOB, () => {
      router.push('/customer-portal/dashboard');
    }))
  }
  return (
    <>
      {ssoTrue ? <SsoLogin />
        :
        <div className='login-container'>
          {showLoader["isLoaderOn"] && (
            <div className="loader-overlay">
              <div className="loader-img"></div>
            </div>
          )}
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
                placeholder='xxxxxxxxxx'
                changeHandler={proposalHandler}
              />
            </div>
            <div className='login-content'>
              <label>Date of Birth/PAN</label>
              <Input
                type='text'
                name={isDob ? 'dob' : 'pan'}
                value={isDob ? DOB : PAN}
                placeholder={'DD-MM-YYYY'}
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
        </div>}
    </>
  )
}

export default Login
