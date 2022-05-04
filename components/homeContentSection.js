import React from 'react';
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import profilePic from '../public/matt.jpg'
import Link from 'next/link'
import { motion } from 'framer-motion'

function homeContentSection() {
  return <>
        <div className={styles.contentSection}>
            <motion.div className={styles.imageSection} whileHover={{
                cursor: 'pointer',
                scale: [1, 1.2, 1.1],
                rotate: [0, 5, -5, 0],
                transition: {
                    duration: .2
                }
            }}>
                <Image src={profilePic} alt="Picture of Matt" />
            </motion.div>
            <div className={styles.profileSection}>
                <h1>Matthew Marion<br/><span>Moncada</span></h1>
                <hr className={styles.blueLine} />
                <h5>Frontend Web Developer</h5>
                <p>Welcome to my virtual business card. You can find links to my various social accounts.
                I have over 4 years of experience developing websites for clients.<br/><br/>
                Currently, I am focusing on building accessible, human-centered experiences.
                This website is built using NextJs.
                </p>
                <Link href="/portfolio"><a className={styles.mainButton}>Portfolio</a></Link>
                <Link href="/contact"><a className={styles.ghostBtn}>Contact</a></Link>
            </div>
        </div>
</>;
}

export default homeContentSection;
