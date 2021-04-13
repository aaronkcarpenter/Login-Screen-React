import React, { Component } from 'react';
import '../styling/index.css'
import '../styling/footer.css'
import LoginPage from './LoginPage'
import Footer from './Footer'
import Navbar from './Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App