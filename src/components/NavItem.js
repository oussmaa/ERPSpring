import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useConsumerOpenClose } from '../hooks/myHooks';

library.add(faChevronDown)





const NavItem = ({elementData, ftSize, txtCol, bgCol, wdh, hgt, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const {pathname} = useLocation();
    const { sideBarOpen } = useConsumerOpenClose()


    const style = {
        color : txtCol,
        backgroundColor: bgCol, 
        width : wdh,
        height : hgt,
        fontSize : ftSize,
        justifyContent : sideBarOpen? "flex-start" : "center"
    }


    const handleClick = ()=> {
      setIsOpen(!isOpen)
    }

    const activeOption = (optionsArr, currentPath)=> {
           return optionsArr.some((exist)=> exist.link === "/" + currentPath.split('/')[1])
    }


  return (
          elementData.type === "item"? 
              <Link to={elementData.link} 
                        className={`nav-item ${pathname=== elementData.link? "active": ""}`} 
                        style={style}>
                             {children}
              </Link> 
          :    <div  className='toggle-item'>
                    <div className={`nav-item`} 
                          style={{...style, 
                                      backgroundColor : activeOption(elementData.children ,pathname)? "#EFEFFD" : bgCol,
                                      color : activeOption(elementData.children ,pathname)? "#5C59E8" : txtCol,
                                      }}  
                          onClick={handleClick}>
                        <div>{children}</div>{sideBarOpen && <FontAwesomeIcon 
                                                                  style={{transform: `rotate(${isOpen? 180 : 0}deg)`,
                                                                            transition : "0.18s linear"}} 
                                                                  icon={'fa-solid fa-chevron-down'} />}
                    </div> 
                    {isOpen && sideBarOpen ? elementData.children.map((ch, index)=>{
                                    return <Link to={ch.link} key={"chItem" + index} 
                                                  className= {`nav-item ${pathname === ch.link || ch.link === '/' +pathname.split('/')[1]? "active": ""}`} 
                                                  style={style}>
                                                 {ch.text} 
                                           </Link> 
                        })
                    : null
                      }
              </div> 
  )
}

export default NavItem