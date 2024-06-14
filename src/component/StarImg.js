export default function StarImg(props) {
  const { color } = props

    return (
      <>
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M240.758 6.10352e-05L239.242 6.10352e-05C229.532 127.648 127.648 229.532 0 239.242V240.758C127.648 250.468 229.532 352.352 239.242 480H240.758C250.468 352.352 352.352 250.468 480 240.758V239.242C352.352 229.532 250.468 127.648 240.758 6.10352e-05Z" fill={color}/>
        </svg>
      </>
    );
  }


