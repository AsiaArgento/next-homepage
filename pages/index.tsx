import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import InfoSection from '../components/InfoSection'
import HomeContentSection from '../components/homeContentSection'
import { motion } from 'framer-motion'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="Hello, welcome to my online v-card. My name is Matthew Marion Moncada,
        I am a frontend web developer based out of Denver, Colorado." />
        <meta name="keywords" content="Matthew Marion Moncada, Frontend Developer, Web Developer, Business Card, WordPress, Full-stack, Denver, Colorado" />
        <meta name="author" content="Matthew Marion Moncada"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <InfoSection />
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
      <HomeContentSection />
      </motion.div>
      
    </div>
  )
}

export default Home
