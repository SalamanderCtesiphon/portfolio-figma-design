import React from 'react'
import './Projects.css'
import portfolio from '../assests/images/portfolio.png'
import coffee from '../assests/images/coffee-site.png'
import memory from '../assests/images/memory-game.png'
import landingPage from '../assests/images/landing-page-screenshot.png'
import alog from '../assests/images/cypher-blog.png'
import resume from '../assests/images/resume-editor.png'
import weather from '../assests/images/weatherAppScreenShot.png'

function Projects() {
  return (
    <section className="projects" id='projects-anchor'>
      <h1>Projects</h1>
      <div className="projects-container">
      <div className='card'>
          <img id='rest' src={landingPage} alt="screenshot" />
          <h2>Figma Design Landing Page</h2>
          <div className="color-bar"></div>
          <p>This is a static informational landing page for a hypothetical business. It was created from a Figma design. And it utilizes advanced vanilla CSS for styling. The site is hosted on Firebase webhosting. It demonstrates my ability to implement a website from design files.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://landing-page-1059a.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/landing-pager-figma-design">Git Repo</a></button>
          </div>
        </div> 
        <div className='card'>
          <img src={weather} alt="screenshot" />
          <h2>Weather App</h2>
          <div className="color-bar"></div>
          <p>This is a static website built with javascript and css. It utilizes web api calls with promised-based asynchronous javascript fetch requests. It incorporates responsive design and is loosely styled from a figma design file. The site is hosted on firebase webhosting. Other skills required for this site are working with and parsing JSON and rendering list dynamically with javascript array methods.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://theweatherapp-d677a.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/not-another-weather-app-noooo">Git Repo</a></button>
          </div>
        </div>
      </div>
      <div className="projects-container">
        <div className='card'>
          <img src={coffee} alt="screenshot" />
          <h2>Coffee Wholesale Site</h2>
          <div className="color-bar"></div>
          <p>This a full-stack web application. It is hosted on firebase web hosting and uses firebase for the database and user authentication. It is even coded for stripe payment processing. It incoporates responsive web design. React Context API is used to manage the shopping cart state so that items in the cart can be displayed across the app.</p>
          <div className="btn-container">
            <button className='card-btn'> <a href="https://coffee-importers-bb881.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/coffee-importers">Git Repo</a></button>
          </div>
        </div>
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many custom animations and transformations. It is hosted on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://professional-portfolio-7096f.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/professional-portfolio">Git Repo</a></button>
          </div>
        </div> 
      </div>
      <div className="projects-container">
        
      </div>
    </section>
  )
}

export default Projects