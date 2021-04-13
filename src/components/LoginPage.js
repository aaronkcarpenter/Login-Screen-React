import React from 'react';
import ReactDOM from 'react-dom';
import '../styling/index.css';
import logo from '../assets/logo.png'
import login_image from '../assets/login_image.jpeg'

const LoginPage = () => {
  return (
    <div className='login-page-container'>
      <div className='company-name-container'>
        {/* <h1 className='company-name-title'>
          LifeScience Logistics
        </h1> */}
        {/* <img src='../assets/logo.png' alt='logo' /> */}
        <img src={login_image} alt='logo' className='picture' />
      </div>
      <div className='login-container'>
        <div className='login-title-container'>
          <h2 classname='login-title'>
            Login
          </h2>
        </div>
        <div className='login-container-username__container'>
          <p>Username</p>
          <input className='login-container__username' />
        </div>
        <div className='login-container-password__container'>
          <p>Password</p>
          <input className='login-container__password' />
        </div>
        <div className='login-container-forgot__container'>
          <a href='/' className='login-container-forgot-link'>Reset Password</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage