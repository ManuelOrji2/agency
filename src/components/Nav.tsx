import logo from "../images/Vector.png"
import styles from "../styles/Nav.module.css"
import { useState } from "react";

import { Link} from "react-router-dom";

type navLink = {
  name: string,
  link: string
}

const navLinks: navLink[]= [{
  name: "SERVICES",
  link: "/services",
},
{
  name: "PROJECTS",
  link: "/projects",
},
{
  name: "ABOUT US",
  link: "/about",
},
{
  name: "CONTACT",
  link: "/contact",
}
];



const Nav = () => {

  const [activeLink, setActiveLink] = useState<string>()
 
  return (
    <nav className="w-screen border-box fixed z-10 top-0 flex items-center justify-between py-6 px-10">
        <Link to="/">
            <img  src={logo} alt=""/>
        </Link>
        <div className="flex gap-5 font-bold">
            {navLinks.map((navLink,i)=>(
                <div onClick={()=> setActiveLink(navLink.link)} className={activeLink===navLink.link? `line-through ${styles.navLink}`:`${styles.navLink}`}key={i}>
                  <Link to={navLink.link}>{navLink.name}</Link>
                </div>
            ))}
        </div>
    </nav>
  )
}

export default Nav