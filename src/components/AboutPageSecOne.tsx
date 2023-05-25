import styles from "../styles/AboutPageSecOne.module.css"


const AboutPageSecOne = () => {
  return (
    <section className='flex w-screen h-screen justify-between snap-center'>
    <div className={styles.aboutSecOneLeftCont}>
        <p className={styles.firstParag}>Our passion for innovation and attention to detail are the driving forces behind our success. We immerse ourselves in the latest design trends, emerging technologies, and user experience research to stay ahead of the curve.</p>
        <div className={`flex ${styles.header}`}>
            <h1 className="transform rotate-90">WHAT</h1>
            <h1>DISTINGUISHES<br /> US FROM OTHERS</h1>
        </div>
        <p className={styles.secondParag}> From the moment we embark on a project, we dedicate ourselves to crafting every pixel, perfecting every interaction, and refining every line of code. This meticulous approach guarantees that the digital experiences we deliver are not just visually captivating, but also intuitive, seamless, and engaging.</p>
    </div>
    <div className={styles.aboutSecOneRightCont}>
        <h1>OUR CREATIVE STRATEGY</h1>
        <p className={styles.thirdParag}>At Design Horizon, collaboration lies at the heart of everything we do. We understand that every project is unique, and that's why we place great importance on truly understanding your goals, values, and target audience. By working closely with you throughout the design process, we ensure that your vision is not only realized but also enhanced.
        Our belief is that combining client expertise with our creative vision leads to visually stunning and strategically aligned solutions, resulting in the best results for your business.
        </p>
        <div className={styles.aboutSecOneRightContImg}></div>
    </div>
</section>
  )
}

export default AboutPageSecOne