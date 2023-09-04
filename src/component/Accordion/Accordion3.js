import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";
import { downloadAction } from '../../redux/action/downloadAction';
const Accordion3 = ({ data, documentList }) => {
    console.log('documentList>>', documentList)
    const dispatch = useDispatch()

    const downloadHandler = (file) => {
        let proposalNo = localStorage.getItem("proposalNo")
        // dispatch(downloadAction(proposalNo, file))
    }

    const renderElement = (item) => {
      
        let docExist1 = item.proposer in documentList
        let proposerFile = documentList[item.proposer]
        let insuredFile = documentList[item.insured]
        console.log('doc>>', docExist1, proposerFile, insuredFile)
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
                        </a>}
                       {item.insured && <a className='doc-img-link' onClick={() => downloadHandler(insuredFile)}>
                            <Image
                                src={dwnImg}
                                alt='dwnImg'
                            />
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
