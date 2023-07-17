'use client'
import React, { useState } from 'react'
import withAuth from '../../utils/withAuth';
import Banner from '../../container/Banner';
import Accordion from '../../component/Accordion'
import DownloadList from '../../component/DownloadList';
import { applicationData, downloadData } from '../../data'

const Dashboard = () => {
    const [data, setData] = useState(applicationData)
    return (
        <div className='dashboard-container'>
            <Banner />
            <div className='doc-heading'><p>Application Status</p></div>
            {data.map((item, index) => (
                <Accordion data={item} index={index} />
            ))
            }
            <div className='doc-heading'> <p>Policy Related Documents</p></div>
            <DownloadList />
        </div>
    )
}

export default withAuth(Dashboard)
