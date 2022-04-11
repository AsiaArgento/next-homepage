import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import InfoSection from '../components/InfoSection'
import Image from 'next/image'
// import teslaLogo from '../public/teslaLogo.png'
// import amazonLogo from '../public/amazonLogo.png'
import kodiakLogo from '../public/kodiakLogo.webp'
import replLogo from '../public/replLogo.png'
import scratchLogo from '../public/scratchLogo.png'
import offenLogo from '../public/offenLogo.jpg'
import centroLogo from '../public/centroLogo.jpg'
import anaLogo from '../public/anaLogo.jpg'
import coopsLogo from '../public/coopsLogo.png'
import balfourLogo from '../public/balfourLogo.png'
import insa from '../public/insa.jpg'
import portfolioLogo from '../public/portfolioLogo.jpeg'
import { FaArrowRight } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="My name is Matthew Moncada. I am a web developer living in
        San Antonio, Texas. This is my portfolio of work over the years that I have been able to include." />
        <meta name="keywords" content="Matthew Marion Moncada, Frontend Developer, Web Developer, Business Card, WordPress, Full-stack, San Antonio, Texas, Portfolio" />
        <meta name="author" content="Matthew Marion Moncada"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <InfoSection />
        <div className={styles.contentSection}>
          <div className={styles.scrollSection}>
            <div className={styles.portfolioSection}>
                <h1>Latest Works ( 2017 - Current )</h1>
                <div className={styles.projectSection}>
                {/* Projects Section */}
                    <a href="https://balfourcare.com/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={balfourLogo} alt="Balfour Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A website I built in a WordPress theme using PHP.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Balfour | Type: WordPress | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Balfour Care Living
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://insa.com/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={insa} alt="Insa Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A website I built along a team in WordPress built with custom fields, 
                                    Vue Components.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: INSA | Type: WordPress | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    INSA
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    {/* <a href="https://mystifying-kirch-2e0d64.netlify.app/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={teslaLogo} alt="Tesla Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A simple frontend of the Tesla website using React,
                                    Redux, Styled Components, MaterialUI, and React Reveal.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: React | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Tesla Website Clone
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a> */}
                    {/* <a href="https://clone-2e37c.firebaseapp.com/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={amazonLogo} alt="Amazon Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A simple frontend of the Amazon website with login, cart, and checkout functionality
                                    using Firebase. Built with React, MaterialUI, StripeAPI.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: React | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Amazon Website Clone
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a> */}
                    <a href="https://kodiakcakes.com/blogs/athletes" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={kodiakLogo} alt="Kodiak Cakes Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Developed the Athletes blog for a client Kodiak Cakes. Built in Shopify.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Kodiak Cakes | Type: Shopify | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Athletes Blog
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://replit.com/@MattMoncada/Space-Adventure" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={replLogo} alt="Replit Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Explore different galaxies and fight monsters all while upgrading your character!
                                    Built with Python3 and hosted on Repl.it
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: Python | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Space Adventure Game
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://replit.com/@MattMoncada/Text-Adventure-Game-with-Images-GUI-20#Main.java" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={replLogo} alt="Replit Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Explore the world of old and try to discover a way into the town! 
                                    In this upgrade to our previous Medieval Adventure game, I added a GUI using
                                    Java Swing and hosted on Repl.it
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: Java Swing | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Medieval Adventure Game w/ GUI
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://replit.com/@MattMoncada/Text-Adventure-Game-with-GUI#Main.java" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={replLogo} alt="Replit Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Explore the world of old and try to discover a way into the town! 
                                    Built using Java and hosted on Repl.it
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: Java | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Medieval Adventure Game
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://scratch.mit.edu/projects/483711459/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={scratchLogo} alt="Scratch Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A simple remix of the popular Fish Food game. Solve the multiplication problems in time
                                    or get EATEN!
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: Scratch | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Fish Food Multiplication Game
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://scratch.mit.edu/projects/477806023/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={scratchLogo} alt="Scratch Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    A simple remix of the popular Asteroids game. Shoot asteroids and get a HIGH score!
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: theCoderSchool | Type: Scratch | Year: 2021
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Space Blaster Game
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://offenpetro.com/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={offenLogo} alt="Offen Petroleum Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Developed this website for a client Offen Petroleum.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Offen Petroleum | Type: WordPress | Year: 2020
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Offen Petroleum Website
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://centrosanantonio.org/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={centroLogo} alt="Centro San Antonio Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Developed this website for a client Centro San Antonio.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Centro | Type: WordPress | Year: 2019
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Centro San Antonio Website
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://anasandoval.org/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={anaLogo} alt="Ana Sandoval Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Developed this website for a client Ana Sandoval.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Ana Sandoval | Type: WordPress | Year: 2019
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Re-Elect Ana Sandoval Website
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://greatcoops.com/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={coopsLogo} alt="Great Coops Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    Developed this website for a client GreatCoops.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: GreatCoops | Type: WordPress | Year: 2019
                                    </div>
                                    <div className={styles.projectTitle}>
                                    Great Coops Website
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href="https://matthewmoncadafirstwebsite.netlify.app/" target="_blank" rel="noreferrer">
                        <div className={styles.projectBox}>
                        <Image className={styles.portfolioImage} src={portfolioLogo} alt="Personal Portfolio Logo" />
                            <div className={styles.greyBg}>
                                <div className={styles.projectInfo}>
                                    <div className={styles.projectDesc}>
                                    This was my first portfolio website that I built. It contains other website builds and a couple games.
                                    </div>
                                    <div className={styles.projectDetails}>
                                    Client: Myself | Type: HTML, CSS, JS | Year: 2017
                                    </div>
                                    <div className={styles.projectTitle}>
                                    My First Portfolio Website
                                    </div>
                                    <FaArrowRight style={{ color: "#4b21ff", fontSize: "2rem" }} />
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Home
