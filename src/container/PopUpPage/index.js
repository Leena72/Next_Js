import React from 'react'
import close from "../../Assets/images/close.png"
import Image from 'next/image';
const PopUpPage = (props) => {

    const closeHandler=()=>{
        props.onClose();
    }
  return (
    <div class={`overlay ${props.addCss}`} >
    <div class="vrtclcntr_bx">
      <div class="vrtclcntr_bxinr">
        <div class="dcmnt_upload_popupinr">
          <div onClick={closeHandler} class="close_popup"><Image src={close} alt="cross" /></div>
          {props.removeHeader ? null : 
           <div class="hdng_bx">
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