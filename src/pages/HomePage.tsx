import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonies from "../components/Testimonies";
import Footer from "../components/Footer";

import styles from "../styles/pages/HomePage.module.css"

const HomePage = () => {
  return (
    <div className={`${styles.home} max-h-screen overflow-y-hidden flex relative`}>
        <Nav />
        <Hero />
        <Services />
        <About />
        <Projects />
        <Testimonies />
        <Footer />  
    </div>
  )
}

export default HomePage