export default function Box(props) {
  const {size, children, title, color, height } = props
    return (
      <div className={`box ${size ? size : ''} ${color}`} style={{height: height}}>
        { title ? 
          <p className="title">{title}</p> : ''
        }
        {children}
      </div>
    );
  }