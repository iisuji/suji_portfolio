import { useState } from "react";

const Home = (props) => {
    const [data, setData] = useState({
        img_about:'macbook_img.jpg',
        img_work:'bank_title.jpg'
    });

    return(
        <div>
            <div className="wrap">
                <header>
                    <div className="header_inner" data-aos="fade-up-left" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                        <div className="side">
                            <span className="span1">Park Suji's Web Portfolio</span>
                            <span>/ 2025</span>
                        </div>
                        <h1>I am<br/><span>Web</span><br/>Developer</h1>
                    </div>
                </header>
            </div>
        <section>
            <div className="section_inner">
                <div className="wrap">
                    <article className="work">
                        <div className="art_inner">
                            <h2>My Work</h2>
                            <ul>
                                <li className="work_all" data-aos="zoom-in-up" offset="100" delay="2000" duration="2000" data-aos-easing="ease-out-back">
                                    <a href="https://drive.google.com/file/d/14_WL_ebHgU_3DHB0dEun-j2lSDQrjvo4/view?usp=drive_link">
                                    <article className="li_inner" data="p4">
                                        <div className="work_img">
                                            <img src={`/imgs/${data.img_work}`} alt="개발 포트폴리오"/>
                                        </div>
                                        <div className="work_cont">
                                            <h4>Prestige<br/>스마트 호텔 통합 운영 및 주차 관제</h4>
                                            <p>시스템 연동과 자동화를 통해 호텔 운영의 효율성을 극대화하고 고객 편의를 향상시키는 스마트 호텔 시스템입니다.
주차 관제 시스템을 IoT로 구축하여 예약과 연동함으로써 차량 예약 고객의 입·출차 현황을 실시간으로 관리할 수 있습니다. 또한, 예약, 룸 서비스, 하우스키핑 등 다양한 시스템을 통합하여 관리자는 업무를 더욱 효율적으로 처리할 수 있으며, 고객은 보다 편리한 서비스를 경험할 수 있습니다.</p>
                                        </div>
                                    </article>
                                    </a>
                                </li>
                                            
                                <li className="work_all" data-aos="zoom-in-up" offset="100" delay="2000" duration="2000" data-aos-easing="ease-out-back">
                                    <a href="https://drive.google.com/file/d/1M_I_toqGX2nlUcSPOEjNDnDb2g3WoX1U/view?usp=drive_link">
                                    <article className="li_inner" data="p8">
                                        <div className="work_img">
                                            <img src={`/imgs/${data.img_work}`} alt="콘텐츠 디자인 포트폴리오"/>
                                        </div>
                                        <div className="work_cont">
                                            <h4>People Wing<br/>인사관리 프로그램</h4>
                                            <p>소규모 회사들에게 인사 관리 기능을 제공하는 것을 목적으로 한 프로젝트로 회사-부서-사원 구조의 회사 관리자, 사원 역할에 따라 맞춤형 기능을 제공합니다.
관리자는 부서, 사원, 급여, 근무제, 결재 문서 등을 설정하고, 사원은 설정된 환경을 바탕으로 사원 정보, 급여 명세 이력, 결재 문서, 출근 이력 등을 열람하고 처리할 수 있습니다.</p>
                                        </div>
                                    </article>
                                    </a>
                                </li>

                                <li className="work_all" data-aos="zoom-in-up" offset="100" delay="2000" duration="2000" data-aos-easing="ease-out-back">
                                    <a href="https://drive.google.com/file/d/1F1nEkZPUNiDbzy2nFXtgmXN5YKULqEjQ/view?usp=sharing">
                                    <article className="li_inner" data="p8">
                                        <div className="work_img">
                                            <img src={`/imgs/${data.img_work}`} alt="콘텐츠 디자인 포트폴리오"/>
                                        </div>
                                        <div className="work_cont">
                                            <h4>콘텐츠 디자인 | Promotional Banner</h4>
                                            <p>쇼핑몰의 프로모션 배너 / 상세페이지 디자인입니다.</p>
                                        </div>
                                    </article>
                                    </a>
                                </li>
                             
                            </ul>
                        </div>
                    </article>
                    <article className="about">
                        <div className="art_inner">
                            <h2>ABOUT</h2>
                            <div className="about_1" data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                                <div>
                                    <h1>You can<br/>see<br/>as much as<br/>you know</h1>
                                    <p>If you love it, you know it, you see it, you see, it's not the same as before.</p>
                                    <p>사랑하면 알게되고 알면 보이나니, 그때 보이는 것은 전과 같지 않으리라.</p>
                                </div>
                            </div>
                            <div className="about_2" data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                                <div className="img_wrap">
                                    <img src={`/imgs/${data.img_about}`} alt="컴퓨터 작업 이미지"/>
                                </div>
                                <p>웹에 대해 알게된 후에,웹은 서핑하도록 단순히 꾸며놓은 곳이 아닌,<br/>여러가지 언어로 사용자와 그들의 편의를 고려한<br/>잘 짜여진 하나의 세계라고 여기게 되었습니다. <br/>웹 세상에 더 깊이 빠져서 여행하는 개발자가 되고 싶습니다.</p>
                                <p>남들보다 더 잘하려고 고민하는 것이 아니라, <br/>‘지금의 나’보다 더 나아지려고 노력하고 기술을 향상시키기 위해 애쓰는<br/> 개발자로 성장하겠습니다.</p>
                            </div>
                        </div>
                    </article>
                </div>

                <article className="profile">
                    <div className="art_inner wrap">
                        <h2>PROFILE</h2>
                        <ul data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                            <li>Name / <span>박수지</span></li>
                            <li>Birth / <span>1988.02.05</span></li>
                            <li>Adress / <span>서울시 서대문구 홍은동</span></li>
                            <li>Course of Study /<br/>
                                <span>24.08~25.03 무중단 서비스를 위한 클라우드 기반 자바 개발자 과정 (프론트&백엔드 풀스택 개발 과정)</span><br/>
                                <span>19.10~19.11 UI/UX 프로페셔널 과정 수료</span><br/>
                                <span>19.09~19.09 황금비율 웹디자인 과정 수료</span><br/>
                                <span>16.11~17.03 스마트기기 UX &amp; UI 디자인(디지털앱, 웹디자인) 양성과정 수료</span>
                            </li>
                            <li>Certificate / <span>SQL개발자(SQLD), 컴퓨터그래픽스운용기능사, 웹디자인기능사, 전자출판기능사, 컴퓨터활용능력2급</span>
                            </li>
                        </ul>
                    </div>
                </article>

                <div className="wrap">
                    <article className="skill">
                        <div className="art_inner">
                            <h2>SKILL</h2>
                            <ul data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                                <li>JAVA / SPRINGBOOT</li>
                                <li>MySQL / ORACLE</li>
                                <li>REACT / JAVASCRIPT / HTML5 / SCSS</li>
                                <li>ADOBE PHOTOSHOP</li>
                                <li>ADOBE ILLUSTRATOR</li>
                                <li>FIGMA</li>
                            </ul>
                        </div>
                    </article>
                    {/* <article className="hobby">
                        <div className="art_inner">
                            <h2>HOBBY</h2>
                            <ul data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                                <li>DRAWING</li>
                                <li>SEE A MUSICAL</li>
                                <li>CAKE TOPPER</li>
                            </ul>   
                        </div>
                    </article> */}
                    <article className="contact">
                        <div className="art_inner">
                            <h2>CONTACT</h2>
                            <div className="contact_bg" data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                                <p>포트폴리오에 관심이 있으신 분은<br/>아래의 E-mail로 언제든지 연락바랍니다</p>
                            </div>
                            <div>
                                <span>E-mail.</span>
                                <span className="mail" data-aos="fade-up" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">iisuji25@gmail.com</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <footer className="foot">
            <div className="foot_inner" data-aos="fade-up-right" offset="100" delay="3000" duration="3000" data-aos-easing="ease-out-back">
                <p>Copyright &copy; 2025 Park suji's Web Portfolio.</p>
            </div>
        </footer>
    </div>
    )
}

export default Home; 