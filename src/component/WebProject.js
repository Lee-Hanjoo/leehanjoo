import { useState } from 'react';
import WebButton from './WebButton.js'

export default function WebProject(props) {
    const {sub, title, desc, webLink, tabLink, moLink } = props

      return (
        <div className="web_project">
            <div className="txt">
                <p className="title"><span className="sub">{sub}</span>{title}</p>
                <span className="desc">{desc}</span>
            </div>
            <div className="btn_wrap">
                {webLink ? 
                    <WebButton title="PC" link={webLink} /> : ''
                }
                {tabLink ? 
                    <WebButton title="TAB" link={tabLink} /> : ''
                }
                {moLink ? 
                    <WebButton title="MB" link={moLink} /> : ''
                }
            </div>
        </div>
      );
    }