import React from 'react'
import './Projects.css'
import portfolio from '../assests/images/portfolio.png'
import coffee from '../assests/images/coffee-site.png'
import landingPage from '../assests/images/landing-page-screenshot.png'
import weather from '../assests/images/weatherAppScreenShot.png'
import blog from '../assests/images/blogapp.png'
import memoryGame from '../assests/images/memory-game.png'

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
          <img src={blog} alt="screenshot" />
          <h2>Blog CMS Application</h2>
          <div className="color-bar"></div>
          <p>This a full-stack web application built using NextJS with TypeScript and TailwindCSS. It is hosted on Vercel. It is a blog CMS application that uses NodeJS file system methods to render a list of blog article links. Dynamic routes are automatically generated and the appropriate blog article is displayed to the user. This app makes use of performance optimizations availible in NextJS.</p>
          <div className="btn-container">
            <button className='card-btn'> <a href="https://davegraynextjstutoriallesson06.vercel.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/davegraynextjstutoriallesson06">Git Repo</a></button>
          </div>
        </div>
        <div className='card'>
          <img src={memoryGame} alt="screenshot" />
          <h2>Memory Game</h2>
          <div className="color-bar"></div>
          <p>This is a React Application that tests the user's memory skills. A set of cards are shuffled and then displayed on the screen.The player chooses cards until the same card is selected twice. Every time the player selects a card the scroreboard keeps track of the number of successful selections. When a player chooses the same card twice the game is over. The high score for all aattempts is displayed.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://memory-game-1f43b.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/memory-game">Git Repo</a></button>
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