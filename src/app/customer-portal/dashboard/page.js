'use client'
import React from 'react'
import withAuth from '../../../utils/withAuth';
import Banner from '../../../container/Banner';
import MainAccordion from '../../../container/MainAccordion';
import { applicationData, downloadData } from '../../../data'

const Dashboard = () => {
    const data=applicationData
    return (
        <div className='dashboard-container'>
            <Banner />
            <div className='doc-heading'><p>Application Status</p></div>
            <MainAccordion data={data} downloadData={downloadData}/>
        </div>
    )
}

export default withAuth(Dashboard)
