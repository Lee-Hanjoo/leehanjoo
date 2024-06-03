import { useState } from 'react';
import WebButton from './WebButton.js'

export default function WebProject(props) {
    const {sub, title, desc, lang, webLink, tabLink, moLink } = props

      return (
        <div className="web_project">
            <div className="txt">
                <p className="title"><span className="sub">{sub}</span>{title}</p>
                <span className="desc">{desc}<b className="lang">{lang}</b></span>
            </div>
            <div className="btn_wrap">
                {webLink ? 
                    <WebButton title="Web" link={webLink} /> : ''
                }
                {tabLink ? 
                    <WebButton title="Tablet" link={tabLink} /> : ''
                }
                {moLink ? 
                    <WebButton title="Mobile" link={moLink} /> : ''
                }
            </div>
        </div>
      );
    }