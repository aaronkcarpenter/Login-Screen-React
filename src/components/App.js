import React, { Component } from 'react';
import '../styling/index.css'
import '../styling/footer.css'
import LoginPage from './LoginPage'
import Footer from './Footer'
import Navbar from './Navbar';
import Test from './Test';
import LoginPageHooks from './LoginPageHooks';
import Welcome from './Welcome'

function App() {
  return (
    <div>
      <Navbar />
      {/* <LoginPage /> */}
      <Footer />
      {/* <Test s1='😆' s2='😆' s3='😆' s4="😁"/> */}
      <LoginPageHooks prop_one='Login' username='demouser@lslog.com' password='demotwice' />
    </div>
  );
}

export default App