import rightArrow from "../images/rightArrow.svg"
import webDesignImg from "../images/webdesign-img.png"
import webDevImg from "../images/webdev-img.png"
import brandingImg from "../images/branding-img.png"

import styles from "../styles/Services.module.css"
import { Link } from "react-router-dom"


const Services = () => {
  return (
    <main className="h-screen w-screen snap-center flex px-10 relative">
        <div className="w-1/3 flex flex-col gap-7 items-end absolute top-1/3">
            <h1 className={`${styles.header} font-bold text-end`}>SERVICES<br /> THAT <br /> SUITS YOU</h1>
            <p>Hunt down the service that'll have you fist-pumping like a champ!</p>    
            <Link to="/services" className="cursor-pointer flex gap-2 font-bold text-xl">
                <span>GET A GLIMPSE!</span>
                <img  src={rightArrow} alt="" width={20}/>
            </Link>        
        </div>
        <div className={`${styles.servicesContainer} flex absolute top-72 `}>
            <Link to={"/services/#web-design"} className={`${styles.webDesign} flex flex-col justify-between`}>
                <div className="flex justify-end" >
                    <div className={styles.webDesignButtons}>
                        <span className={styles.button}>Landing Page</span>
                        <span className={styles.button}>Redesign</span>
                        <span className={styles.button}>UI/UX</span>
                    </div>
                    <h2>WEB DESIGN</h2>
                </div>
                <img src={webDesignImg} alt=""/>
            </Link>
            <Link  to={"/services/#dig-mkt"} className={`${styles.digMkt} flex flex-col items-center justify-between`}>
                <div className="flex" >
                    <div className={styles.digMktButtons}>
                        <span className={styles.button}>Content marketing</span>
                        <span className={styles.button}>SEO</span>
                        <span className={styles.button}>CRO</span>
                    </div>
                    <div className={styles.digMktImg}>

                    </div>
                </div>
                <h2 className="px-10">DIGITAL MARKETING</h2>
            </Link>
            <Link  to={"/services/#web-dev"} className={`${styles.webDev} flex flex-col justify-between`}>
                <div className="flex justify-end" >
                    <div className={styles.webDevButtons}>
                        <span className={styles.button}>API Integration</span>
                        <span className={styles.button}>Frontend</span>
                        <span className={styles.button}>Backend</span>
                    </div>
                    <h2>WEB <br /><span className="px-3">DEVELOP</span><br /><span className="px-10">MENT</span></h2>
                </div>
                <img src={webDevImg} alt=""/>
            </Link>
            <Link  to={"/services/#branding"} className={`${styles.branding} flex flex-col items-center justify-between`}>
                <div className="flex justify-end" >
                    <div className={styles.brandingButtons}>
                        <span className={styles.button}>Identity</span>
                        <span className={styles.button}>Messages</span>
                        <span className={styles.button}>Logo design</span>
                    </div>
                    <h2>BRANDING</h2>
                </div>
                <img src={brandingImg} alt="" width={154}/>
            </Link>

        </div>
    </main>
  )
}

export default Services