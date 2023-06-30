/* eslint-disable array-callback-return */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import { useOutsideAlerter } from '../hooks/myHooks';




const DropDownSelect = ({ title, id, name, options, setProductInfo, productInfo }) => {
        const [isOpen, setIsOpen] = useState(false);
        const dropDownToggle = useRef()

        useOutsideAlerter(dropDownToggle,(e) => {
            setIsOpen(false)
          })
        const handleOptionChange = (event) => {
                  const currentTags =[...productInfo.tag];

                  const nextOptions = [...Array.from(event.target.selectedOptions, (option)=> option.value)]
                  nextOptions.map((op)=>{
                    if(!currentTags.includes(op)){
                      currentTags.push(op)
                    }
                  })
                  setProductInfo({...productInfo, tag : currentTags});
        };
      
        const removeOptionClick = (index)=> {
                        const options = [...productInfo.tag]
                        options.splice(index, 1)
                        setProductInfo({...productInfo, tag : options})
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
                  {productInfo.tag.length > 0 ? productInfo.tag.map((vl, index)=>  <div key={vl + index} className='show-option'>
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
                        value={productInfo.tag} 
                        onChange={handleOptionChange}>
                      {options.map((op, index)=> {
                        return <option key={op + "-" + index} value={op.value}>{op.value}</option>
                      })}
                  </select>
              </div>
            )}
          </div>
        );
}

export default DropDownSelect;
