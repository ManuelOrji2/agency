import { FC } from "react"
import { Testifierprops } from "./Testimonies"
import styles from "../styles/Card.module.css"

interface CardProps {
    testifier: Testifierprops
}

const Card: FC<CardProps> = ({testifier}) => {
  return (
    <div className={styles.card} style={{backgroundColor: testifier.backgroundColor}}>
        <h1 className="text-[24px] font-[700]">{testifier.name}</h1>
        <p style={{width:"255px"}}>{testifier.testimony}</p>
        <div>
          <span style={{fontFamily: "GT America Trial", font: "16px"}}>{testifier.position}</span>
          <img className="absolute bottom-0 right-0" src={testifier.imgUrl} alt=''/>
        </div>
    </div>
  )
}

export default Card