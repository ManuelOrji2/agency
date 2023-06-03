import { Link } from "react-router-dom"
import rightArrow from "../images/rightArrow.svg"
import styles from "../styles/About.module.css"
import { useContext } from "react"
import { ValueProps, activeLinkContext } from "../context/Context"



const About = () => {
  const {setActiveLink} = useContext(activeLinkContext) as ValueProps
  return (
    <main className='h-screen w-screen flex justify-between pt-24 snap-center'>
      <div className="flex flex-col w-2/5 justify-center items-end gap-5">
        <h1 className={`${styles.header} text-end font-bold`}>WHO ARE 
          <br />WE?</h1>
        <p  className={styles.aboutParag}>At our agency, we believe that great design is about collaboration, communication, and creativity.</p>
        <Link onClick={()=> setActiveLink("/about")} to="/about" className="flex gap-3 items-center text-xl font-bold cursor-pointer">
          <span>GET TO KNOW US</span>
          <img src={rightArrow} alt="" width={20}/>
        </Link>
      </div>
      <div className={styles.aboutImg}></div>
    </main>
  )
}

export default About