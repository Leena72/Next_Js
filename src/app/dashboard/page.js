'use client'
import React, { useState } from 'react'
import withAuth from '../../utils/withAuth';
import Banner from '../../container/Banner';
import MainAccordion from '../../container/MainAccordion';
import DownloadList from '../../component/DownloadList';
import { applicationData, downloadData } from '../../data'

const Dashboard = () => {
    const [data, setData] = useState(applicationData)
    return (
        <div className='dashboard-container'>
            <Banner />
            <div className='doc-heading'><p>Application Status</p></div>
            <MainAccordion data={data}/>
            <div className='doc-heading'> <p>Policy Related Documents</p></div>
            <DownloadList data={downloadData}/>
        </div>
    )
}

export default withAuth(Dashboard)
