import rightArrow from "../images/rightArrow.svg"
import linkedIn from '../images/linkedIn.png'
import insta from "../images/insta.png"
import fb from "../images/fb.png"
import { Link } from "react-router-dom"


import styles from "../styles/Footer.module.css"

type social={
    img: string,
    url: string
}

const socialLinks: social[] = [
    {
       img: insta,
       url: "https://instagram.com "
    },
    {
        img: fb,
        url: "https://facebook.com "
     },
     {
        img: linkedIn,
        url: "https://linkedIn.com "
     }
    ]

const Footer = () => {

  return (
    <footer className='h-screen w-[50vw] relative'>
        <div className="absolute w-fit top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <h1 className={styles.header}>WANNA SHARE<br />
            AN IDEA?</h1>
            <p className={styles.footerParag}>Got an idea that's been bugging you day and night? Don't keep it to yourself! Let us in on the secret and together we'll make it a reality!</p>
            <div className="flex items-center  justify-between text-xl font-bold">
                <div></div>
                <Link to="/contact" className="flex items-center gap-3 cursor-pointer">
                    <span>SHARE WITH US</span>
                    <img src={rightArrow} alt=''/>
                </Link>
            </div>
           
        </div>
        <div className={`${styles.socials} w-[fit-content]`}>
            <div className="flex gap-2 items-center">
                <span>Follow us on</span>
                {
                    socialLinks.map((socialLink,i)=>(
                        <a key={i} href={socialLink.url} target="_blank" rel="noreferrer noopener">
                            <img  src={socialLink.img} alt=""/>
                        </a>
                    ))
                }
            </div>
            <div className="flex gap-1 items-center"><span>© </span>2023, DESIGN HORIZON. All right reserved Privacy policy</div>
        </div>
    </footer>
  )
}

export default Footer