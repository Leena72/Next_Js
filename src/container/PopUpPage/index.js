import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
const PopUpPage = (props) => {

    const closeHandler=()=>{
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
              <h2>{props.heading?props.heading:null }</h2>
           </div>
          }  
             <div className='content-box'>{props.children}</div> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopUpPage