import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
import arwImg from '../../Assets/images/more.png'
const AccPopUp = (props) => {
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
                        <div className='content-box'>
                            {
                                props.children.map(data => (
                                    <div className={`upl-doc-container upl-doc`}
                                        key={data.id} onClick={() => props.clickHandler(data.id)}>
                                        <div className='upl-heading'>{data.title}</div>
                                        <div className='upl-img'>
                                            <a className='upl-img-link'>
                                                <Image
                                                    src={arwImg}
                                                    alt='uplImg'
                                                />
                                            </a>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccPopUp