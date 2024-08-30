import React from 'react'
import join from '../assets/join.jpg'
import './Join.css'

const Join = () => {
  return (
    <div className='join'>
          <h2>why join us?</h2>
          <p className='para'>Our diverse membership base creates a friendly and supportive  atmosphere, where you can make friends and stay motivated.</p>
          <div className="join-image">
              <img src={join} alt="" />
              <div className="row">
                  <div className="join-col">
                    <i class="fa-solid fa-person-rays"></i>
                    <div className="join-text">
                        <h3>Personal Trainer</h3>
                        <p>Unlock your potential with our expert Personal Trainers.</p>
                    </div>
                  </div>
                  <div className="join-col">
                  <i class="fa-solid fa-video"></i>
                    <div className="join-text">
                        <h3>Practice Sessions</h3>
                        <p>Elevate your fitness with practice sessions.</p>
                    </div>
                  </div>
                  <div className="join-col">
                  <i class="fa-solid fa-building-user"></i>
                    <div className="join-text">
                        <h3>Good Management</h3>
                        <p>Supportive management, for your fitness success.</p>
                    </div>
                  </div>
              </div>
          </div>  
    </div>
  )
}

export default Join