/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import logoImg from '../images/logoImg.jpg'
import { useConsumerOpenClose } from '../hooks/myHooks'

const Logo = () => {
  const { sideBarOpen } = useConsumerOpenClose()
  return (
    <div className='logo'>
      <div className='logo-img'>
        <img src={logoImg}/>
      </div>
      {sideBarOpen && <div className='logo-text'>
        <h1>Dashlab</h1>
      </div>}
    </div>
  )
}

export default Logo
