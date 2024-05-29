import './App.css';
import './css/reset.css';
import './css/style.css';
import Box from './component/Box.js'

function App() {
    return (
        <main>
            <div className='visual'>
                <ul class="star">
                    <li>
                        <img src="./img/star.svg" alt="" />
                    </li>
                    <li class="on">
                        <img src="./img/star.svg" alt="" />
                    </li>
                    <li>
                        1234
                        <img src="./img/star.svg" alt="" />
                    </li>
                </ul>
                <ul class="txt lang">
                    <li>Html5 Css3</li>
                    <li>Javascript</li>
                    <li>React</li>
                </ul>
                <p class="txt portfolio">Lee Han joo Portfolio</p>
                <p class="txt dev">Front-end.Dev</p>
                <ul class="txt name">
                    <li>L</li>
                    <li>H</li>
                    <li>J</li>
                </ul>
            </div>
            <div class="container">
                <Box size={1234}></Box>
            </div>
        </main>
    );
}

export default App;
