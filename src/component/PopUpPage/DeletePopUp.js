import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../Button';
const DeletePopUpPage = (props) => {

    const closeHandler=()=>{
        props.onClose();
    }
  return (
    <div 
    className={`overlay ${props.addCss}`} 
    >
        <div className="vrtclcntr_bx">
            <div className="vrtclcntr_bxinr">
                <div className="dcmnt_upload_popupinr">
                    <div onClick={closeHandler} className="close_popup"><Image src={close} alt="cross" /></div>

                    <div className="hdng_bx">
                        <h2>Are you sure you want to delete</h2>
                    </div>
                    <div className='popUpBtn'>
                        <Button
                            className=''
                            clickHandler={closeHandler}
                            type='button'
                            buttonText={'Cancel'}
                        />
                        <Button
                            className=''
                            clickHandler={props.deleteHandler}
                            type='button'
                            buttonText={'OK'}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePopUpPage