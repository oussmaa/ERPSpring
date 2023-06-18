import React from 'react'


const Row = ({ cls, children }) => {
  return (
    <div className={`row ${cls}`}>
      {children}
    </div>
  )
}

export default Row
