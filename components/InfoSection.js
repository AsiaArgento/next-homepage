import React from 'react';
import styles from '../styles/InfoSection.module.css'
import Link from 'next/link'
import mattsLogo from '../public/mattLogoTwo.png'
import Image from 'next/image'
import {
    BsFacebook,
    BsInstagram,
    BsGithub,
    BsStack,
    BsLinkedin,
    BsYoutube,
  } from 'react-icons/bs';

function infoSection() {
  return <>
    <div className={styles.infoSection}>
        <Link href="/">
        <a>
            <div className={styles.logo}>
                <Image src={mattsLogo} alt="logo" />
            </div>
        </a>
        </Link>
        <div className={styles.infoBox}>
            <h4>Email:</h4>
            <a href='mailto:matthewmoncada90@gmail.com?subject=Mail%20Inquiry%20to%20Matthew%20Moncada'>matthewmoncada90@gmail.com</a>
            <h4>Phone:</h4>
            <a href='tel:720-909-1600'>(720) 909-1600</a>
            <h4>Find Me On</h4>
            <div className={styles.infoLinks}>
                <a href='https://github.com/AsiaArgento' target='_blank'><BsGithub /></a>
                <a href='https://stackmuncher.com/AsiaArgento' target='_blank'><BsStack /></a>
                <a href='https://www.linkedin.com/in/matthew-marion-moncada/' target='_blank'><BsLinkedin /></a>
                <a href='https://www.facebook.com/matthew.moncada.731/' target='_blank'><BsFacebook /></a>
                <a href='https://www.instagram.com/misakamikotocsr/' target='_blank'><BsInstagram /></a>
                <a href='https://www.youtube.com/channel/UCErCtUl-qkn8keHImVDeb6g' target='_blank'><BsYoutube /></a>
            </div>
        </div>
    </div>
</>;
}

export default infoSection;
