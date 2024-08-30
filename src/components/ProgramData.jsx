import React from 'react'
import './Programs.css'

const ProgramData = (props) => {
  return (
      <div className="p-card">
        <div className="c-logo">
          <i className={props.logo}></i>
        </div>
        <h3>{props.heading}</h3>
        <p>{props.text}</p>
        <a href="">Join Now <i class="fa-solid fa-arrow-right"></i> </a>
      </div> 
  )
}

export default ProgramData