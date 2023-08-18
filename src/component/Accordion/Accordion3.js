import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import dwnImg from "../../Assets/images/pdf-dwn-arrow.png";
import { downloadAction } from '../../redux/action/downloadAction';
const Accordion3 = ({ data }) => {
    const dispatch = useDispatch()

    const downloadHandler = () => {
        let proposalNo = localStorage.getItem("proposalNo")
        let file = '3107423902FNA.pdf'
        dispatch(downloadAction('3107423902', file))
    }
    return (
        <ul className='doc-container'>
            {data.map((item) => (
                <li className='doc-list' key={item.id}>
                    <div className='doc-list-content'>
                        <span className='doc-dot'></span>
                        <span className='doc-title'>{item.title}</span>
                        <span className='doc-sub-heading'>{item.msg ? `(${item.msg})` : ''}</span>
                    </div>
                    <div className='doc-img'>
                        {item.downloadStatus ?
                            <>
                                <a className='doc-img-link' onClick={downloadHandler}>
                                    <Image
                                        src={dwnImg}
                                        alt='dwnImg'
                                    />
                                </a>
                                <a className='doc-img-link' onClick={downloadHandler}>
                                    <Image
                                        src={dwnImg}
                                        alt='dwnImg'
                                    />
                                </a>
                            </>
                            :
                            <a className='doc-img-link' onClick={downloadHandler}>
                                <Image
                                    src={dwnImg}
                                    alt='dwnImg'
                                />
                            </a>
                        }
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Accordion3
