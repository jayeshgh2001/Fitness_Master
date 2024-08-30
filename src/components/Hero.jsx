import React from 'react'
import './Hero.css'
import hero_img from '../assets/header.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-text">
            <h4>best fitness in the town</h4>
            <h1><span>MAKE</span>  YOUR BODY SHAPE</h1>
            <p>Unleash your potential and embark on a journey towards a stronger, fitter, and more confident you. Sign up for 'Make Your Body Shape' now and witness the incredible transformation your body is capable of!</p>
            <button className="btn">get started</button>
        </div>
        <div className="hero-image">
          <img src={hero_img} alt="" />
          <div className="box"></div>
      </div>
        <div className="text">fitness</div>
    </div>
  )
}

export default Hero