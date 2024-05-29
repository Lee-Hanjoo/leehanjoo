const props = {
  size: String
}

export default function Box(props) {
  const {size} = props
    return (
      <div className={`box ${size}`}>
      </div>
    );
  }