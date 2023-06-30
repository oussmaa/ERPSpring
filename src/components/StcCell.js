import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowUp, faArrowDown)

const StcCell = ({ title, stat }) => {
  return (
    <div className='statistics-element'>
                    <h6>{title}</h6>
                    <div>
                        ${stat >= 0? stat : -stat}k <FontAwesomeIcon
                                                     icon={`fa-solid fa-arrow-${stat > 0 ? "up" : "down"}`} 
                                                     style={{ color : stat > 0? '#3DA172' :'#F36960' }}
                                                     />
                    </div>
                </div>
  )
}

export default StcCell
