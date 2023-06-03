import {Dispatch, SetStateAction, createContext,useEffect, useState} from "react"



export type ValueProps = {
  activeLink: string,
  setActiveLink: Dispatch<SetStateAction<string>>
}


export const activeLinkContext = createContext<ValueProps | null> (null)

type Test = {
    children: React.ReactNode
}



export const ActiveLinkProvider: React.FC<Test> = ({children}) => {  

    const [activeLink, setActiveLink] = useState("")

  useEffect(()=>{
    localStorage.setItem("activeLink",activeLink)
  },[activeLink])
 

    const value: ValueProps = {
      activeLink, 
      setActiveLink
    }

  return(
    <activeLinkContext.Provider value={value}>
          {children}
    </activeLinkContext.Provider>
  )
}

