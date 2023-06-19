/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import CircledIcon from './CircledIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AddMediaSpace = ({ title, icon, btnValue, multiple }) => {
    const [mediaFiles, setMediaFiles] = useState([])
    const st = {
        background: "#DEDEFA",
        border: "4px solid #EFEFFD",
        color : "#5C59E8"
    }

    const handleChange = (e)=> {
        const files = Array.from(e.target.files)
        const fileURLs = btnValue === "Image" ? [...mediaFiles] : files.map((file) => URL.createObjectURL(file))
        if(btnValue === "Image"){
            fileURLs.push(...files.map((file) => URL.createObjectURL(file)))
        }
        setMediaFiles(fileURLs)
    }
    const handleRmoveMedia = (index)=> {
        const newMediaArr = [...mediaFiles]
        newMediaArr.splice(index, 1)
        setMediaFiles(newMediaArr)
    }
  return (
    <div className='add-media-space'>
      <label htmlFor={`${btnValue}-id`}>{title}</label>
      <div className='add-media' id={`${btnValue}-id`}>
            <div className='products-media-row' style={{ justifyContent : mediaFiles.length > 1? "flex-start" : "center" }}>
                    {mediaFiles.length > 0? 
                            mediaFiles.map((mf, index)=> {
                                    return  <div key={"md-" + index} style={{width : btnValue === "Image"? "100px" : "100%"}} className={`show-product-media`}>
                                               {btnValue === "Image"? <img src={mf} />
                                               : <video 
                                                        width={"100%"} 
                                                        controls 
                                                        autoPlay 
                                                        playsInline
                                                    >
                                                     <source src={mf}  />
                                               </video>}
                                               <div 
                                                    className='remove-media' 
                                                    onClick={()=> handleRmoveMedia(index)}>
                                                        <FontAwesomeIcon icon={"fa-solid fa-xmark"} />   
                                                    </div>
                                           </div> 
                            })  
                : <CircledIcon icon={icon} style={st}/>}
            </div>
            <label htmlFor={`add-${btnValue}-id`} className= {`add-media-btn add-${btnValue}`}>{`Add ${btnValue}`}</label>
            <input 
                    onChange={(e)=> handleChange(e)}
                    type='file' 
                    id={`add-${btnValue}-id`} 
                    accept={`${btnValue.toLowerCase()}/*`} 
                    multiple = {multiple}
                    hidden/>
      </div>
    </div>
  )
}

export default AddMediaSpace
