import React from 'react';
import ReactDOM from 'react-dom';
import '../styling/index.css';

const LoginPage = () => {
  return (
    <div>
      <div className='company-name-container'>
        <h1 className='company-name-title'>
          LifeScience Logistics
        </h1>
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