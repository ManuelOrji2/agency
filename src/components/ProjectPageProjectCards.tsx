import ZeltImg from "../images/Rectangle 51.png"
import SynImg from "../images/Rectangle 51 (1).png"
import HypImg from "../images/Rectangle 51 (2).png"
import MonImg from "../images/Rectangle 51 (3).png"
import FinImg from "../images/Rectangle 51 (4).png"
import JazImg from "../images/Rectangle 51 (5).png"
import VoaImg from "../images/Rectangle 51 (6).png"
import PodImg from "../images/Rectangle 51 (7).png"
import TokImg from "../images/Rectangle 51 (8).png"

import styles from "../styles/ProjectPageProjectCards.module.css"



type project = {
    title: string,
    content: string,
    img: string,
    url: string
}

const Projects: project[] = [
    {
        title: "ZELT",
        content: "Empowers startups and SMBs to streamline admin tasks and focus on high-value work.",
        img: ZeltImg,
        url: ""
    },
    {
        title: "SYNTHETIZE",
        content: "Synthetize brand identity",
        img: SynImg,
        url: ""
    },
    {
        title: "HYPERACTIVE",
        content: "Hyperactive brand identity",
        img: HypImg,
        url: ""
    },
    {
        title: "MONEY MASE",
        content: "Revolutionizing financial management for individuals and businesses.",
        img: MonImg,
        url: ""
    },
    {
        title: "FINEX",
        content: "Digital agency landing page.",
        img: FinImg,
        url: ""
    },
    {
        title: "JAZZ ME",
        content: "Jazz Me website",
        img: JazImg,
        url: ""
    },
    {
        title: "VOA LABS",
        content: "Voa labs brand identity",
        img: VoaImg,
        url: ""
    },
    {
        title: "PODDO",
        content: "Podcast app design",
        img: PodImg,
        url: ""
    },
    {
        title: "TOK TAK",
        content: "Social media app design",
        img: TokImg,
        url: ""
    },
]

const ProjectPageProjectCards = () => {
  return (
    <div className="flex gap-[203px] pl-[503px] items-center">
        {
            Projects.map((project,i)=>(
                <div className={`${styles.card} relative cursor-pointer`} key={i}>
                        <img src={project.img} alt=''  width={384}/>
                        <span>{project.title}</span> 
                        <p>{project.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ProjectPageProjectCards