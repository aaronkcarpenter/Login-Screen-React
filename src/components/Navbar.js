import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
      {/* <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div> */}
        <img src={logo} alt='logo' className='logo' />
        <a className='navbar-link' href='/home'>Home</a>
        <a className='navbar-link' href='/wms'>WMS</a>
        <a className='navbar-link' href='/tms'>TMS</a>
        <a className='navbar-link' href='/tms'>Help</a>
      </div>
      
    </div>
  )
}

export default Navbar
