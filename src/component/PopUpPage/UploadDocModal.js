import React, { use, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../../component/Button'
import deleteImg from '../../Assets/images/delete.png'
const UploadDocModal = (props) => {
    const dispatch = useDispatch()
    const [showImg, setshowImg] = useState(true)
    const [hideAddMore, sethideAddMore] = useState(true)
    const [countContainer, setcountContainer] = useState(1)
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
    const deleteImageHandler = () => {
        setshowImg(true)
        setFileValue('')
        setfile('')
    }

    const handleImageContainer = () => {
        setcountContainer(countContainer + 1)
    }

    useEffect(() => {
        if (countContainer == 2) {
            sethideAddMore(false)
        }
    }, [countContainer])


    const renderImageContainer = () => {
        let count = countContainer
        let uiItems = [];
        while (count--) {
            uiItems.push(
                <div className='content-box upload-content-bx'>
                    {showImg ? <div className='upload-block'>
                        <div className='upload-pin-blk'>
                            <input type="file" onChange={fileUploadHandler} />
                        </div>
                        <div className='upload-camera-blk'>
                            <input type="file" onChange={fileUploadHandler} />
                        </div>
                    </div>
                        :
                        <div>
                            <Image
                                src={URL.createObjectURL(fileValue)}
                                alt='icon'
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                            {/* <div className='image-button' onClick={fileUploadHandler}>
                                <div className='upload-pin'>
                                    <Image
                                        src={''}
                                    />
                                </div>
                                <div className='delete-img' onClick={deleteImageHandler}>
                                    <Image
                                        src={''}
                                    />
                                </div>
                            </div> */}
                        </div>
                    }
                </div>
            )
        }
        // console.log('uiItems', uiItems)
        return uiItems;

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


                        {renderImageContainer()}
                        {/* {hideAddMore && <div className='add-more-btn' onClick={handleImageContainer}>
                            Add more
                        </div>
                        } */}
                        <div className='dcmnt_upload_msg'>Upload .Pdf, .Eml, .Png & .Jpg only, Upto 10 MB</div>

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