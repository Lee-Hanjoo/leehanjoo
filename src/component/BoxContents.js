export default function BoxContents(props) {
    const {size, children, lt, rt, lb, rb, rtIcon, rbIcon} = props
    const data = lb;
      return (
        <div className={`box_contents`}>
          { lt && 
            <div className={`lt`}><p>{lt}</p></div>
          }
          { (rt || rtIcon) &&
            <div className={`rt`}>
              { rtIcon ? <img src={rtIcon} alt="" /> : <p>{rt}</p>}
            </div>
          }
          { lb &&
          <div className={`lb`}>
            <p dangerouslySetInnerHTML={{__html: data}}></p>
          </div>
          }
          { (rb || rbIcon) &&
            <div className={`rb`}>
              { rbIcon ? <img src={rbIcon} alt="" /> : <p>{rb}</p>}
            </div>
          }
        </div>
      );
    }