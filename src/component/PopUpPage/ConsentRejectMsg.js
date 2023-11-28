import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import Button from '../Button';
import Input from '../Input';
const ConsentRejectMsg = (props) => {
    const closeHandler = () => {
        props.onClose();
    }
    const changeHandler=(e)=>{
        let val=e.target.value
        props.changeHandler(val)
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
                            <h2>{props.text}</h2>
                        </div>
                        <div className='login-content'>
                            <Input 
                             type={'text'}
                             name={'msg'}
                             value={props.message}
                             changeHandler={changeHandler}
                            />
                        </div>
                        <div className='popUpBtn'>
                            <Button
                                className=''
                                clickHandler={props.btnHandler}
                                type='button'
                                buttonText={props.btnText}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConsentRejectMsg