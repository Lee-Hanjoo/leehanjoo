import './App.css';
import './css/reset.css';
import './css/style.css';
import Box from './component/Box.js'

function App() {
    return (
        <main>
            <div className='visual'>
                <h1 className="logo">
                    <img src="./img/logo.png" alt="" />
                </h1>
                <ul className="star">
                    <li>
                        <img src="./img/star.svg" alt="" />
                    </li>
                    <li className="on">
                        <img src="./img/star.svg" alt="" />
                    </li>
                    <li>
                        1234
                        <img src="./img/star.svg" alt="" />
                    </li>
                </ul>
                <ul className="txt lang">
                    <li>Html5 Css3</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <p className="txt portfolio">Lee Han joo Portfolio</p>
                <p className="txt dev">Front-end.Dev</p>
                <ul className="txt name">
                    <li>L</li>
                    <li>H</li>
                    <li>J</li>
                </ul>
            </div>
            <div className="container">
                <Box size='medium'
                lt='Publishing'
                rtImg='./img/icon/just_l.svg'>
                </Box>
            </div>
        </main>
    );
}

export default App;
