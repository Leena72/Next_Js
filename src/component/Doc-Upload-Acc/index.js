import React from 'react'
import Image from 'next/image'
import uplImg from "../../Assets/images/upload_btn.png";
import previewImg from "../../Assets/images/preview.png"
import deleteImg from "../../Assets/images/delete.png"



export const UploadDoc = ({ hideSection,
    data, 
    clickHandler, 
    clickHandleraddNon, 
    label, 
    showViewDelete, 
    deleteDocHandler, 
    viewDocHandler,
    proposedDocList }) => {
    const imageStyle = {
        marginRight: '8px',
        width: '20px',
        height: '20px'
    }
// console.log('data proposedDocList',data)
    return (
        <div
            className={`upl-doc-container upl-doc`}
            // key={key}

        >
            <div className='upl-heading'>{data.indexValue}</div>
            <div>
                {!showViewDelete ? <div onClick={label === 'form-filling' ?
                    () => clickHandler(data)
                    :
                    () => clickHandleraddNon(data.documentCdValue,data.id)
                } className='upl-img'>
                    <a className='upl-img-link'>
                        <Image
                            src={uplImg}
                            alt='uplImg'
                            style={imageStyle}
                        />
                    </a>
                </div>
                    :
                    <div className='view-img'>
                        <a className='view-img-link'
                            onClick={viewDocHandler}
                        >
                            <Image
                                src={previewImg}
                                alt='uplImg'
                                style={imageStyle}
                            />
                        </a>
                        {
                        hideSection && 
                        <a className='view-img-link'
                            onClick={deleteDocHandler}
                        >
                            <Image
                                src={deleteImg}
                                alt='uplImg'
                                style={imageStyle}
                            />
                        </a>}
                    </div>
                }
            </div>
        </div>
    )
}

export const Document = ({ data, key, clickHandler }) => {
    return (
        <div className='upl-doc-container upl-doc' key={key} onClick={() => clickHandler(data.id)}>
            <div className='upl-heading'>{data.title}</div>
        </div>
    )
}

export const ViewDoc = ({ data, key, deleteDocHandler }) => {
    return (
        <div className='view-doc2-container' key={key} >
            <div className='view-heading'>{data.title}</div>
            <div className='view-img'>
                <a className='view-img-link'>
                    <Image
                        src={previewImg}
                        alt='uplImg'
                    />
                </a>
                <a className='view-img-link'
                // onClick={deleteDocHandler}
                >
                    <Image
                        src={deleteImg}
                        alt='uplImg'
                    />
                </a>
            </div>
        </div>
    )
}
