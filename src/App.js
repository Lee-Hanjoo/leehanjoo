import './App.css';
import './css/reset.css';
import './css/style.css';
import Box from './component/Box.js'
import BoxContents from './component/BoxContents.js'
import CircleText from './component/CircleText.js'

function App() {
    return (
        <main>
            <div className="contact_menu">
                <a href="">
                    <span>Thx.</span>
                    <p>Contact Me</p>
                </a>
            </div>
            <div className='visual'>
                <h1 className="logo">한주</h1>
                <ul className="star">
                    <li>
                        <img src="/assets/star.svg" alt="" />
                    </li>
                    <li className="on">
                        <img src="/assets/star.svg" alt="" />
                    </li>
                    <li>
                        <img src="/assets/star.svg" alt="" />
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
                <div className="navi">
                    <Box size='medium' color='pink' height="590" title="Hanatour CBNUH MyPortfolioSite Hanatour CBNUH">
                        <BoxContents
                        lt='Publishing'
                        lb="Project"
                        rtIcon="/assets/icon/just_l.svg" />
                    </Box>
                    <div className="box_wrap">
                        <Box size="small" color="white" height="290">
                            <BoxContents 
                            lb="React"
                            rbIcon="/assets/icon/react.svg"
                            />
                        </Box>
                        <Box size="small" color="black" height="290">
                            <BoxContents 
                            lb="Design"
                            rbIcon="/assets/icon/design.svg"
                            />
                        </Box>
                        <Box size="medium" color="cyan" height="290">
                            <BoxContents 
                            lb="Contact Me"
                            rbIcon="/assets/icon/contact.svg"
                            />
                        </Box>
                    </div>
                </div>
                <div className="project">
                    <Box 
                        size="large"
                        color='black' 
                        height="768" 
                        title={`Through web Publishing works,\n You can check\n my design performance\n and how to write code.`}
                    >
                        <BoxContents 
                        lt="WEB PROJECT"
                        />
                        <CircleText>Scroll to check my project</CircleText>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default App;
