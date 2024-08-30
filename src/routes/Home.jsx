import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Program from '../components/Program'
import Class from '../components/Class'
import Join from '../components/Join'
import Plan from '../components/Plan'
import Review from '../components/Review'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <div className='home'>
      <Navbar />
      <Hero />
      <Program />
      <Class />
      <Join />
      <Plan />
      <Review />
      <Footer/>
      </div>
  )
}

export default Home