import React from 'react'
import Image from 'next/image';
import close from "../../Assets/images/close.png"
import Button from '../Button';
const AccDocModal = (props) => {
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
                        <div className='content-box doc-content'>
                            {
                                props.children.map(data => (
                                    <div key={data.id} onClick={() => props.clickHandler(data.id)}>
                                        <div className='chk-list'>
                                            <input type="checkbox" id={data.id} />
                                            <label for={data.id}>{data.title}</label>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='btn-bx'>
                            <Button 
                            buttonText={'OK'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccDocModal