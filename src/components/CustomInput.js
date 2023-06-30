
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CustomInput = ({ id, name, labelTxt, type, cls, onChange, placeholder, element, icon, value, required, min, disabled }) => {
  return (
    <div className={`input-container ${cls}`}>
      <label className='custom-label' htmlFor= {`${id}`}>
            {labelTxt}
      </label>
      <div className={`input-child-coontainer`}>
        {element === "text-input"?<input 
                                      id={id}
                                      disabled = {disabled}
                                      style={{paddingLeft : icon? "25px" : "2px"}}
                                      onChange={(e)=> onChange(e)}
                                      value={value}
                                      type={`${type}`} 
                                      min={min}
                                      name={name} 
                                      placeholder={placeholder}
                                      required = {required === "required"? true  : false} />
          :element === "text-area" ? <textarea
                                      id={id}
                                      disabled = {disabled}
                                      style={{paddingLeft : icon? "25px" : "2px"}}
                                      type={`${type}`} 
                                      name={name} 
                                      onChange={(e)=> onChange(e)}
                                      value={value}
                                      placeholder={placeholder} /> :
          
          null} 
          {icon && <FontAwesomeIcon className='input-icon' icon={icon} />}
      </div>
    </div>
  )
}

export default CustomInput
