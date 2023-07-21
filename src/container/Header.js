'use client'
import React,{useEffect,useState} from 'react'
import Image from 'next/image'
import logo from "../Assets/images/bharti-axa-logo.png";

const Header = (props) => {
    const [islogin, setislogin] = useState(null)
    useEffect(() => {
        let test= localStorage.getItem('isLogin')
        setislogin(test)
    })
    
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Image
                    src={logo}
                    alt='logo'
                />
            </div>
            {
              islogin &&
                <div className='header-content'>
                    <p>Proposal Number</p>
                    <p>{123456}</p>
                </div>
            }
        </div>
    )
}

export default Header
