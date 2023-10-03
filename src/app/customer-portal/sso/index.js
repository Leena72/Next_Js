'use client';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from '../../redux/action/login-action'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import Input from "../../component/Input"
import Button from '../../component/Button'
import loginImg from "../../Assets/images/prfress_img.png";


const SsoLogin = () => {
    const router = useRouter();
    const [ssoId, setSsoId] = useState('');
    const dispatch = useDispatch()
    const showLoader = useSelector((state) => state.loaderReducer);

    const validateTokenSSO = (ssoid) => {
        dispatch(validateToken(ssoid, () => {
            router.push('/customer-portal/dashboard');
        }))
    }
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const ssoid = urlParams.get('ssoId')
        setSsoId(ssoid)
        validateTokenSSO(ssoid)
    }, [])


   
    return (
        <div className='login-container'>
            {showLoader["isLoaderOn"] && (
                <div className="loader-overlay">
                    <div className="loader-img"></div>
                </div>
            )}
        </div>
    )
}

export default SsoLogin
