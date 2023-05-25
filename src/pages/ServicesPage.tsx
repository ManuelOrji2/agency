import Footer from '../components/Footer'
import Nav from '../components/Nav'
import ServicesPageBranding from '../components/ServicesPageBranding'
import ServicesPageHero from '../components/ServicesPageHero'
import ServicesPageMkt from '../components/ServicesPageMkt'
import ServicesPageWebDesign  from "../components/ServicesPageWebDesign"
import ServicesPageWebDev from '../components/ServicesPageWebDev'

import styles from "../styles/pages/ServicesPage.module.css"

const ServicesPage = () => {
  return (
    <div className={`${styles.services} flex `}>
        <Nav />
        <ServicesPageHero />
        <ServicesPageWebDesign />
        <ServicesPageMkt />
        <ServicesPageWebDev />
        <ServicesPageBranding />
        <Footer />
    </div>
  )
}

export default ServicesPage