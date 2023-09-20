import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../Button';

const UploadDocModal = (props) => {
    const dispatch = useDispatch()
    const [showImg, setshowImg] = useState(true)
    const [fileValue, setFileValue] = useState({})
    const [fileImg, setfile] = useState('')
    const [disabled, setdisabled] = useState(true)

    const closeHandler = () => {
        props.onClose();
    }
    const uploadDocHandler = () => {
        props.uploadDocHandler(fileValue)
    }

    const fileUploadHandler = (event) => {
        let fileValue = event.target.files[0]
        if (fileValue.name !== '') {
            setdisabled(false)
            setfile(fileValue.name)
            setshowImg(false)
            setFileValue(fileValue)
        }
    }
    return (
        <div className={`overlay ${props.addCss}`} >
            <div className="vrtclcntr_bx">
                <div className="vrtclcntr_bxinr">
                    <div className="dcmnt_upload_popupinr">
                        <div onClick={closeHandler} className="close_popup"><Image src={close} alt="cross" /></div>
                        {props.removeHeader ? null :
                            <div className="hdng_bx">
                                <h2>{props.heading}</h2>
                            </div>
                        }
                        <div className='sub-heading-bx'>{props.subheading ? props.subheading : null}</div>
                        <div className='content-box upload-content-bx'>
                        {showImg ?   <div className='upload-block'>
                                <div className='upload-pin-blk'>
                                    <input type="file" onChange={fileUploadHandler} />
                                </div>
                                <div className='upload-camera-blk'>
                                    <input type="file" onChange={fileUploadHandler} />
                                </div>
                            </div>
                            :
                                <div>
                                    <p>{fileImg}</p>
                                </div>
                            }
                        </div>
                        <div className='add-more-btn'>
                            {/* <Button
                                buttonText={'Add more'}
                            /> */}
                        </div>
                        <Button
                            buttonText={'SUBMIT'}
                            className={'blue-button'}
                            clickHandler={uploadDocHandler}
                            disabled={disabled}
                        // disabled={fileValue?.name?.length==0}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadDocModal