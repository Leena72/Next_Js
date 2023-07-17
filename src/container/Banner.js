import React from 'react'
import BannerCard from '../component/BannerCard'
import { bannerData } from '../data'
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
                        {bannerData.map((item) => (
                            <BannerCard item={item} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className='banner-img'></div>
        </div>
    )
}

export default Banner
