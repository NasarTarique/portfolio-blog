import React, { useState, useEffect } from "react";
import {render} from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar'
import About from './About'
import "./styles/main.css";

function App() {
  return (
		  <div className="home">
				  <Router>
				  <Sidebar />
				  <div className="main">
						  <About />
				  </div>
				  </Router>
		  </div>
  );
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
