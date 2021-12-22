import React from "react";
import "./styles/about.css";
import { Link } from  'react-router-dom';

function About() {
  return (
    <div className="about-container">
      <div className="about">
        <h1 className="about-header"> ABOUT ME</h1>
        <p>
          <span id="span-hey">Hey</span>, I am   
          <div className="about-name"> 

				  <span>  Tarique Nasar.</span>
          </div>
				<br />I am a programmer and a 3rd year <br/>BTech student .<br /> I love
				coding , football and novels. <br/> check out my projects and blogs.
        </p>
			  <Link to="/contact">CONTACT</Link>
      </div>
      <div className="about-img">
        <img src="/static/frontend/laptop-portfolio.jpg" alt="" />
      </div>
    </div>
  );
}

export default About;
