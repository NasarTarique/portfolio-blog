import React from "react";
import "./styles/about.css";
// import {  } from  'react-router-dom';

function About() {
  return (
		  <div className="about-container">
      <div className="about">
        <h1 className="about-header"> ABOUT ME</h1>
        <p>
          <span id="span-hey">Hey</span>, I am
          <span className="about-name">Tarique Nasar</span>. I am a programmer
          and a 2nd year BTech student . I love coding , football and novels.
          check out my projects and blogs.
        </p>
      </div>
      <div className="about-img">
			  <img src="/static/frontend/laptop-portfolio.jpg" alt="" />
	  </div>
    </div>
  );
}

export default About;
