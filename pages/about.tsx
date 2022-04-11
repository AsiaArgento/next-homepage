import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../components/Menu'
import InfoSection from '../components/InfoSection'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="description" content="My name is Matthew Moncada. I am a web developer living
        in San Antonio, Texas. This is my about page detailing a bit about where I come from." />
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
            <h1>Welcome to the About page!</h1>
            <p>
              As you can see we are still under construction.. come back soon!
            </p>
          </div>
        </div>
      </main>

    </div>
  )
}

export default Home
