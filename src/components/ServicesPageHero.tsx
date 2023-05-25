import styles from "../styles/ServicesPageHero.module.css"

const ServicesPageHero = () => {
  return (
    <section className='flex w-[65vw] h-screen justify-between snap-center'>
        <div className={styles.heroCont}>
            <span>SERVICES</span>
            <h1>SERVICES WE OFFER</h1>
            <p>At Design Horizon, we pride ourselves on providing a comprehensive suite of creative services tailored to meet your unique needs. Our team of skilled designers, strategists, and innovators are dedicated to delivering exceptional results that exceed your expectations.
            From captivating brand identity design to user-centric web and app development, we offer a wide range of services that empower businesses to thrive in the digital landscape. Our collaborative approach ensures that we understand your goals and aspirations, allowing us to create impactful solutions that drive growth and elevate your brand.
            </p>
        </div>
        <div></div>
    </section>
  )
}

export default ServicesPageHero