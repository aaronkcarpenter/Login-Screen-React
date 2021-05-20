import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
      {/* <div className='logo-container'>
        <img src={logo} alt='logo' className='logo' />
      </div> */}
        <img src={logo} alt='logo' className='logo' />
        <Link to='/inventory' className='navbar-link'>Home</Link>
        <Link to='/reporting' className='navbar-link' >Reports</Link>
        <Link to='/receiving' className='navbar-link'>Inbounds</Link>
        <Link to='shipping' className='navbar-link'>Outbounds</Link>
      </div>
      
    </div>
  )
}

export default Navbar
