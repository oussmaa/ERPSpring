import React, { createContext, useState } from 'react'
import { OpenClose } from './contexts'




const OpenCloseSideBarProvider = ({ children }) => {
    
  const [sideBarOpen, setSideBarOpen] = useState(true)

  const sideBarToggle = ()=> {
    setSideBarOpen(!sideBarOpen)
  }

  return (
    <OpenClose.Provider value={{ sideBarOpen, 
                                    setSideBarOpen, 
                                    sideBarToggle }}>
        { children }
    </OpenClose.Provider>
  )
}

export default OpenCloseSideBarProvider
