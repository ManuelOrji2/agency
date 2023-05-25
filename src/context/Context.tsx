import {Dispatch, SetStateAction, createContext, useState} from "react"


type ValueProps = {
  activeLink: string,
  setActiveLink: Dispatch<SetStateAction<string>>
}


export const activeLinkContext = createContext<ValueProps | null> (null)
type Test = {
    children: React.ReactNode
}



export const ActiveLinkProvider: React.FC<Test> = ({children}) => {
    const [activeLink, setActiveLink] = useState<string>("")
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

