import React from 'react';
import './Header.css';
import logo from '../assests/icons/logo.svg';
import gitHub from '../assests/icons/mark-github-24.svg';
import linkdIn from '../assests/icons/Linkedin.svg';
import figma from '../assests/icons/Figma.png'

function Header() {
  return (
    <header>
      <div className="header-container-1">
        <img src={logo} alt="logo" id='logo'/>
        <h2 className="header-title">Portfolio</h2>
      </div>
      <div className="header-container-2">
        <a href="#projects-anchor" className="link"><h2>Projects</h2></a>
        <a href="#technology-anchor" className="link"><h2>Technologies</h2></a>
        <a href="#about-anchor" className="link"><h2>About</h2></a>
      </div>
      <div className="header-container-3">
        <a href="#" className="logo-link"><img src={gitHub} alt="gitHub" /></a>
        <a href="#" className="logo-link"><img src={linkdIn} alt="linked in" /></a>
        <a href="#" className="logo-link"><img src={figma} alt="figma" /></a>
      </div>
    </header>
  )
}

export default Header