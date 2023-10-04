'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import withAuth from '../../../utils/withAuth';
import Banner from '../../../container/Banner';
import MainAccordion from '../../../container/MainAccordion';
import { applicationData, downloadData, statusApi } from '../../../data'
import Accordion3 from '../../../component/Accordion/Accordion3';
import Image from 'next/image'
import dwnArrow from "../../../Assets/images/dwn-arw.png";
import { dashboardAction } from '../../../redux/action/dashboardAction'


const Dashboard = () => {
    useEffect(() => {
        if (typeof document !== "undefined" && typeof window !== "undefined") {
            let proposalNo = localStorage.getItem("proposalNo")
            dispatch(dashboardAction(proposalNo, (res) => {
                setcustomerData(res)
            }))
            // setcustomerData(statusApi) // static data
        }
    }, [])
    const data = applicationData
    const [openAccordion, setOpenAccordion] = useState(false)
    const [customerData, setcustomerData] = useState(null)
    const dispatch = useDispatch()
    const showLoader = useSelector((state) => state.loaderReducer);
    const storeState = useSelector((state) => state);

    // console.log('storeState', storeState)

    useEffect(() => {
        if (typeof document !== "undefined" && typeof window !== "undefined") {
            window.history.pushState(null, null, window.location.href);
            window.onpopstate = function (event) {
                history.go(1);
            }
        }
    }, [])




    // console.log('customerData', customerData)
    return (
        <div className='dashboard-container'>
            {showLoader["isLoaderOn"] && (
                <div className="loader-overlay">
                    <div className="loader-img"></div>
                </div>
            )}
            <div className='header-container-no'>
                <p>Proposal Number</p>
                <p>{customerData?.proposalNumber}</p>
            </div>
            <Banner />
            <div className='doc-heading'><p>Application Status</p></div>
            <MainAccordion
                data={data}
            />
            <div className='doc-heading'><p>Policy Related Documents</p></div>
            <div className='dashboard-acc'>
                <div
                    className='acc-non-block'
                    onClick={() => setOpenAccordion(!openAccordion)}
                >
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
                <Accordion3
                    data={downloadData}
                />
            }
        </div>
    )
}

export default withAuth(Dashboard)
// export default Dashboard

