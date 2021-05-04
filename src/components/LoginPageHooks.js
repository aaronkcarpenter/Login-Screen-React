import React, { useState } from 'react'
import '../styling/index.css';
import login_image from '../assets/login_image.jpeg'

function LoginPageHooks(props) {
  // Verify that the prop is being passed down from the App to the component
  console.log(props.prop_one)

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
          {/* <label htmlFor='username'>Username</label> */}
          <p>Username</p>
          <input className='login-container__username' defaultValue={props.username}/>
        </div>
        <div className='login-container-password__container'>
          <p>Password</p>
          <input className='login-container__password' type='password' defaultValue={props.password} />
        </div>
        {/* this isn't needed when passing down prop into a functional component */}
        <div className='login-container-forgot__container'>
          <a href='/' className='login-container-forgot-link'>Reset Password</a>
        </div>
        <div className='button-container'>
          <button className='button'>{props.prop_one}</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPageHooks
