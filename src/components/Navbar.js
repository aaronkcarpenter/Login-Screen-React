import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
      {/* <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div> */}
        <img src={logo} alt='logo' className='logo' />
        <nav>
          <NavLink to='/home' className='navbar-link'>Home</NavLink>
          <NavLink to='/reporting' className='navbar-link' >Reports</NavLink>
          <NavLink to='/receiving' className='navbar-link'>Inbounds</NavLink>
          <NavLink to='shipping' className='navbar-link'>Outbounds</NavLink>
          <NavLink to='timeclock' className='navbar-link'>TimeClock</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
