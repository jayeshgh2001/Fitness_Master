import React from 'react';
import './Plan.css';
import PlanData from './PlanData';

const Plan = () => {
  return (
    <div className="plan">
      <h2>OUR PRICING PLAN</h2>
      <p className='para'>Our pricing plan comes with various membership tiers, each tailored to cater to different preferences and fitness aspirations.</p>
      <div className="pr-cards">
        <PlanData
          heading="Basic Plan"
          price="$16"
          texts={['Smart workout plan', 'At Home Workout']}
        />
        
        <PlanData
            heading="Weekly Plan"
            price="$25"
            texts={['PRO Gyms', 'Smart workout plan','At home workout']}          
              />
        
        <PlanData
            heading="Monthly Plan"
            price="$45"
            texts={['ELITE Gyms & Classes','PRO Gyms','Smart workout plan', 'At Home Workout','Personal Training']}
        />
      </div>
    </div>
  );
};

export default Plan;
