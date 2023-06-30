
const PanelHeader = ({ title, topElements, secondTitle, children}) => {
  return (
    <div className='panel-header'>
            <div className='panel-title'>
                <h1>{title}</h1>
                <h3>{secondTitle}</h3>
                {topElements}
                
            </div>
            <div className='secondary-panel-title'>
                {children}
            </div>
        </div>
  )
}

export default PanelHeader
