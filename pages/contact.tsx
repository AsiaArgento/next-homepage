import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import InfoSection from '../components/InfoSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="My name is Matthew Moncada. I am a web developer living in
        San Antonio, Texas. This is my contact page, please send me a message regarding estimates for work or anything else." />
        <meta name="keywords" content="Matthew Marion Moncada, Frontend Developer, Web Developer, Business Card, WordPress, Full-stack, San Antonio, Texas" />
        <meta name="author" content="Matthew Marion Moncada"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main>
        <InfoSection />
        <div className={styles.contentSection}>
          <div className={styles.profileSection}>
            <h1>Welcome to the Contact page!</h1>
            <p>
              Feel free to please send me an email! I check my email quite often and usually respond within a business day.
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
