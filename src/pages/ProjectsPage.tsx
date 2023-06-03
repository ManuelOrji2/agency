import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ProjectPageHero from '../components/ProjectPageHero'
import ProjectPageProjectCards from '../components/ProjectPageProjectCards'

import styles from "../styles/pages/ProjectsPage.module.css"

const ProjectsPage = () => {
  return (
    <div className={styles.projects}>
        <Nav />
        <ProjectPageHero />
        <ProjectPageProjectCards />
        <Footer/>

    </div>
  )
}

export default ProjectsPage