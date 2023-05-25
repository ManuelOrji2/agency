import styles from "../styles/AboutPageHero.module.css"


const AboutPageHero = () => {
  return (
    <section className='flex w-screen h-screen justify-between snap-center'>
    <div className={styles.aboutHeroCont}>
        <span>WHO WE ARE</span>
        <h3>WE ARE</h3>
        <h1>DESIGN HORIZON</h1>
        <p>At Design Horizon, we're fueled by an infectious passion for weaving magic into the digital realm, conjuring up experiences that transcend the ordinary and leave an exhilarating imprint. We firmly believe that when design is elevated to its zenith, it becomes a catalyst for business metamorphosis and an enchanting force that mesmerizes audiences, keeping them spellbound and craving for more.</p>
    </div>
    <div className={styles.aboutHeroBg}></div>
</section>
  )
}

export default AboutPageHero