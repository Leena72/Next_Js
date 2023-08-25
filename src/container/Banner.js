import React from 'react'
import Image from 'next/image'
import BannerCard from '../component/BannerCard'
import { bannerData } from '../data'
import loginImg from "../Assets/images/top_img_new.png";
const Banner = ({ customerData }) => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-header'>
                    <h1>Hello {customerData?.customerName}</h1>
                    <p>Please find below the details of your plan</p>
                </div>
                <div className='banner-main'>
                    <p className='banner-proName'>Product Name- {customerData?.planName}</p>
                    <ul className='banner-card-container'>
                        <div className='banner-card'>
                            <p>
                                {customerData?.policyTerm}
                            </p>
                            <p>{'Policy Term(In Year)'}</p>
                        </div>
                        <div className='banner-card'>
                            <p>
                                {customerData?.premiumPaymentTerm}
                            </p>
                            <p>{'Premium Payment Term(In Year)'}</p>
                        </div>
                        <div className='banner-card'>
                            <p>
                                {<>&#8377;</>}{customerData?.premium}
                            </p>
                            <p>{'Premium to Pay(inc GST)'}</p>
                        </div>
                        <div className='banner-card'>
                            <p>
                                {<>&#8377;</>}{customerData?.sumAssured}
                            </p>
                            <p>{'Sum Assured'}</p>
                        </div>
                    </ul>
                    <div className="dsclmr">
                        <span>*Dummy text for one star</span>
                        <span>**Dummy text for two star</span>
                    </div>
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
