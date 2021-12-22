import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router ,
		Route
} from "react-router-dom";
import Sidebar from "./Sidebar";
import About from "./About";
import Blog from "./Blog";
import Read from "./Read";
import Contact from "./Contact";
import Projects from "./Projects";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <div className="home">
        <Sidebar />

        <div className="main">
				<Route exact path="/">
						<About />
				</Route>
				<Route  path="/projects">
						<Projects />
				</Route>
				<Route   path="/blogs/:id">
						<Read />
				</Route>
				<Route exact path="/blogs">
						<Blog />
				</Route>
				<Route  path="/contact">
						<Contact />
				</Route>
        </div>
      </div>
    </Router>
  );
}
export default App;
const container = document.getElementById("app");
render(<App />, container);
