import { Link } from "react-router-dom"
import rightArrow from "../images/rightArrow.svg"
import styles from "../styles/Project.module.css"
import { useContext } from "react"
import { ValueProps, activeLinkContext } from "../context/Context"

  
const Projects = () => {

  const {setActiveLink} = useContext(activeLinkContext) as ValueProps
  

    return (
      <main className='h-screen w-screen relative flex justify-between pt-24 snap-center'>
        <div className="flex flex-col w-2/5 justify-center items-end gap-5">
          <h1 className={`${styles.header} font-bold`}> OUR RECENT<br/> PROJECTS</h1>
          <p className={styles.projParag}>Check out our portfolio of successful projects to see how we've helped clients achieve their business goals. From branding to web development, our team has the skills and creativity to bring your vision to life.</p>
          <Link onClick={()=> setActiveLink("/projects")} to="/projects" className="flex gap-3 items-center text-xl font-bold cursor-pointer">
            <span> VIEW ALL PROJECTS</span>
            <img src={rightArrow} alt="" width={20}/>
          </Link>
        </div>
        <div className="flex max-w-[720px] absolute top-40 left-[850px]">
            <a href="/projects" className={styles.projOne}>
             
            </a>
            <a href="/projects" className={styles.projTwo}>

            </a>
            <a href="/projects" className={styles.projThree}>
              
            </a>
            <a href="/projects" className={styles.projFour}>
         
            </a>
        </div>
      </main>
    )
}

export default Projects