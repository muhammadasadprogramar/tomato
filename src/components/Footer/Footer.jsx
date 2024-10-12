import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Choose from a diverse menu featuring a delectable array of dishes crafed with ths finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="social-icon" />
            <img src={assets.twitter_icon} alt="social-icon" />
            <img src={assets.linkedin_icon} alt="social-icon" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+92 031 2345678</li>
            <li>asad@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
        Copyright 2024 © Tomato.com - All Right Reservend.
      </p>
    </div>
  )
}

export default Footer