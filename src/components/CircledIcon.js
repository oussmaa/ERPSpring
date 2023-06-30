import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const CircledIcon = ({style, icon}) => {
    const st = {
                    color : style.color,
                    border : style.border,
                    background : style.background
                }
  return (
    <div className='icon-box' style={st}>
                                <FontAwesomeIcon icon={`fa-solid ${icon}`} />
    </div>
  )
}

export default CircledIcon
