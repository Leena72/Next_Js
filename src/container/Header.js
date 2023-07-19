'use client'
import React from 'react'
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
            {
                false &&
                <div className='header-content'>
                    <p>Proposal Number</p>
                    <p>{123456}</p>
                </div>
            }
        </div>
    )
}

export default Header
