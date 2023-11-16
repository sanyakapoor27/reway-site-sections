import React from 'react';
import './Journey.css';
import journeyimg from "../assets/Website Ilustration.png";

const JourneySection = () => {
  return (
    <div className="journey-section">
      <div className="journey-title">Our Journey. Our Inspiration.
      <span className="after-element"></span>
      <span className="after-element-2"></span>
      </div>
      
      <img className="journey-img" src={journeyimg} alt="Monuments" />
      <div className="journey-content">
        <p>In a nation burdened by the mounting E-Waste crisis, a group of young and <br/> innovative tech visionaries embarked on a mission to revolutionise the eWaste landscape.
        </p>
        <h4>
        The Question Was, How?
        </h4>
        <p className="journey-content-2">Being undergrads we knew nothing about the E-Waste Landscape of the country. <br/>
        Our odyssey journey with an intensive, year long field investigation, which we <br/> fondly refer to as our 'Expedition in E-Waste Management.' 
        </p>
        <p>
        Our primary educational hub was the heart of Landfills and Waste Generating entities. <br/>With an unwavering commitment to digitising and bridging the divides among <br/>stakeholders, our dedicated team refined their expertise and <br/> transformed their dreams into reality.
        </p>
        <p>
        With this mission to catalyse the journey of building <br/>a circular economy “Reway” was born.
        </p>
      </div>
    </div>
  );
};

export default JourneySection;
