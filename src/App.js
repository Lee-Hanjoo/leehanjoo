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
import StarImg from './component/StarImg.js';
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
    const [randomL, setRandomL] = useState(0);
    const [randomH, setRandomH] = useState(0);
    const [randomJ, setRandomJ] = useState(0);
    
    useEffect(()=>{
        const intervalL = setInterval(()=>{
            setRandomL(Math.floor(Math.random() * 10));
        }, 1000)
        const intervalH = setInterval(()=>{
            setRandomH(Math.floor(Math.random() * 10));
        }, 1500)
        const intervalJ = setInterval(()=>{
            setRandomJ(Math.floor(Math.random() * 10));
        }, 1300)
        return () => {
        clearInterval(intervalL);
        clearInterval(intervalH);
        clearInterval(intervalJ);
        };
    },[], 1000)
    
    const colors = ["#00FF00", "#FF008A", "#00FFFF", "#CCFF00", "#FF005C", "#FF9900", "#5200FF", "#CC00FF", "#FF0000", "#00FFC2", "#FFE600", "#0500FF"]

    // 680 아래로 리사이즈 비율
    useEffect(()=>{
        const resize = () => {
            var minWidth = 680;
            var body = document.getElementsByTagName('body')[0];
            if (window.innerWidth < minWidth) { body.style.zoom = (window.innerWidth / minWidth); }
            else body.style.zoom = 1;
        }
        window.addEventListener('resize', resize);
    },[])
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
                            <StarImg color={colors[0]} />
                        </li>
                        <li className="on">
                            <StarImg color={colors[0]} />
                        </li>
                        <li>
                            <StarImg color={colors[0]} />
                        </li>
                    </ul>
                    <ul className="txt lang">
                        <li>Html5 Css3</li>
                        <li>Javascript</li>
                        <li>React</li>
                        {/* <li>Html5, Css3, Sass, jQuery, WebRTC</li>
                        <li>Javascript, React, Ajax, Next.js</li>
                        <li>React Navtive, TypeScript, Bootstrap</li>
                        <li>Zustand, gitHub, Node.js, Figma</li>
                        <li>Pug, WebSockets, SocketIO, Vercel, MySQL</li> */}
                    </ul>
                    <p className="txt portfolio">Lee Han joo Portfolio</p>
                    <p className="txt dev">Front-end.Dev</p>
                    <ul className="txt name">
                        <li><img src={`/assets/icon/L_` + randomL + `.png`} alt='L'/></li>
                        <li><img src={`/assets/icon/H_` + randomH + `.png`} alt='H'/></li>
                        <li><img src={`/assets/icon/J_` + randomJ + `.png`} alt='J'/></li>
                    </ul>
                </div>
                <div className="container">
                    <div className="navi">
                        <Box 
                            size='medium' 
                            color='pink' 
                            height="590px" 
                            title="dAon CINEMA News Board PetFriend dAon CINEMA News Board PetFriend"
                            href='project'
                        >
                            <BoxContents
                            lt='Personal'
                            lb="Project"
                            rtIcon="/assets/hanjoo.svg" />
                        </Box>
                        <Box 
                            size="small" 
                            color="white" 
                            height="290px"
                            href='pub'
                        >
                            <BoxContents 
                            lb="Publishing"
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
                            title={`<strong>설계</strong>, <strong>디자인</strong>, <strong>개발</strong> 모두\n 직접 진행한 <strong>개인 프로젝트</strong>입니다.\n<strong style="display:inline-block;margin-top:20px">Js</strong>, <strong>React</strong>, <strong>오픈 API</strong>를\n활용하였습니다.`}
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
                                sub="Web Project"
                                title="dAon"
                                desc="다온펜션 리뉴얼"
                                webLink='https://qodql.github.io/daon/index.html'
                                moLink='https://qodql.github.io/daon/index.html'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web Project"
                                title="CINEMA"
                                desc="영화 소개 프로젝트"
                                webLink='https://lee-hanjoo.github.io/GreenMovies/'
                                moLink='https://lee-hanjoo.github.io/GreenMovies/'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web Project"
                                title="News"
                                desc="뉴스 프로젝트"
                                tabLink='https://leehanjoo-news.vercel.app/'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web Project"
                                title="Board"
                                desc="게시판 프로젝트"
                                webLink='http://leehanjoo3.dothome.co.kr/'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="APP Project"
                                title="PetFriend"
                                desc="React Native를 유기동물 앱"
                                webLink=''
                            />
                        </Box>
                    </div>
                    <div className='pub' id="pub">
                        <Box
                            size="large"
                            color="white"
                            height="585px"
                            title="실제 노출되었던 <br class='mb_only' /><strong>실무 프로젝트</strong> 입니다."
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
                        <Box size='large' color='black' height="1200px" title="Let me introduce myself Let me introduce myself">
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
                            title={`<strong>능동적</strong>이고 <strong>즐거움을 추구</strong>\n<strong>원활한 커뮤니케이션 능력</strong>\n어쩌고저쩌고\n안녕하세요 반갑습니다!`}
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
