import React, { useState } from 'react'

const SwitchButton = ({ id, onClick, switchOn  }) => {
    
  return (
    <div className='switch-container'>
            <label  className='custom-label'
                    htmlFor={id}
                    style={{color : switchOn? "rgb(28 28 30)"  : "#4D5464"}}>Add Location</label>
            <div 
                className='switch-button'
                id= {id}
                onClick={onClick}
                style={{justifyContent : switchOn? "flex-end" : "flex-start",
                        borderColor : switchOn? "#5C59E8" : "#919191",}}>
                <div className='cr-sw-btn'
                        style={{
                          backgroundColor : switchOn ? "#5C59E8" : "#898989",
                        }}>
                </div>
            </div>
    </div>
  )
}

export default SwitchButton
