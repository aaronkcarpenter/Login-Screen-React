import React, { useState, useEffect } from 'react'
import '../styling/index.css';
import login_image from '../assets/login_image.jpeg'

import { useDispatch } from 'react-redux';
import { addUser } from '../redux/slices/testSlice';

import Navbar from './Navbar';
import Footer from './Footer';

const LoginPageHooks = (props) => {
  // Verify that the prop is being passed down from the App to the component
  // console.log(props.prop_one)

  const [userName, setUserName] = useState(props.username)
  const [password, setPassword] = useState(props.password)
  const [attempts, setAttempts] = useState(0)
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    if(userName) {
      dispatch(
        addUser({
          name: userName,
        })
      );
    }
  };

  // Utilizing useEffect() in place of lifecycle methods
  useEffect(() => {
    console.log('I have just mounted!')
  }, []);

  // handleChange = (e) => {
  //   this.setUserName({
  //     userName: e.target.value
  //   });
  // }

  
  return (

    <div>
      <Navbar />
      <div className='login-page-container'>
        <div className='company-name-container'>
          {/* <h1 className='company-name-title'>
            LifeScience Logistics
          </h1> */}
          {/* <img src='../assets/logo.png' alt='logo' /> */}
          <img src={login_image} alt='logo' className='picture' />
        </div>
        <div className='login-container'>
          <form onSubmit={onSubmit}>
            <div className='login-container-username__container'>
              {/* <label htmlFor='username'>Username</label> */}
              <label>Username</label>
              <input type='email' className='login-container__username' placeholder='Enter Username' onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className='login-container-password__container'>
              <label>Password</label>
              <input className='login-container__password' type='password' placeholder='Enter Password' />
            </div>
            {/* this isn't needed when passing down prop into a functional component */}
            <div className='login-container-forgot__container'>
              <a href='/' className='login-container-forgot-link'>Reset Password</a>
            </div>
            <div className='login-title-container'>
              <h2 className='login-title'>
                Login Attempts: { attempts }
              </h2>
              { attempts > 2 &&
                <h4>
                  See Manager: Login Attempts Exceeded
                  <a href='/' className='login-container-forgot-link'>Reset Password</a>
                </h4>

              }
            </div>
            <div className='button-container'>
              <button type='submit' className='button' onClick={() => setAttempts(attempts + 1)}>{props.prop_one}</button>
            </div>

          </form>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default LoginPageHooks
