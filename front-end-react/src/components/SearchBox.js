import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


library.add(faMagnifyingGlass)

const SearchBox = () => {
  const [isFocused, setFocused] = useState(false)
  const searchRef = useRef(null)
  
  useEffect(()=> {
    if(isFocused)searchRef.current.focus()
  }, [isFocused])

  const handelClick = ()=>{
    if(searchRef.current.value !== ""){return}
    setFocused(!isFocused)
  }

  const handleFormSubmit = (e)=>{
    e.preventDefault()
  }
  return (
    <form className='searchBox' 
            onSubmit={handleFormSubmit}>
                        <input 
                            ref={searchRef}
                            className="searchInput" 
                            type="text" 
                            name="" 
                            placeholder="Search"
                            style={{width : isFocused? "80%" : "0px"}} />
                        <button  
                                className="searchButton" 
                                onClick={handelClick} href="#">
                                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                        </button>
    </form>
  )
}

export default SearchBox
