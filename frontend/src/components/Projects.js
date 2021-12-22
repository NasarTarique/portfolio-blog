import React from "react";
import "./styles/projects.css"

const Projects = () =>{
		return (
				<div className="projects-container">
				<div className="projects">
						<p className="project-header">PROJECTS</p>
						<div className="project-block">
								<h2 className="project-name">TORRENT PY</h2>
								<p>A bit torrent client for the terminal implemented in python .</p>
								<div className="github-button">
										<a href="https://github.com/NasarTarique/torrent_py" target="_blank" rel="noopener noreferrer"> <i class="fab fa-github"></i> GITHUB</a>
										<a className="project-website" href="https://github.com/NasarTarique/torrent_py" target="_blank" rel="noopener noreferrer"> WEBSITE</a>
								</div>

						</div>
						<div className="project-block">
								<h2 className="project-name">BLOGTOWN</h2>
								<p>A bit torrent client for the terminal implemented in python .</p>
								<div className="github-button">
										<a href=""><i class="fab fa-github"></i> GITHUB</a>
								</div>
						</div>
				</div>
		</div>
		)
}

export default Projects;
