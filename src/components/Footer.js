import React from 'react'
import '../styling/footer.css'

const Footer = () => {
  return (
    <div>
      <div className='footer-container'>
        <div className='link-one-container'>
          <a className='link-one' href='/home'>Home</a>
        </div>
        <div className='link-one-container'>
          <a className='link-one' href='/home'>Help</a>
        </div>
        <div className='link-one-container'>
          <a className='link-one' href='/home'>FAQ</a>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
