import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from './Button'
import { Link } from 'react-router-dom'

const ButtonsGroup = ({ infoBtn }) => {
  return (
    <div className='button-container'>
        {infoBtn.map((inf, index) => {
            return inf.type === "link"? <Link to={inf.link} 
                                                  key={inf.value + index}
                                                  style={{
                                                   fontSize:"18px" ,
                                                   backgroundColor: inf.bgColor, 
                                                   height : "40px", 
                                                   width : "142px", 
                                                   border : "1px solid #E0E2E7",
                                                   display : "flex",
                                                   gap : "8px",
                                                   color : inf.txtColor,}}
                                                   className={"simple"}>
                                                          <FontAwesomeIcon icon={inf.icon} />  
                                                          <h6>{inf.value}</h6> 
                                          </Link>
                                        : inf.type === "input" ? <input type={infoBtn.inputType} /> 
                                        : <Button bgCol={inf.bgColor} 
                                                  key={inf.value + index}
                                                  ftSize={"18px"} 
                                                   hgt={"40px"} 
                                                   wdh={"142px"} 
                                                   brd={"1px solid #E0E2E7"}
                                                   txtCol={inf.txtColor}
                                                   clName={"simple"}>
                                                          <FontAwesomeIcon icon={inf.icon} />  
                                                          {inf.value}
                                          </Button>
        })    
        }
        </div>
  )
}

export default ButtonsGroup
