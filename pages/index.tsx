import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import InfoSection from '../components/InfoSection'
import HomeContentSection from '../components/homeContentSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="My name is Matthew Moncada. I am a frontend developer living in
        Denver, Colorado. This is my virtual business card with links to my relevant social accounts and
        an archive of my work." />
        <meta name="keywords" content="Matthew Marion Moncada, Frontend Developer, Web Developer, Business Card, WordPress, Full-stack, Denver, Colorado, United States of America" />
        <meta name="author" content="Matthew Marion Moncada"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <InfoSection />
      <HomeContentSection />
    </div>
  )
}

export default Home
