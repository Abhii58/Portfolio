import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1 className="navbar-name">Abhishek</h1>
      </div>
      <div className="navbar-center">
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </div>
      <div class="navbar-right">
    <a href="https://www.linkedin.com/in/abhishek-bijalwan-6125432a2" target="_blank">
        <button class="social-button linkedin">LinkedIn</button>
    </a>
    <a href="https://www.instagram.com/abhishekbijalwan58/" target="_blank">
    <button class="social-button instagram">Instagram</button>
    </a>
    <a href="https://www.Github.com/Abhii58/">
    <button class="social-button github">GitHub</button>
    </a>
</div>


    </nav>
  );
};

export default Navbar;
