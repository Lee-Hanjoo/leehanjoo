import React from 'react';

export default function WebButton(props) {
    const { title, link, onclick } = props
      return (
        <button 
            type="button"
            className="web_btn"
            onClick={()=>{window.open(`${link}`)}}
        >
            {title}
        </button>
      );
    }