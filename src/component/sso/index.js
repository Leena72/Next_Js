'use client';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from '@/redux/action/login-action';
import { useRouter } from 'next/navigation';


const SsoLogin = () => {
    const router = useRouter();
    const [ssoId, setSsoId] = useState('');
    const dispatch = useDispatch()
    const showLoader = useSelector((state) => state.loaderReducer);

    const validateTokenSSO = (ssoid,sectionId) => {
        dispatch(validateToken(ssoid, () => {

            let url=  sectionId !== null  ? `/customer-portal/dashboard?section=${sectionId}`:
            `/customer-portal/dashboard`
            router.push(url);
        }))
    }
    useEffect(() => {
        if (typeof document !== "undefined" && typeof window !== "undefined") {
            const urlParams = new URLSearchParams(window.location.search);
            const ssoid = urlParams.get('ssoid')
            const sectionId = urlParams.get('section')
            setSsoId(ssoid)
            validateTokenSSO(ssoid,sectionId)
        }
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
