import { useState } from "react";

export default function Box(props) {
  const {size, children, title, color, height, onClick } = props
    return (
      <>
        <div 
          className={`box ${size && size} ${color}`} 
          style={{height: height}}
          onClick={onClick}
        >
          { title ? 
            <p className="title">{title}</p> : ''
          }
          {children}
        </div>
      </>
    );
  }