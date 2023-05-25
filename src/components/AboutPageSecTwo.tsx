import styles from "../styles/AboutPageSecTwo.module.css"
import designHorizon from "../images/DESIGN HORIZON.png"
import teamMate1 from "../images/Front.png"
import teamMate2 from "../images/front.png"
import teamMate3 from "../images/front (1).png"
import teamMate4 from "../images/front (2).png"
import teamMate5 from "../images/front (3).png"
import teamMate6 from "../images/front (4).png"
import teamMate7 from "../images/front (5).png"
import teamMate8 from "../images/front (6).png"



type values={
    header: string,
    content: string
}

const coreValues: values[] = [
    {
        header: "HONESTY",
        content: "Integrity breeds trust, our agency's most valuable asset. Each of us commits to infusing every action with honesty, fairness, and respect for clients and colleagues alike."
    },
    {
        header: "OUTCOME",
        content: "Our shared values and collective effort create a powerful impact, driving positive change and delivering excellence for our customers, colleagues, and communities."
    },
    {
        header: "TOGETHERNESS",
        content: "Togetherness celebrates diversity, synergizing team members' varied experiences, skills, and talents to drive remarkable achievements."
    },
    {
        header: "INNOVATION",
        content: "Innovation fuels action: risk-taking, curiosity, learning from mistakes, and exceeding expectations."
    },
]

const team:string[] = [teamMate1,teamMate2,teamMate3,teamMate4,teamMate5, teamMate6, teamMate7,teamMate8]

const AboutPageSecTwo = () => {
  return (
    <div className="flex justify-evenly w-[130vw] snap-center">
        <div className={`${styles.aboutPageSecTwoLeftCon} flex flex-col gap-4 pt-[200px]`}>
             <h1>OUR CORE VALUE</h1>
             {
                coreValues.map((coreValue, i)=>(
                    <div key={i}>
                        <h3>{coreValue.header}</h3>
                        <p>{coreValue.content}</p>
                    </div>
                ))
            } 
        </div>
        <div className={`${styles.aboutPageSecTwoMidCon} pt-[200px]`}>
            <h1>MEET THE <br /> POWERHOUSE <br /> BEHIND THE <br />SCENE</h1>
            <p>Meet our design wizards - a whimsical blend of creativity, caffeine, and contagious laughter. From pun enthusiasts to meme maestros, they infuse joy into our designs. Get ready to discover the faces behind the magic!</p>
        </div>
        <div className={`${styles.aboutPageSecTwoRightCon} relative flex items-center justify-center w-[47%] h-screen`}>
            <img className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]" src={designHorizon} alt="" width={995} />
            <div className={`${styles.teamMates} grid grid-rows-2 grid-cols-4 gap-2`}>
                {
                    team.map((mate,i)=>(
                        <div key={i} >
                            <img src={mate} alt="" width={191} height={251}/>
                        </div>
                    
                    ))
                }
            </div>
        </div>
      

    </div>
  )
}

export default AboutPageSecTwo