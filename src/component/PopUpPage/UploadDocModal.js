import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../Button';
import cameraImg from '../../Assets/images/camera.png'
import uploadImg from '../../Assets/images/upload_icon.png'

const UploadDocModal = (props) => {
    const closeHandler = () => {
        props.onClose();
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
                            <Image
                                src={uploadImg}
                                alt='uplImg'
                            />
                            <Image
                                src={cameraImg}
                                alt='cmImg'
                            />
                        </div>
                        <div className='add-more-btn'>
                            <Button
                                buttonText={'Add more'}
                            />
                        </div>
                            <Button
                                buttonText={'SUBMIT'}
                                className={'blue-button'}
                            />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UploadDocModal