import React from 'react'
import Image from 'next/image'
import BannerCard from '../component/BannerCard'
import { bannerData } from '../data'
import loginImg from "../Assets/images/top_img_new.png";
const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='banner-content'>
                <div className='banner-header'>
                    <h1>Hello {'Abhishek Arora!'}</h1>
                    <p>Please find below the details of your plan</p>
                </div>
                <div className='banner-main'>
                    <p className='banner-proName'>Product Name- {'Elite Advantage'}</p>
                    <ul className='banner-card-container'>
                        {bannerData.map((item, i) => (
                            <BannerCard key={i} item={item} />
                        ))}
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
