import Nav from '../components/Nav'
import linkedIn from '../images/linkedIn.png'
import insta from "../images/insta.png"
import fb from "../images/fb.png"
import styles from "../styles/pages/ContactPage.module.css"
import { useEffect, useState } from 'react'



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


const servicesBtnTexts:string[]=["WEB DESIGN","WEB DEVELOPMENT","BRANDING","MARKETING"]

const animatedTexts: string[] = ["COLLAB","PARTNER","WORK"]

const ContactPage = () => {

const [textIndex, setTextIndex] = useState(0)

const changeText = (index: number) => {
  return animatedTexts[index]
}


  useEffect(()=>{ 
    setTimeout(() => {
      if(textIndex !== animatedTexts.length - 1) {
        setTextIndex(textIndex + 1)
      }else {
        setTextIndex(0)
      }
    }, 4949)
 
  },)


  return (
    <main className={`${styles.contacts}`}>
        <Nav/>
        <div className='h-screen w-screen relative flex items-center justify-between px-20'>
            <div className={styles.leftCon}>
              <h4>CONTACT</h4>
              <h1>LET'S </h1>
              <div className={`${styles.changingTextCon}`}><div className={styles.changingText}>{changeText(textIndex)}</div></div>
            </div>
            <form  className={`${styles.rightCon} flex flex-col gap-10 items-start`}>
              <div className='flex gap-20'>
                  <div className='flex flex-col gap-5'>
                    <label>WHAT'S YOUR NAME</label>
                    <input className='w-[280px]' placeholder='Enter Name' />
                  </div>
                  <div className='flex flex-col gap-5'>
                    <label>WHAT'S YOUR EMAIL</label>
                    <input className='w-[280px]' placeholder='Enter Email' />
                  </div>
              </div>
              <div className='flex flex-col gap-5'>
                <span>WHAT SERVICES CAN WE HELP YOU WITH?</span>
                <div className='flex gap-5 items-center'>
                {
                  servicesBtnTexts.map((servicesBtnText,i)=>(
                    <button key={i}>{servicesBtnText}</button>
                  ))
                }
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <span>TELL US ABOUT YOUR PROJECT</span>
                <input className='w-[649px]' placeholder='Enter project details' />
              </div>
              <div className='flex flex-col gap-5'>
                <span>PROJECT BUDGET (USD)</span>
                <input className='w-[280px]'  placeholder='Enter project budget' />
              </div>
              <button type={'submit'}>SUBMIT</button>
            </form>
        </div>
        
        <footer className={`${styles.footer} absolute bottom-10 right-10`}>
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
    </main>
  )
}

export default ContactPage