import React from 'react'
import { downloadData } from '../data/index'
const DownloadList = (props) => {
    return (
        <ul className='doc-container'>
            {downloadData.map((item) => (
                <li className='doc-list' key={item.id}>
                    <div className='doc-list-content'>
                        <span className='doc-dot'></span>
                        <span className='doc-title'>{item.title}</span>
                        <span className='doc-sub-heading'>{item.msg ? `(${item.msg})` : ''}</span>
                    </div>
                    <div className='doc-img'></div>
                </li>
            ))}
        </ul>
    )
}

export default DownloadList
