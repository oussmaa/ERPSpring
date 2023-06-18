
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useOutsideAlerter } from '../hooks/myHooks';

const DropDownSelect = ({ title, id, name, onChange }) => {
        const [isOpen, setIsOpen] = useState(false);
        const [selectedOptions, setSelectedOptions] = useState([]);
        const dropDownToggle = useRef()

        useOutsideAlerter(dropDownToggle,(e) => {
            setIsOpen(false)
          })
        const handleOptionChange = (event) => {
          const currentOptions =[...selectedOptions];
          const nextOptions = [...Array.from(event.target.selectedOptions, (option)=> option.value)]
          nextOptions.map((op)=>{
            if(!currentOptions.includes(op)){
              currentOptions.push(op)
            }
          })
          setSelectedOptions(currentOptions);
        };
      
        const removeOptionClick = (index)=> {
          const options = [...selectedOptions]
          options.splice(index, 1)
          setSelectedOptions(options)
        }
      
        const toggleDropdown = () => {
            setIsOpen(!isOpen);
        };
      
        return (
          <div 
              ref={dropDownToggle}
              onClick={toggleDropdown}
              className={`dropdown ${isOpen ? 'open' : ''}`}>
            <label htmlFor={ id }>{ title }</label>
            <div className="dropdown-toggle"
                   id={ id }
                   style={{borderColor : isOpen? "#5C59E8" : "#E0E2E7", outlineColor : isOpen? "#5C59E8" : "#E0E2E7"}}
                  >
                <div className={`multiple-custom-select`}>
                  {selectedOptions.length > 0 ? selectedOptions.map((vl, index)=>  <div key={vl + index} className='show-option'>
                                                                                            {vl} <FontAwesomeIcon 
                                                                                                        onClick={()=> removeOptionClick(index)} 
                                                                                                        icon={"fa-solid fa-xmark"}/>
                                                                                    </div>) : 'Select Tags'}
                </div>
                <FontAwesomeIcon icon={"fa-chevron-down"}/>
            </div>
            {isOpen && (
              <div className="dropdown-menu">
                  <select 
                        name={name}
                        multiple 
                        value={selectedOptions} 
                        onChange={handleOptionChange}>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option4">Option 4</option>
                    <option value="option4">Option 4</option>
                    <option value="option4">Option 4</option>
                  </select>
              </div>
            )}
          </div>
        );
}

export default DropDownSelect;
