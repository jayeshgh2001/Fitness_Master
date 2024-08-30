import React from 'react';
import './Plan.css';

const PlanData = (props) => {
  return (
    <div className="pr-card">
      <h3>{props.heading}</h3>
      <h2>{props.price}</h2>
      <div className="line"></div>

      <div className="p-texts">
      {props.texts.map((text, index) => (
        <p key={index}>
          <i className="fa-regular fa-circle-check"></i> {text}
        </p>
      ))}
        </div>
      <button className="p-btn">Join Now</button>
    </div>
  );
};

export default PlanData;
