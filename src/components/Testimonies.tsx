import { useState } from 'react'

import Natasha from "../images/andre-adjahoe-Mwc7Y5MtO9A-unsplash-removebg-preview 1.png"
import John from "../images/johndoe.png"
import Garry from "../images/garry.png"
import Mcman from "../images/mcman.png"
import Mckenzie from "../images/mckenzie.png"
import Emma from "../images/Emma.png"
import Sophia from "../images/sophia.png"
import Michael from "../images/michael shaa.png"


import leftArrow from '../images/leftArrow.svg'
import disableLeftArrow from '../images/leftArrow copy.svg'

import rightArrow from '../images/rightArrow.svg'
import disableRightArrow from '../images/rightArrow copy.svg'

import dot from '../images/Rectangle 46.png'
import grayDdot from '../images/Rectangle 45.png'




import Card from './Card'
import styles from "../styles/Testimonies.module.css"



export type Testifierprops ={
        name: string,
        testimony: string,
        imgUrl: string,
        position: string,
        type: string,
        backgroundColor: string,
}

  const testifiers: Testifierprops[] = [
    {
        name: "JOHN DOE",
        testimony: "“We had an amazing experience working with this design agency”.",
        imgUrl: John,
        position:"CEO,MoMo",
        type: "firstSlide",
        backgroundColor: "#5EA6C4",
    }, 
    {
        name: "NATASHA RODRIGUEZ",
        testimony: "“We were blown away by the level of expertise and creativity this design agency brought to our project.”",
        imgUrl: Natasha,
        position:"IT Manager, TRX Inc",
        type: "firstSlide",
        backgroundColor: "#9D9F9F",
    },  
    {
        name: "GARRY WHITE",
        testimony: "“This design agency is simply amazing. From the moment we first engaged with them, we knew we were in good hands.”",
        imgUrl: Garry,
        position:"CEO, TT Travels",
        type: "firstSlide",
        backgroundColor: "#FED557",
    },
  
     
    {
        name: "MCMANAMAN",
        testimony: "“Their professionalism, attention to detail, and dedication to our project were unparalleled.”",
        imgUrl: Mcman,
        position:"Director, CodeCave",
        type: "firstSlide",
        backgroundColor: "#fff",
    },
  
    {
        name: "MCKENZIE RUIZ",
        testimony: "“The team at Design Horizon is a true gem in the design industry”.",
        imgUrl: Mckenzie,
        position:"CEO, Sobit",
        type: "secondSlide",
        backgroundColor: "#5EA6C4",
    },
    {
        name: "EMMA SHEAMA",
        testimony: "“I'm grateful to have found Design Horizon for our design needs.”",
        imgUrl: Emma,
        position:"Director of Marketing, GHI",
        type: "secondSlide",
        backgroundColor: "#9D9F9F",
    }, 
    {
        name: "SOPHIA NGUYEN",
        testimony: "“Choosing this agency for our design needs was one of the best decisions we made.”",
        imgUrl: Sophia,

        position:"Co-founder, JKL Startups",
        type: "secondSlide",
        backgroundColor: "#FED557",
    },
    {
        name: "MICHAEL SHAH",
        testimony: "“If you're looking for exceptional design work, look no further than Design Horizon.”",
        imgUrl: Michael,
        position:"Manager, VWX Retail",
        type: "secondSlide",
        backgroundColor: "#fff",
    },
   

  ]

  const firstSlide: Testifierprops[] = testifiers.filter((testifier)=> (testifier.type === "firstSlide"))
  const secondSlide: Testifierprops[] = testifiers.filter((testifier)=> (testifier.type === "secondSlide"))

  
const Testimonies = () => {

    const [testifiers, setTestifiers] = useState(firstSlide);

    function slideRight(){
        
        setTestifiers(secondSlide)

        
    }

    function slideLeft(){
        setTestifiers(firstSlide)


        
    }

    return (
      <main className='h-screen w-screen relative flex justify-between pt-24 px-24 snap-center'>
        <div className="flex flex-col w-2/5 justify-center items-end gap-5">
          <h1 className={`${styles.header} text-end font-bold`}>   WHAT OUR <br /> CLIENTS <br /> ARE SAYING</h1>
          <p className={styles.testiParag}>Want to hear the juiciest details about our work? Check out what our amazing clients have to say about us! We promise it'll be more entertaining than binge-watching your favourite show. Plus, it's all true!</p>
        </div>
        <div className='flex flex-col gap-5 items-center justify-center'>
           
                <div className=' flex flex-wrap w-[650px] gap-3 '>
                    {
                        testifiers.map((testifier: Testifierprops,i)=>(
                            <Card key={i} testifier={testifier} />
                        ))
                    }
                </div>         
           
            <div className='w-[335px] absolute bottom-10 right-24 flex items-center justify-between '>
                <div className='flex gap-2 outline-none'>
                    
                    <button onClick={slideLeft}>
                        {
                        <img  src={testifiers===firstSlide? dot:grayDdot} alt=''/>
                        
                        }
                    </button>
                    <button onClick={slideRight}>
                        {
                        <img  src={testifiers===secondSlide? dot:grayDdot} alt=''/>
                        }
                    </button>
                </div>
                <div className='flex gap-5'>
                    <button onClick={slideLeft}>
                        {
                        <img  src={testifiers===firstSlide? disableLeftArrow: leftArrow} alt=''/>
                        
                        }
                    </button>
                    <button onClick={slideRight}>
                        {
                        <img  src={testifiers===secondSlide? disableRightArrow:rightArrow} alt=''/>
                        }
                    </button>
                </div>
                
            </div>
        </div>
        
      </main>
    )
}

export default Testimonies