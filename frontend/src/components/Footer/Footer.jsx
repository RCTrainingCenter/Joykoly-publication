import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img className='footer-logo' src={assets.logo} alt='' />
          <p>
          যোগাযোগের ঠিকানা <br />Joykoly Publications Ltd. <br />109, Green Road, Farmgate<br />Dhaka-1205, Bangladesh<br />

          </p>
          <div className='footer-social-icons'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TUCH</h2>
          <ul>
            <li>+01-678-343-450</li>
            <li>info.joykoly@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 @ Joykoly.com - All Right Reserved
      </p>
    </div>
  )
}

export default Footer
