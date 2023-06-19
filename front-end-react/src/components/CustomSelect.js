import React from 'react'

const CustomSelect = ({optionsTitle,id, values, value, onChange, name, placeholder}) => {
  return (
    <div className='select-option-container'>
        <label htmlFor={id} className='custom-label'>{optionsTitle}</label>
        <select 
              id={id} 
              onChange={(e)=> onChange(e)}
              value={value}
              name={name}
              className='select-options'>

            <option hidden  value={""}>{placeholder}</option>
            {values.map((vl, index)=> {
              return <option key={vl + index} value={vl}>{vl}</option>
            })}

        </select>
    </div>
  )
}

export default CustomSelect
