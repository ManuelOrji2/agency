import rightArrow from "../images/rightArrow.svg"

import styles from "../styles/Hero.module.css"


const Hero = () => {


  return (
    <main className="h-screen w-screen relative px-10 flex gap-10 items-center  snap-center">
        <div className="w-1/2">
            <h1 className={styles.header}>DESIGNS</h1>
            <div className="flex gap-5 items-center">
                <h1 className={styles.header}>THAT</h1>
                <div className={`${styles.animatedTexts}`}>
                   
                </div>
            </div>
            
            <p className="w-4/5 font-300 text-sm">We know that every business is unique. That's why we offer custom design solutions that are tailored to meet the specific needs of your business.</p>
        </div>
        <div></div>
        <div className="absolute bottom-10 right-10 cursor-pointer flex gap-2 font-bold text-xl">
            <span>LET'S GET THIS SHIT DONE!</span>
            <img className={styles.rightArrow} src={rightArrow} alt="" width={20}/>
        </div>
    </main>
  )
}

export default Hero