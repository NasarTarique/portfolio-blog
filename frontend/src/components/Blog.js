import React from "react";
import { Link } from "react-router-dom";
import "./styles/blogs.css";
const Blog = () => {
  return (
    <div className="blogs-container">
      <div className="blogs">
		<p className="blogs-header">BLOGS</p>
        <div className="blog-block">
          <h2 className="blog-name">How I Preview Markdown in Neovim [LINUX]</h2>
          <p>There are a number of ways you can  preview  markdown in  neovim  .  The method that i use very often is using pandoc  and zathura and the other method  i will be going through is through a plugin</p>
          <div className="read-button">
				  <Link to="/blogs/1">READ MORE</Link>
          </div>
        </div>
        <div className="blog-block">
          <h2 className="blog-name">TORRENT PY</h2>
          <p>A bit torrent client for the terminal implemented in python .</p>
          <div className="read-button">
            <a
              href="https://github.com/NasarTarique/torrent_py"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <i class="fab fa-github"></i> GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
