'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import logo from "../Assets/images/bharti-axa-logo.png";

const Header = (props) => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Image
                    src={logo}
                    alt='logo'
                />
            </div>
        </div>
    )
}

export default Header
