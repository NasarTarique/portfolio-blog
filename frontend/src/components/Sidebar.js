import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="icon">
        <svg
          width="103"
          height="78"
          viewBox="0 0 103 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.1016 24.3555H27.4219V67H16.875V24.3555H1.40625V15.8125H43.1016V24.3555Z"
            fill="white"
          />
          <path
            d="M83.947 67H73.4001L52.8689 33.3203V67H42.322V15.8125H52.8689L73.4353 49.5625V15.8125H83.947V67Z"
            fill="#BFC1C4"
          />
        </svg>
      </div>
      <div className="routes">
        <Link to="/">ABOUT ME</Link>
        <Link to="/">PROJECTS</Link>
        <Link to="/">BLOGS</Link>
        <Link to="/">CONTACT ME</Link>
			  <div className="padding1">
			  </div>
			  <div className="padding2"></div>
      </div>
    </div>
  );
};

export default Sidebar;
