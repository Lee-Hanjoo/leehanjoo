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
    
    // 680 아래로 리사이즈 비율
    useEffect(() => {
        const resize = () => {
          const width = window.innerWidth;
          const minWidth = 680;
          let body = document.getElementsByTagName('body')[0];
          if (width < minWidth) {
            body.style.zoom = width / minWidth;
          } else {
            body.style.zoom = 1;
          }
        };
    
        // 페이지 로드 후 첫 번째 zoom 조정
        resize();
        // resize 이벤트 리스너 등록
        window.addEventListener('resize', resize);
    
        // 컴포넌트 언마운트 시 이벤트 리스너 정리
        return () => {
          window.removeEventListener('resize', resize);
        };
      }, [])

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
                            <StarImg color={'#00FF00'} />
                        </li>
                        <li className="on">
                            <StarImg color={'#00FF00'} />
                        </li>
                        <li>
                            <StarImg color={'#00FF00'} />
                        </li>
                    </ul>
                    <ul className="txt lang">
                        <li>Vanilla JS</li>
                        <li>React Vue Next TS</li>
                        <li>Axios Zustand</li>
                    </ul>
                    <p className="txt portfolio">Portfolio</p>
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
                            lt='Personal Project'
                            lb="Front-end.Dev"
                            rtIcon="/assets/hanjoo.svg" />
                        </Box>
                        <Box 
                            size="small" 
                            color="white" 
                            height="290px"
                            href='pub'
                        >
                            <BoxContents 
                            lb={`Publishing <br class="pc_only"/>Work`}
                            rbIcon="/assets/icon/work.svg"
                            />
                        </Box>
                        <Box size="small" color="black" height="290px" href="introduce">
                            <BoxContents 
                            lb="About LEE"
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
                            title={`<strong>설계</strong>, <strong>디자인</strong>, <strong>개발</strong>까지\n기여도 <strong>100%</strong>의\n<strong>개인 프로젝트</strong>입니다.`}
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
                                desc={`팀장으로서 프로젝트를 총괄하며,\n메인, 예약하기를 작업하였습니다.`}
                                info="Vanilla JS, Swiper, Storage, Cookies"
                                webLink='https://lee-hanjoo.github.io/GreenDaon/index.html'
                                moLink='https://lee-hanjoo.github.io/GreenDaon/index.html'
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
                                desc={`영화 소개 프로젝트입니다.\n오픈 API를 활용하였습니다.`}
                                info="React, Axios, Zustand, Swiper"
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
                                desc={`뉴스 프로젝트입니다.\n오픈 API를 활용하였습니다.`}
                                info="Vue, Express, Axios, Swiper"
                                tabLink='https://leehanjoo-news.vercel.app/'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="Web Project [진행중...]"
                                title="Board"
                                desc={`게시판 프로젝트입니다.\n풀스택 웹 페이지입니다.`}
                                info={`Next, MongoDB, Ajax, Auth, JWT, AWS`}
                                webLink='https://board-ruddy-nu.vercel.app/'
                            />
                        </Box>
                        <Box
                            size="regular"
                            color="black"
                            height="460px"
                        >
                            <WebProject 
                                sub="APP Project [진행중...]"
                                title="PetFriend"
                                desc={`유기동물 프로젝트입니다.\n풀스택 어플리케이션입니다.`}
                                info={`React Native, Firebase, Axios, Zustand`}
                                webLink='https://github.com/Lee-Hanjoo/petfriend'
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
                                    <a href="https://hubteam.kr/" title="팀 허브디앤씨" target='_blank'>팀 허브디앤씨</a>
                                    <a href="https://www.mirapartners.im/" title="미라 파트너스" target='_blank'>미라 파트너스</a>
                                    <a href="http://www.salesmac.com/employee/login" title="새날 CRM" target='_blank'>새날 CRM</a>
                                    <a href="https://cedulearn.com/" title="쎄듀런" target='_blank'>쎄듀런</a>
                                    <a href="https://labex.kr/goods/goods_list.php" title="Labex" target='_blank'>Labex</a>
                                    <a href="https://www.bodychannel.co.kr/" title="바디채널">바디채널 관리자</a>
                                </div>
                        </Box>
                    </div>
                    <div className='techStack'>
                        <Box
                            size='medium'
                            color='sky'
                            height='385px'
                        >
                            <BoxContents 
                                lt='01.'
                                lb='Tech Stack'
                                rt='Front'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <p className='skills'>
                                HTML, CSS, SASS, JQuery,
                                <br />
                                Vanilla JS, Typescript
                                <br/>
                                React, React Native, Vue, Next
                            </p>
                        </Box>
                        <Box
                            size='medium'
                            color='brown'
                            height='385px'
                        >
                            <BoxContents 
                                lt='02.'
                                lb='Tech Stack'
                                rt='Back'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <p className='skills'>
                                Express, MongoDB
                            </p>
                        </Box>
                        <Box
                            size='medium'
                            color='deep_green'
                            height='385px'
                        >
                            <BoxContents 
                                lt='03.'
                                lb='Tech Stack'
                                rt='Async/Library'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <p className='skills'>
                                Ajax, Axios, Swiper,
                                <br />
                                Datepicker, Tui
                            </p>
                        </Box>
                        <Box
                            size='medium'
                            color='purple'
                            height='385px'
                        >
                            <BoxContents 
                                lt='04.'
                                lb='Tech Stack'
                                rt='Deploy/Cloud/State'
                                rbIcon="/assets/icon/link_arrow_white.svg"
                            />
                            <p className='skills'>
                                AWS, Vercel, Firebase,
                                <br />
                                Github, Zustand
                            </p>
                        </Box>
                    </div>
                    <div className='introduce' id="introduce">
                        <Box size='large' color='black' height="1200px" title="Let me introduce myself Let me introduce myself">
                            <p className='desc'>
                                이름은 <strong>이한주</strong>이다. <em>1993</em>년 <em>05</em>월 <em>05</em>일에 태어났다.<br />
                                취미와 특기는 <strong>음악</strong>이고, 시중에
                                <strong><em> 3</em>개</strong>의 <a href='https://vibe.naver.com/search?query=%EC%98%88%EB%AF%BC%ED%95%9C%EC%95%A0%EB%93%A4' target='_blank' style={{font:'inherit', textDecoration: 'underline'}}><strong>음반 발매</strong></a> 이력이 있다.<br />
                                또 다른 취미로는 <strong>게임</strong>하기를 좋아한다.<br /><strong>뜨개질</strong>, <strong>독서</strong>에도 흥미를 가지고 있으며, 주말에는 주로<br /><strong>배구</strong> 동호회에 나가며 열심히 체력을 기르고 있다.<br /><strong>조카 바보</strong>, <strong>귀여운 동물</strong>들을 좋아한다.
                            </p>
                            <CircleSkillWrap>
                                <CircleSkill skill='album_3.jpg' />
                                <CircleSkill skill='knitting.png' />
                                <CircleSkill skill='album_2.jpg' />
                                <CircleSkill skill='leehanjoo.png' />
                                <CircleSkill skill='volleyball.png' />
                            </CircleSkillWrap>
                            <CircleSkillWrap>
                                <CircleSkill skill='book.png' />
                                <CircleSkill skill='book.png' />
                                <CircleSkill skill='dog_cat.png' />
                                <CircleSkill skill='album_1.jpg' />
                            </CircleSkillWrap>
                        </Box>
                    </div>
                    <div className='contact' id="contact">
                        <Box 
                            size='large'
                            color='black'
                            height='740px'
                            title={`<strong>능동적</strong>으로 <br class='tab_only' /><strong>창의적인 문제 해결</strong>을 즐기며, <br class='tab_only' /><strong>지속적으로 기술을 탐구</strong>하는 <br class='tab_only' /><strong>밝은 성격</strong>의 개발자입니다.`}
                        >
                            <BoxContents 
                                lt='CONTACT ME'
                            />
                            <ul className='info'>
                                <li>
                                    <a href='mailto:gkswnehcl@gmail.com' target='_blank'>
                                        gkswnehcl@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a href='tel:010-5530-9355' target='_blank'>
                                        01055309355
                                    </a>
                                </li>
                                <li>
                                    <a href='/assets/download/[프론트엔드]_이한주_이력서.pdf' download>
                                        <img src='/assets/icon/download_file.svg' alt=''/>
                                        Resume
                                    </a>
                                </li>
                                <li>
                                    <a href='/assets/download/[프론트엔드]_이한주_포트폴리오_PPT.pdf' download>
                                        <img src='/assets/icon/download_file.svg' alt=''/>
                                        PPT
                                    </a>
                                </li>
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
