'use client'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";
import { downloadAction } from '../../redux/action/downloadAction';

const Accordion3 = ({ data }) => {
    const [listItem, setlistItem] = useState('')
    const dispatch = useDispatch()
    const customerDetail = useSelector((state) => state.customerDetailReducer);
    // console.log('proposerName',customerDetail?.proposerName)
    const documentList = useSelector((state) => state.customerDetailReducer?.policyDocuments);

    useEffect(() => {
        const cleanedObject = removeBlankAttributes(documentList);
        setlistItem(cleanedObject)
    }, [documentList])


    const removeBlankAttributes = (obj) => {
        for (const key in obj) {
            if (!obj[key] || obj[key] == ' ') {
                delete obj[key];
            }
        }
        return obj;
    }

    // console.log('listItem', listItem)

    const downloadHandler = (file) => {
        let proposalNo = customerDetail?.proposalNumber
        dispatch(downloadAction(proposalNo, file))
    }


    const renderElement = (item) => {
        let docExist1
        let proposerFile
        let insuredFile
        if (listItem) {
            docExist1 = item.proposer in listItem
            proposerFile = listItem?.[item.proposer]
            insuredFile = listItem?.[item.insured]
            if (docExist1) {
                return (
                    <li className='doc-list' key={item.id}>
                        <div className='doc-list-content'>
                            <span className='doc-dot'></span>
                            <span className='doc-title'>{item.title}</span>
                            <span className='doc-sub-heading'>{item.msg ? `(${item.msg})` : ''}</span>
                        </div>
                        <div className='doc-img'>
                            {
                                (customerDetail.policyFor === 'OTHER'
                                    &&
                                    (item.title === 'COVID Questionnaire' || item.title === 'Form 60'))
                                    ?
                                    <>
                                        <a className='doc-img-link' onClick={() => downloadHandler(proposerFile)}>
                                            <Image
                                                src={dwnImg}
                                                alt='dwnImg'
                                            />
                                            {(item.title === 'COVID Questionnaire' || item.title === 'Form 60') && <span>{customerDetail?.proposerName}</span>}
                                        </a>
                                        <a className='doc-img-link' onClick={() => downloadHandler(insuredFile)}>
                                            <Image
                                                src={dwnImg}
                                                alt='dwnImg'
                                            />
                                            {(item.title === 'COVID Questionnaire' || item.title === 'Form 60') && <span>{!customerDetail?.insuredName ? 'INSURER' : customerDetail?.insuredName}</span>}
                                        </a>
                                    </>
                                    :
                                    <a className='doc-img-link' onClick={() => downloadHandler(proposerFile)}>
                                        <Image
                                            src={dwnImg}
                                            alt='dwnImg'
                                        />
                                        {(item.title === 'COVID Questionnaire' || item.title === 'Form 60') && <span>{customerDetail?.proposerName}</span>}
                                    </a>
                            }
                        </div>
                    </li>
                )
            }
        }
        else {
            return
        }

    }

    return (
        <ul className='doc-container'>
            {data.map((item) => (
                renderElement(item)
            )
            )}
        </ul>
    )
}

export default Accordion3
