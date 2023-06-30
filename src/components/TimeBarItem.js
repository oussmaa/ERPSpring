import React, { useState } from 'react'

const TimeBarItem = ({dataTime}) => {
    const [timeValue, setTimeValue]= useState("all_time")
    const handleChange = (e)=> {
        setTimeValue(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className='timebar-item'>
        {
            dataTime.map((el, index)=> {
                return (
                    <button key={"toggle-btn" + index} 
                            className={`time-option ${timeValue === el.value? "active-time" : ""}`} value={el.value}
                            onClick={(e)=> {handleChange(e)}}
                    >
                            {el.txt}
                    </button>
                )
            })
        }
    </div>
  )
}

export default TimeBarItem
