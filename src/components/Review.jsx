import React from 'react'
import './Review.css'
import user_img from '../assets/member.jpg'

const Review = () => {
  return (
      <div className='review'>
          <div className="review-top">
              <div className="r-logo">
              <i class="fa-solid fa-quote-right"></i>
              </div>
              <div className="r-text">
                  <h3>member review</h3>
                  <p>What truly sets this gym apart is their expert team of trainers. The trainers are knowledgeable, approachable, and genuinely invested in helping members achieve their fitness goals. They take the time to understand individual needs and create personalized workout plans, ensuring maximum results and safety.</p>
              </div>
          </div>
          <div className="icons">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half-stroke"></i>
          </div>

          <div className="user">
              <div className="info">
                  <img src={user_img} alt="" />
                  <div className="info-text">
                      <h3>jane cooper</h3>
                      <p>Software Developer</p>
                  </div>
              </div>
              <div className="next">
              <i class="fa-solid fa-arrow-left"></i>
              <i class="fa-solid fa-arrow-right"></i>
              </div>
          </div>
    </div>
  )
}

export default Review