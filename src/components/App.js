import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import '../styling/index.css'
import '../styling/footer.css'

import LoginPage from './LoginPage'
import Footer from './Footer'
import Navbar from './Navbar';
import Test from './Test';
import LoginPageHooks from './LoginPageHooks';
import Welcome from './Welcome'

import { useDispatch, useSelector } from 'react-redux';
// import  { addUser } from '../redux/slices/testSlice';
import { addUser } from '../redux/slices/userSlice';

const App = () => {
  const dispatch = useDispatch();
  // const { users } = useSelector((state) => state).userSlice;

  const [page, setPage] = useState({page: 'login'});

  const changePage = (newPage) => {
    this.setPage({
      page: newPage
    })
  }

  return (
    <div>
      <Switch>
        <Route path='/' component={LoginPageHooks} prop_one='Submit' exact/>
        <Route exact path='/welcome' component={Welcome} />
        <Route render={() => <h1>PAGE NOT FOUND</h1>} />
        {/* <LoginPage /> */}
        {/* <Test s1='😆' s2='😆' s3='😆' s4="😁"/> */}
        {/* <LoginPageHooks prop_one='Login' username='demouser@lslog.com' password='demotwice' /> */}
      </Switch>
    </div>
  );
}

export default App