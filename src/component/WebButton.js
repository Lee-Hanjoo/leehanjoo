import React from 'react';

export default function WebButton(props) {
    const { title, link, width } = props
      return (
        <button 
            type="button"
            className="web_btn"
            onClick={()=>{window.open(`${link}`, `_blank`, `width=${width}, height=1080`)}}
        >
            {title}
        </button>
      );
    }