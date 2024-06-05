import './App.css';
import './css/reset.css';
import './css/style.css';
import './css/media.css';
import Box from './component/Box.js'
import BoxContents from './component/BoxContents.js'
import CircleText from './component/CircleText.js'
import WebProject from './component/WebProject.js'
import CircleSkillWrap from './component/CircleSkillWrap.js';
import CircleSkill from './component/CircleSkill.js';
import Popup from './component/Popup.js';
import { useEffect, useRef, useState } from 'react';

function App() {
    const [popup, setPopup] = useState(0)
    
    // 팝업
    useEffect(()=>{
        const body = document.querySelector('body')
        if (popup) {
            body.classList.add('hold')
        } else {
            body.classList.remove('hold')
        } 
    },[popup])

    // visual > name - LHJ 이미지 랜덤 출력
    const [randomL, setRandomL] = useState(1);
    const [randomH, setRandomH] = useState(1);
    const [randomJ, setRandomJ] = useState(1);
    
    useEffect(()=>{
        setInterval(()=>{
            setRandomL(Math.floor(Math.random() * 10));
        }, 1000)
        setInterval(()=>{
            setRandomH(Math.floor(Math.random() * 10));
        }, 1500)
        setInterval(()=>{
            setRandomJ(Math.floor(Math.random() * 10));
        }, 1300)
    },[], 2000)

    // visual > lang - 언어 랜덤 출력
    // let arr = ['Html5', 'Css3', 'jQuery', 'Javascript', 'React', 'React Navtive', 'Ajax', 'TypeScript', 'Zustand', 'gitHub', 'Figma', '']

    // anchor smooth

    // start on
    return (
        <>
            <main>
                <div className="menu">
                    <a href="#contact" className='cotanct_btn'>
                        <span>Thx.</span>
                        <p>Contact Me</p>
                    </a>
                    <a href="#" className='top_btn'></a>
                </div>
                <div className='visual'>
                    <h1 className="logo"><img src='/assets/logo.png' alt='hanjoo logo' /></h1>
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
                        <li><img src={`/assets/icon/L_` + randomL + `.png`} alt=''/></li>
                        <li><img src={`/assets/icon/H_` + randomH + `.png`} alt=''/></li>
                        <li><img src={`/assets/icon/J_` + randomJ + `.png`} alt=''/></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="navi">
                        <Box 
                            size='medium' 
                            color='pink' 
                            height="590px" 
                            title="Hanatour CBNUH MyPortfolioSite Hanatour CBNUH"
                            href='project'
                        >
                            <BoxContents
                            lt='Publishing'
                            lb="Personal Project"
                            rtIcon="/assets/hanjoo.svg" />
                        </Box>
                        <Box 
                            size="small" 
                            color="white" 
                            height="290px"
                            href='pub'
                        >
                            <BoxContents 
                            lb="Work"
                            rbIcon="/assets/icon/work.svg"
                            />
                        </Box>
                        <Box size="small" color="black" height="290px" href="design">
                            <BoxContents 
                            lb="Design"
                            rbIcon="/assets/icon/design.svg"
                            />
                        </Box>
                        <Box size="medium" color="cyan" height="292px" href="contact">
                            <BoxContents 
                            lb="Contact Me"
                            rbIcon="/assets/icon/contact.svg"
                            />
                        </Box>
                    </div>
                    <div className="project" id="project">
                        <Box 
                            size="large"
                            color='black' 
                            height="768px" 
                            title={`개인 작업물입니다.\n<strong>설계</strong>, <strong>디자인</strong>, <strong>코딩</strong>까지\n<strong>기여도 100%</strong> 작업물입니다.\n뭐라고 적을까요`}
                        >
                            <BoxContents 
                                lt="PERSONAL PROJECT"
                            />
                            <CircleText>Scroll to check my project</CircleText>
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web renewal"
                                title="HanaTour"
                                desc="적응형 웹 사이트 리뉴얼"
                                webLink='https://www.naver.com'
                                moLink='https://www.daum.net'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web renewal"
                                title="CBNUH"
                                desc="반응형 웹 사이트 리뉴얼"
                                webLink='https://www.nate.com'
                                tabLink='https://www.youtube.com'
                                moLink='https://www.google.com'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Portfolio"
                                title="MyPortfolio"
                                desc="개인 포트폴리오 사이트"
                                webLink='https://www.nate.com'
                            />
                        </Box>
                    </div>
                    <div className='pub' id="pub">
                        <Box
                            size="large"
                            color="white"
                            height="585px"
                            title="실제 노출되고있는 <strong>실무 프로젝트</strong> 입니다."
                        >
                            <BoxContents
                                lt='00.'
                                lb='Work'
                                rt='Publishing'
                                rbIcon="/assets/icon/link_arrow_black.svg"
                            />
                                <div className='link_box'>
                                    <a href="https://sokorea.or.kr/" title="SOK" target='_blank'>SOK</a>
                                    <a href="https://birkmankorea.co.kr/" title="Birkman" target='_blank'>Birkman</a>
                                    <a href="https://icomes.or.kr/" title="ICOMES2024" target='_blank'>ICOMES2024</a>
                                    <a href="http://teamhubdnc.com/" title="팀 허브디앤씨" target='_blank'>팀 허브디앤씨</a>
                                    <a href="https://www.mirapartners.im/" title="미라 파트너스" target='_blank'>미라 파트너스</a>
                                    <a href="http://www.salesmac.com/employee/login" title="새날 CRM" target='_blank'>새날 CRM</a>
                                    <a href="https://cedulearn.com/" title="쎄듀런" target='_blank'>쎄듀런</a>
                                    <a href="https://labex.kr/goods/goods_list.php" title="Labex" target='_blank'>Labex</a>
                                    <a href="" title="바디채널">바디채널 관리자</a>
                                </div>
                        </Box>
                    </div>
                    <div className='design' id="design">
                        <Box
                            size='medium'
                            color='sky'
                            height='385px'
                            onClick={()=>{
                                setPopup(1)
                            }}
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
                            height='385px'
                            onClick={()=>{
                                setPopup(2)
                            }}
                        >
                            <BoxContents 
                                lt='02.'
                                lb='LOTTE'
                                rt='Design'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <img className="logo_img" src='/assets/icon/lotte.svg' alt="LOTTE logo"/>
                        </Box>
                        <Box
                            size='medium'
                            color='deep_green'
                            height='385px'
                            onClick={()=>{
                                setPopup(3)
                            }}
                        >
                            <BoxContents 
                                lt='03.'
                                lb='ROHSEOUL'
                                rt='Design'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <img className="logo_img" src='/assets/icon/roh.svg' alt="ROHSEOUL logo"/>
                        </Box>
                        <Box
                            size='medium'
                            color='purple'
                            height='385px'
                            onClick={()=>{
                                setPopup(4)
                            }}
                        >
                            <BoxContents 
                                lt='04.'
                                lb='BYHEYDEY'
                                rt='Design'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <img className="logo_img" src='/assets/icon/byheydey.svg' alt="LOTTE logo"/>
                        </Box>
                    </div>
                    <div className='introduce'>
                        <Box size='large' color='black' height="1200px" title="Hanatour CBNUH MyPortfolioSite Hanatour CBNUH">
                            <p className='desc'>
                                이름은 <strong>이한주</strong>이다. <em>1993</em>년 <em>05</em>월 <em>05</em>일에 태어났다.<br />
                                <em>2020</em>년 <em>02</em>월 이젠 아카데미에서 <strong>웹 퍼블리셔</strong> 과정을 수료,<br />
                                <em>2023</em>년 <em>02</em>월 메가 스터디에서 <strong>웹 퍼블리셔</strong> 과정을 수료,<br />
                                <em>2024</em>년 <em>11</em>월 그린 컴퓨터 아카데미에서 <strong>프론트 엔드</strong> 과정을 수료하였다.<br />
                                <strong>웹 디자이너로 <em>2</em>년</strong>간, <strong>웹 퍼블리셔로 <em>1</em>년</strong>간 근무 하였으며,<br />
                                <strong><em>4</em>개의 음반 발매</strong> 이력이 있다.
                            </p>
                            <CircleSkillWrap>
                                <CircleSkill skill='html5' />
                                <CircleSkill skill='css3' />
                                <CircleSkill skill='js' />
                                <CircleSkill skill='leehanjoo' />
                                <CircleSkill skill='react' />
                            </CircleSkillWrap>
                            <CircleSkillWrap>
                                <CircleSkill skill='Ajax' />
                                <CircleSkill skill='sensitive_people' />
                                <CircleSkill skill='ts' />
                                <CircleSkill skill='jquery' />
                            </CircleSkillWrap>
                        </Box>
                    </div>
                    <div className='contact' id="contact">
                        <Box 
                            size='large'
                            color='black'
                            height='922px'
                            title={`<strong>능동적</strong>이고 <strong>즐거움을 추구</strong>하는 개발자\n<strong>원활한 커뮤니케이션 능력</strong>을 겸비한 인재\n어쩌고저쩌고\n안녕하세요 반갑습니다!`}
                        >
                            <BoxContents 
                                lt='CONTACT ME'
                            />
                            <ul className='info'>
                                <li><a href='mailto:gkswnehcl@gmail.com' target='_blank'>gkswnehcl@gmail.com</a></li>
                                <li><a href='tel:010-5530-9355' target='_blank'>010 5530 9355</a></li>
                                <li><a href='https://www.melon.com/artist/song.htm?artistId=859237' target='_blank'>@Sensitive People</a></li>
                            </ul>
                            <CircleText>Sensitive People</CircleText>
                        </Box>
                    </div>
                </div>
                <div className='footer'>
                    <h1 className='logo'><img src='/assets/icon/just_l.svg' alt='leehanjoo logo' /></h1>
                    <p>Copyright @2023 Leehanjoo</p>
                    <p>LEEHANJOO Portfolio.</p>
                </div>
            </main>
            {popup ? <div className='pop_dim' onClick={()=>{setPopup(undefined)}}></div> : ''}
            {popup ? 
                <Popup setPopup={setPopup}>
                    {popup === 1 &&
                        <img src='/assets/hanssem.jpeg' alt='hanssem work'/>
                    }
                    {popup === 2 &&
                        <img src='/assets/lotte.jpeg' alt='lotte work'/>
                    }
                    {popup === 3 &&
                        <img src='/assets/rohseoul.jpeg' alt='roh work'/>
                    }
                    {popup === 4 &&
                        <img src='/assets/byheydey.jpeg' alt='byheydey work'/>
                    }
                </Popup> 
                : 
                ''
            }
        </>
    );
}

export default App;
