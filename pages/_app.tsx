import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PN9GQLW7GC`}
      />

      <Script id="myScript" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-PN9GQLW7GC');
        `}
      </Script>
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit: {
          backgroundColor: 'white',
          opacity: 0
        }
      }}>
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
      
    </>
  );
}

export default MyApp
