import React from 'react'
import Image from 'next/image'
import uplImg from "../../Assets/images/upload_btn.png";
import previewImg from "../../Assets/images/preview.png"
import deleteImg from "../../Assets/images/delete.png"


export const UploadDoc = ({ data,key }) => {
    return (
        <div className={`upl-doc-container ${data.upload ? 'upl-doc' : 'upl-blk'}`} key={key}>
            <div className='upl-heading'>{data.title}</div>
            <div className='upl-img'>
                <a className='upl-img-link'>
                    <Image
                        src={uplImg}
                        alt='uplImg'
                    />
                </a>
            </div>
        </div>
    )
}

export const Document = ({ data }) => {
    return (
        <div className='upl-doc-container upl-doc' key={key}>
            <div className='upl-heading'>{data.title}</div>
        </div>
    )
}

export const ViewDoc = ({ data }) => {
    return (
        <div className='view-doc2-container' key={key}>
            <div className='view-heading'>{data.title}</div>
            <div className='view-img'>
                <a className='view-img-link'>
                    <Image
                        src={previewImg}
                        alt='uplImg'
                    />
                </a>
                <a className='view-img-link'>
                    <Image
                        src={deleteImg}
                        alt='uplImg'
                    />
                </a>
            </div>
        </div>
    )
}
