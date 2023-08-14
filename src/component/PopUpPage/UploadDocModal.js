import React, { useState } from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../Button';
import cameraImg from '../../Assets/images/camera.png'
import uploadImg from '../../Assets/images/upload_icon.png'

const UploadDocModal = (props) => {
    const [showImg, setshowImg] = useState(false)
    const closeHandler = () => {
        props.onClose();
    }
    const clickHandler = () => {
    }
    const fileUpload = () => {

    }
    return (
        <div className={`overlay ${props.addCss}`} >
            <div className="vrtclcntr_bx">
                <div className="vrtclcntr_bxinr">
                    <div className="dcmnt_upload_popupinr">
                        <div onClick={closeHandler} className="close_popup"><Image src={close} alt="cross" /></div>
                        {props.removeHeader ? null :
                            <div className="hdng_bx">
                                <h2>{props.heading ? props.heading : null}</h2>
                            </div>
                        }
                        <div className='sub-heading-bx'>{props.subheading ? props.subheading : null}</div>
                        <div className='content-box upload-content-bx'>
                            <div>
                                <div>
                                    <Image
                                        src={uploadImg}
                                        alt='uplImg'
                                    />
                                    <input type="file" onChange={fileUpload} />
                                </div>
                                <div>
                                    <Image
                                        src={cameraImg}
                                        alt='cmImg'
                                    />
                                    <input type="file" onChange={fileUpload} />
                                </div>
                            </div>
                            {showImg && 
                            <div>
                                <Image
                                        src={''}
                                        alt='cmImg'
                                    />
                            </div>
                            }
                        </div>
                        <div className='add-more-btn'>
                            <Button
                                buttonText={'Add more'}
                            />
                        </div>
                        <Button
                            buttonText={'SUBMIT'}
                            className={'blue-button'}
                            clickHandler={clickHandler}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadDocModal