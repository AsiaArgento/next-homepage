import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/matt.jpg'
import Link from 'next/link'

function homeContentSection() {
  return <>
        <div className={styles.contentSection}>
            <div className={styles.imageSection}>
                <Image src={profilePic} alt="Picture of Matt" />
            </div>
            <div className={styles.profileSection}>
                <h1>Matthew M.<br/><span>Moncada</span></h1>
                <hr className={styles.blueLine} />
                <h5>Front-End Developer</h5>
                <p>Welcome to my virtual business card. You can find links to my various social accounts.
                I have over 5 years of experience developing websites for my clients.<br/><br/>
                Currently, I am focusing on building accessible, human-centered experiences using modern tools.
                This website is built using NextJs.
                </p>
                <Link href="/portfolio"><a className={styles.mainButton}>Portfolio</a></Link>
                <Link href="/contact"><a className={styles.ghostBtn}>Contact</a></Link>
            </div>
        </div>
</>;
}

export default homeContentSection;
