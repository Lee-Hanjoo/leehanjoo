import { useState } from "react";

export default function Popup(props) {
  const { children } = props
    return (
      <>
        <div className='popup'>
            <div className="x_btn" onClick={()=>{props.setPopup(false)}}></div>
            <div className='pop_inner'>
                {children}
            </div>
        </div>
      </>
    );
  }