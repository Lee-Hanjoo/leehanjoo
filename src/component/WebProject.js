import { useState } from 'react';
import WebButton from './WebButton.js'

export default function WebProject(props) {
    const {sub, title, desc, webLink, tabLink, moLink, info } = props
    let data = desc;
    let data2 = info;

      return (
        <div className="web_project">
            <div className="txt">
                <p className="title"><span className="sub">{sub}</span>{title}</p>
                <p className="desc" dangerouslySetInnerHTML={{__html: data}}></p>
                <p className="info" dangerouslySetInnerHTML={{__html: data2}}></p>
            </div>
            <div className="btn_wrap">
                {webLink ? 
                    <WebButton title="PC" link={webLink} width={1920}/> : ''
                }
                {tabLink ? 
                    <WebButton title="TAB" link={tabLink} width={1023}/> : ''
                }
                {moLink ? 
                    <WebButton title="MB" link={moLink} width={768}/> : ''
                }
            </div>
        </div>
      );
    }