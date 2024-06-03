export default function CircleText(props) {
      return (
        <>
            <div className="circle_text">
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500" id="circle_text">
                    <defs>
                    <path d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250" id="CircleText">
                        <animateTransform attributeName="transform" begin="0s" dur="20s" type="rotate" from="0 250 250" to="360 250 250" repeatCount="indefinite" />
                    </path>
                    </defs>
                    <text dy="70" textLength="1160">
                        <textPath xlinkHref="#CircleText">Scroll to my project</textPath>
                    </text>
                </svg>
            </div>
        </>
      );
    }