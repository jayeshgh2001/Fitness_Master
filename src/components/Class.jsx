import React from 'react';
import './Class.css';
import img_1 from '../assets/class-1.jpg';  // Corrected import
import img_2 from '../assets/class-2.jpg';  // Corrected import

const Class = () => {
  return (
    <div className='class'>
      <div className="class-image">
        <img src={img_1} alt="Class 1" className='img_1' />  
        <img src={img_2} alt="Class 2" className='img_2' /> 
      </div>
      <div className="class-text">
        <h2>THE CLASS YOU WILL <br /> GET HERE</h2>
        <p>
          Led by our team of expert and motivational instructors, "The Class You Will Get Here" is a high-energy, results-driven session that combines a perfect blend of cardio, strength training, and functional exercises. Each class is carefully curated to keep you engaged and challenged, ensuring you never hit a plateau in your fitness endeavors.
        </p>
        <button className="btn">book a class</button>
      </div>  
    </div>
  );
}

export default Class;
