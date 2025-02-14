import React from "react";
import "./RightSection.css";

const RightSection = () => {
  return (
    <div className="right-section">
      <div className="iphone-layout">
        <div className="screen">
          <p></p>
        </div>
      </div>
     
      <div className="container1">
        {/*
      <div> <div className="buttons-r">
      <button className="hex-buttons-r"></button>

      </div></div>*/}
        {/* Machine Learning Section */}
        <div className="ml">
          <header className="ml-header">Machine Learning</header>
          <p className="ml-content">
          Machine Learning involves creating systems that can learn and adapt without explicit programming. 
          </p>
        </div>
        

        {/* Web Developer Section */}
        <div className="dev">
          <header className="dev-header">Web Developer</header>
          <p className="dev-content">
          A Web Developer specializes in creating & designing websites.
          
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
