import React from 'react'
import './Programs.css'
import ProgramData from './ProgramData'

const Program = () => {
  return (
    <div className='programs'>
        <div className="program-top">
            <h2>explore our program</h2>
            <div className="arrows">
                  <i class="fa-solid fa-arrow-left"></i>
                  <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div className="programs-cards">
          <ProgramData
            logo="fa-solid fa-mitten"
            heading='strength'
            text = 'Embrace the essence of strength as we delve into its various dimensions physical, mental, and emotional.'
        />
        
        <ProgramData
            logo="fa-solid fa-heart-pulse"
            heading='Physical Fitness'
            text = 'It encompasses a range of activities that improve health, strength, flexibility, and overall well-being.'
        />
        
        <ProgramData
            logo= "fa-solid fa-person-running"
            heading='Fat Lose'
            text = "Through a combination of workout routines and expert guidance, we'll empower you to reach your goals."
        />
        
        <ProgramData
            logo="fa-solid fa-briefcase"
            heading='Weight Gain'
            text = "Designed for individuals, our program offers an effective approach to gaining weight in a sustainable manner."
          />
        </div>
          
    </div>
  )
}

export default Program