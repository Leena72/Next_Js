'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import withAuth from '../../../utils/withAuth';
import Axios from "axios";
import Banner from '../../../container/Banner';
import MainAccordion from '../../../container/MainAccordion';
import { applicationData, downloadData } from '../../../data'
import Accordion3 from '@/component/Accordion/Accordion3';
import Image from 'next/image'
import dwnArrow from "../../../Assets/images/dwn-arw.png";
import {dashboardAction} from '../../../redux/action/dashboardAction'

const Dashboard = () => {
    const data = applicationData
    const [openAccordion, setOpenAccordion] = useState(false)
    const dispatch = useDispatch()
    // console.log('localStorage.getItem("accessToken")',localStorage.getItem("accessToken"))
    useEffect(() => {
    let proposalNo=localStorage.getItem("proposalNo")
      dispatch(dashboardAction(proposalNo,(res)=>{
        console.log('res',res)
      }))
    }, [])

    return (
        <div className='dashboard-container'>
            <Banner />
            <div className='doc-heading'><p>Application Status</p></div>
            <MainAccordion data={data} />
            <div className='doc-heading'><p>Policy Related Documents</p></div>
            <div className='dashboard-acc'>
                <div className='acc-non-block' onClick={() => setOpenAccordion(!openAccordion)}>
                    <div>Download Documents</div>
                    <div className='acc-active-icon '>
                        <Image
                            className={openAccordion ? 'upArrow' : ''}
                            src={dwnArrow}
                            alt='icon'
                        />
                    </div>
                </div>
            </div>
            {
                openAccordion &&
                <Accordion3 data={downloadData} />
            }
        </div>
    )
}

export default withAuth(Dashboard)
