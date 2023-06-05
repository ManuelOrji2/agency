import rightArrow from "../images/rightArrow.svg"

import styles from "../styles/Hero.module.css"


const heroImgsClassNames:string[] = [styles.img1, styles.img2,styles.img3, styles.img4, styles.img5]

const Hero = () => {

  return (
    <main className="h-screen w-screen relative px-10 flex items-center justify-between  snap-center">
        <div className="w-1/2">
            <h1 className={styles.header}>DESIGNS</h1>
            <div className="flex gap-5 items-center">
                <h1 className={styles.header}>THAT</h1>
                <div className="h-[120px] overflow-hidden">
                  <div className= {styles.animatedTexts}>
                      <div className= {styles.standout}></div>
                      <div className= {styles.rebel}></div>
                      <div className= {styles.impress}></div>
                      <div className= {styles.wow}></div>
                  </div>
                </div>   
            </div>
            <p className="w-4/5 font-300 text-sm">We know that every business is unique. That's why we offer custom design solutions that are tailored to meet the specific needs of your business.</p>
        </div>
        <div className="relative w-[320px] hover:w-[400px] hover:h-[600px] ease-in-out duration-500 h-[532px] mr-10 cursor-pointer">
          {
            heroImgsClassNames.map((heroImgClassName, i)=>(
              <div className={heroImgClassName} key={i}></div>
            ))
          }
        </div>
        <a href='/#services' className="absolute bottom-10 right-10 cursor-pointer flex gap-2 font-bold text-xl">
            <span>LET'S GET THIS SHIT DONE!</span>
            <img className={styles.rightArrow} src={rightArrow} alt="" width={20}/>
        </a>
    </main>
  )
}

export default Hero