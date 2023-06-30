import React, { Children } from 'react'

const Button = ({ ftSize, txtCol, bgCol, wdh, hgt, brd, clName, children, type, href, onClick }) => {
    const style = {
        color : txtCol,
        backgroundColor: bgCol, 
        width : wdh,
        height : hgt,
        fontSize : ftSize,
        border : brd,
        display : "flex",
        gap : "8px",
    }
  return (
      <button type={type} 
              href = {href} 
              className= {`c-button ${clName}`} 
              style={style}>
        {Children.map(children, (child, index)=> {
            return index > 0? <h6>{child}</h6> : child
        })}
      </button>
  )
}

export default Button
