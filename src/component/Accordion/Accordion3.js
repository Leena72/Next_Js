import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";
import { downloadAction } from '../../redux/action/downloadAction';

const Accordion3 = ({ data }) => {
    const dispatch = useDispatch()
    const customerDetail = useSelector((state) => state.customerDetailReducer);
    const documentList = useSelector((state) => state.customerDetailReducer?.policyDocuments);

    const downloadHandler = (file) => {
        let proposalNo = localStorage.getItem("proposalNo")
        // let proposalNo="3108426548"
        dispatch(downloadAction(proposalNo, file))
    }

    const renderElement = (item) => {
        let docExist1 = item.proposer in documentList
        let proposerFile = documentList[item.proposer]
        let insuredFile = documentList[item.insured]
        if (docExist1) {
            return (
                <li className='doc-list' key={item.id}>
                    <div className='doc-list-content'>
                        <span className='doc-dot'></span>
                        <span className='doc-title'>{item.title}</span>
                        <span className='doc-sub-heading'>{item.msg ? `(${item.msg})` : ''}</span>
                    </div>
                    <div className='doc-img'>
                        {item.proposer && <a className='doc-img-link' onClick={() => downloadHandler(proposerFile)}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                            />
                            {item.title === 'COVID Questionnaire' && item.title==='Form 60' && <span>{customerDetail?.proposerName}</span>}
                        </a>}
                        {item.insured && <a className='doc-img-link' onClick={() => downloadHandler(insuredFile)}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                            />
                            {item.title === 'COVID Questionnaire' && item.title==='Form 60' && <span>{!customerDetail?.insuredName?'INSURER':customerDetail?.insuredName}</span>}
                        </a>}
                    </div>
                </li>
            )
        }
    }

    return (
        <ul className='doc-container'>
            {data.map((item) => (
                renderElement(item)
            ))}
        </ul>
    )
}

export default Accordion3
