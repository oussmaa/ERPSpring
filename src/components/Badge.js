import React from 'react'

const Badge = ({content, valueBg, nullValue, nullColor}) => {
  const style = {
    background : valueBg > nullValue?  "#E7F4EE" : valueBg < nullValue? "#FEEDEC" : "#F0F1F3",
    color : valueBg > nullValue?  "#0D894F" : valueBg < nullValue? "#F04438" : nullColor
  }
  return (
    <span style={style} className='badge'>
        {content}
    </span>
  )
}

export default Badge