import './App.css';
import './css/reset.css';
import './css/style.css';
import Box from './component/Box.js'
import BoxContents from './component/BoxContents.js'
import CircleText from './component/CircleText.js'
import WebProject from './component/WebProject.js'
import WebButton from './component/WebButton.js'

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
                    <Box
                        size="regular"
                        color="black"
                        height="487"
                    >
                        <WebProject 
                            sub="Web renewal"
                            title="HanaTour"
                            desc="하나투어 적응형 웹 사이트 리뉴얼"
                            lang="Html5, Css3, jQuery, Ajax, Figma"
                            webLink='https://www.naver.com'
                            moLink='https://www.daum.net'
                        />
                    </Box>
                    <Box
                        size="regular"
                        color="black"
                        height="487"
                    >
                        <WebProject 
                            sub="Web renewal"
                            title="CBNUH"
                            desc="충북대학교병원 반응형 웹 사이트 리뉴얼"
                            lang="Html5, Css3, JS, jQuery, Plug-in, Figma"
                            webLink='https://www.nate.com'
                            tabLink='https://www.youtube.com'
                            moLink='https://www.google.com'
                        />
                    </Box>
                    <Box
                        size="regular"
                        color="black"
                        height="487"
                    >
                        <WebProject 
                            sub="Web renewal"
                            title="MyPortfolio"
                            desc="개인 포트폴리오 사이트"
                            lang="Html5, Css3, React, JS, Figma"
                            webLink='https://www.nate.com'
                        />
                    </Box>
                </div>
                <div className='pub'>
                    <Box
                        size="large"
                        color="white"
                        height="585"
                    >
                        <BoxContents
                            lt='00.'
                            lb='Working'
                            rt='Publishing'
                            rbIcon="/assets/icon/link_arrow_black.svg"
                        />
                            <div className='link_box'>
                                <a href="https://sokorea.or.kr/" title="SOK" target='_blank'>SOK</a>
                                <a href="https://birkmankorea.co.kr/" title="Birkman" target='_blank'>Birkman</a>
                                <a href="https://icomes.or.kr/" title="ICOMES2024" target='_blank'>ICOMES2024</a>
                                <a href="http://www.salesmac.com/employee/login" title="새날 CRM" target='_blank'>새날 CRM</a>
                                <a href="https://cedulearn.com/" title="쎄듀런" target='_blank'>쎄듀런</a>
                                <a href="http://teamhubdnc.com/" title="팀 허브디앤씨" target='_blank'>팀 허브디앤씨</a>
                                <a href="https://www.mirapartners.im/" title="미라 파트너스" target='_blank'>미라 파트너스</a>
                                <a href="https://labex.kr/goods/goods_list.php" title="Labex" target='_blank'>Labex</a>
                                <a href="" title="바디채널">바디채널 관리자</a>
                            </div>
                    </Box>
                </div>
                <div className='design'>
                    <Box
                        size='medium'
                        color='sky'
                        height='385'
                    >
                        <BoxContents 
                            lt='01.'
                            lb='HANSSEM'
                            rt='Design'
                            rbIcon="/assets/icon/link_arrow_white.svg"
                        />
                        <img className="logo_img" src='/assets/icon/hanssem.svg' alt="hanssem logo"/>
                    </Box>
                    <Box
                        size='medium'
                        color='brown'
                        height='385'
                    >
                        <BoxContents 
                            lt='02.'
                            lb='BYHEYDEY'
                            rt='Design'
                            rbIcon="/assets/icon/link_arrow_white.svg"
                        />
                        <img className="logo_img" src='/assets/icon/byheydey.svg' alt="byheydey logo"/>
                    </Box>
                </div>
            </div>
        </main>
    );
}

export default App;
