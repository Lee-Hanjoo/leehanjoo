import { useState } from "react";

export default function Box(props) {
  const {size, children, title, color, height, onClick, href } = props
    return (
      <>
        <div 
          className={`box ${size && size} ${color}`} 
          style={{height: height}}
          onClick={onClick ? onClick : ()=>{window.location.href = `#${href}`}}
        >
          { title ? 
            <p className="title">{title}</p> : ''
          }
          {children}
        </div>
      </>
    );
  }