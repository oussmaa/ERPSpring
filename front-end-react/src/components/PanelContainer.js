import React from 'react'

const PanelContainer = ({cls, wth, minWth, maxWth, mgtop, children }) => {
  return (
    <div style={{width : wth, minWidth : minWth, maxWidth : maxWth, marginTop : mgtop}} className={`panel-container ${cls}`}>
      { children }
    </div>
  )
}

export default PanelContainer
