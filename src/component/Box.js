import { useState } from "react";

export default function Box(props) {
  const {size, children, title, color, height, href } = props
    return (
      <>
        {href ? 
          <div 
          className={`box ${size && size} ${color}`} 
          style={{height: height}}
          data-target={href ? href : ''}
          // onClick={()=>{window.location.href = `#${href}`}}
        >
          { title ? 
            <p className="title">{title}</p> : ''
          }
          {children}
        </div>
        : 
        <div 
            className={`box ${size && size} ${color}`} 
            style={{height: height}}
          >
            { title ? 
              <p className="title">{title}</p> : ''
            }
            {children}
          </div>
        }
      </>
    );
  }