import React from 'react'

const CheckBoxGroup = ({ cls, checkboxOptions }) => {
  return (
    <div className = {`checkbox-group ${cls}`}>
      {checkboxOptions.map((op, index)=> {
        return <div key={index + op}>
                    <input type='checkbox' 
                            name={op.name}
                            id={`${op}-id${index}`} />  
                    <label htmlFor={`${op}-id${index}`} className='custom-label'>{op.value}</label>
               </div>
      })}
    </div>
  )
}

export default CheckBoxGroup
