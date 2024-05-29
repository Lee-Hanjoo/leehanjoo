import logo from './logo.svg';
import './App.css';
import './css/reset.css';
import './css/style.css';

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
        </main>
    );
}

export default App;
