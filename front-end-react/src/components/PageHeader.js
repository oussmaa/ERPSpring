import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router'
import ButtonsGroup from './ButtonsGroup'

library.add(faChevronRight)

const PageHeader = ({ title, path, infoBtn }) => {
    const {pathname} = useLocation();
    const [pth, setPth] = useState([])

    useEffect(()=>{
        const splitPath = pathname.split("/")
        setPth(splitPath)
    }, [])
  return (
    <div className='page-header'>
        <div>
            <h3>{title}</h3>
            <div className='path' style={{display : "flex", 
                                          gap : "5px", 
                                          alignItems: "center"}}>
             <span className='path-root'>dashboard</span>  <FontAwesomeIcon icon={"fa-solid fa-chevron-right"} /> 
             {pth.map((pth1, index)=> { 
                return <div key={pth1 + index} style={{display : "flex", 
                                                        gap : "2px",
                                                        alignItems: "center",
                                                        }}>
                            <span style={{color :index < pth.length - 1?  "#5C59E8" : "#667085"}}>{pth1}</span> 
                            {index < pth.length - 1 && index > 0?
                                     <FontAwesomeIcon icon={"fa-solid fa-chevron-right"} />
                                     : null }
                        </div>
                
             })}
            </div>
        </div>
        <ButtonsGroup infoBtn={infoBtn} />
    </div>
  )
}

export default PageHeader
