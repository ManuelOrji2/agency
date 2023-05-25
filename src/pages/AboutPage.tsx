import Nav from '../components/Nav'
import AboutPageSecOne from '../components/AboutPageSecOne'
import Footer from '../components/Footer'

import styles from "../styles/pages/AboutPage.module.css"
import AboutPageHero from '../components/AboutPageHero'
import AboutPageSecTwo from '../components/AboutPageSecTwo'

const AboutPage = () => {
  return (
    <main className={styles.about}>
        <Nav />
        <AboutPageHero />
        <AboutPageSecOne />
        <AboutPageSecTwo />
        <Footer />
    </main>
  )
}

export default AboutPage