import React from 'react'
import { useSelector } from "react-redux";
import Image from 'next/image'
import loginImg from "../Assets/images/top_img_new.png";
import {renderNumber} from '../utils/utils'

const Banner = () => {
    const bannerDetail = useSelector((state) => state.customerDetailReducer);
    const premiumPaymentMode = bannerDetail?.premiumPaymentMode
    const premiumPaymentModeLower = premiumPaymentMode?.toLowerCase();
    const premiumPayment =  premiumPaymentMode?.charAt(0).toUpperCase() + premiumPaymentModeLower?.slice(1);

    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-header'>
                    <h1>Hello {bannerDetail?.customerName}</h1>
                    <p>Please find below the details of your plan</p>
                </div>
                <div className='banner-main'>
                    <p className='banner-proName'>Product Name- {bannerDetail?.planName}</p>
                    <ul className='banner-card-container'>
                        <div className='banner-card'>
                            <p>
                                {bannerDetail?.policyTerm}
                            </p>
                            <p>{'Policy Term(In Year)'}</p>
                        </div>
                        <div className='banner-card'>
                            <p>
                                {bannerDetail?.premiumPaymentTerm}
                            </p>
                            <p>{'Premium Payment Term(In Year)'}</p>
                        </div>
                        <div className='banner-card '>
                            <p>
                                 {<>&#8377;</>} {renderNumber(bannerDetail?.premium)}{premiumPaymentMode!==null
                                ? ` / ${premiumPayment}` : ''}
                            </p>
                            <p>{'Premium Payable(INR)'}</p>
                        </div>
                        <div className='banner-card'>
                            <p>
                                {<>&#8377;</>} {renderNumber(bannerDetail?.sumAssured)}
                            </p>
                            <p>{'Sum Assured'}</p>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='banner-img'>
                <Image
                    src={loginImg}
                    alt='loginImg'
                />
            </div>
        </div>
    )
}

export default Banner
