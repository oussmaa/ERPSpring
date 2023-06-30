/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { faBars, faMagnifyingGlass, faCalendarDays, faBell, faEnvelope, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import SearchBox from '../components/SearchBox';

import  profilePic  from '../images/profilePic.jpg'



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { useConsumerOpenClose } from '../hooks/myHooks';
library.add(faBars, faMagnifyingGlass, faCalendarDays, faBell, faEnvelope, faChevronDown)



const NavBar = () => {

  const { sideBarToggle } = useConsumerOpenClose()

  return (
    <div className='nav-bar'>
      <FontAwesomeIcon icon="fa-solid fa-bars" 
                        onClick={()=>sideBarToggle()}
      />
      <div className='nav-menu'>
        <div className='navbar-items'>
            <SearchBox />
            <div className='calender'>
                <label htmlFor='cal'>
                    <FontAwesomeIcon icon="fa-solid fa-calendar-days" />
                </label>  
                <input type='date' id='cal'/>
            </div>
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <FontAwesomeIcon icon="fa-solid fa-envelope" size='lg'/>
        </div>
        <div className='profile-item'>
            <div className='profile-pic'>
                <img src= {profilePic} />
            </div>
            <div className='profile-name'>
                <h4>essid med amine</h4>
                <p>manager</p>
            </div>
            <FontAwesomeIcon icon={'fa-solid fa-chevron-down'}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar
