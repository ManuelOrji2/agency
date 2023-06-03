// import { activeLinkContext } from "../context/Context";
import logo from "../images/Vector.png"
import styles from "../styles/Nav.module.css"
// import { useContext } from "react";
// import { ValueProps } from "../context/Context";

import { Link, useLocation} from "react-router-dom";

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
  const location = useLocation()
  console.log(location.pathname)

  // const {activeLink,setActiveLink} = useContext(activeLinkContext)as ValueProps
 
  return (
    <nav className="w-screen border-box fixed z-10 top-0 flex items-center justify-between py-6 px-10">
        <Link  to="/">
            <img  src={logo} alt=""/>
        </Link>
        <div  className="flex gap-5 font-bold">
            {navLinks.map((navLink,i)=>(
                <div className={location.pathname===navLink.link|| location.pathname === `${navLink.link}/` ? `line-through ${styles.navLink}`:`${styles.navLink}`}key={i}>
                  <Link to={navLink.link}><button className={styles.linkText} ><span className={styles.txtOne}>{navLink.name}</span><span className={styles.txtTwo}>{navLink.name}</span></button></Link>
                </div>
            ))}
        </div>
    </nav>
  )
}

export default Nav