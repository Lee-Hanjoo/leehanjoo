export default function Box(props) {
  const {size, children, lt, rt, rtImg, lb, lbImg, rb} = props
    return (
      <div className={`box ${size}`}>
        <div className={`${lt ? 'lt' : ''}`}>{lt}</div>
        <div className={`${rt ? 'rt' : ''}`}>
          { rtImg ? <img src={rtImg} alt="" /> : rt}
        </div>
        
        {children}
      </div>
    );
  }