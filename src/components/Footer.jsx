import React from 'react'
import './Footer.css'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
      <div className='footer'>
          <div className="f-col">
              <img src={logo} alt="" />
              <p>Take the first step towards a healthier, stronger you with our unbeatable pricing plans. Let's sweat, achieve, and conquer together!</p>
              <div className="social">
                  <i class="fa-brands fa-facebook-f"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
              </div>
          </div>
          <div className="f-col">
              <h3>company</h3>
              <a href="">Business</a>
              <a href="">Franchise</a>
              <a href=''>Partnership</a>
              <a href=''>Network</a>
          </div>
          <div className="f-col">
              <h3>about us</h3>
              <a>Blog</a>
              <a>Security</a>
              <a>Careers</a>
          </div>
          <div className="f-col">
              <h3>contact</h3>
              <a>Contact Us</a>
              <a>Privacy & Policy </a>
              <a>Terms & Conditions</a>
              <a>BMI Calculator</a>
          </div>
    </div>
  )
}

export default Footer