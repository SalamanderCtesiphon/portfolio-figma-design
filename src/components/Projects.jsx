import React from 'react'
import './Projects.css'
import portfolio from '../assests/images/portfolio.png'
import coffee from '../assests/images/coffee-site.png'
import memory from '../assests/images/memory-game.png'
import resturant from '../assests/images/resturant-page.png'

function Projects() {
  return (
    <section className="projects" id='projects-anchor'>
      <h1>Projects</h1>
      <div className="projects-container">
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many animations and transformations. It is hosting on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://professional-portfolio-7096f.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/professional-portfolio">Git Repo</a></button>
          </div>
        </div>
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
      </div>
      <div className="projects-container">
        <div className='card'>
          <img src={memory} alt="screenshot" />
          <h2>Memory Game</h2>
          <div className="color-bar"></div>
          <p>This is a single-page React application, which is hosted on GitHub.It incorporates responsice design. It's a memory game where the player clicks each card once. If the player clicks the same card twice the number of uniques clicks is compared to the all-time highest unique clicks. And if that players number is greater the new high score is displayed on the screen.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://memory-game-1f43b.web.app/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/memory-card-react-app">Git Repo</a></button>
          </div>
        </div>
        <div className='card'>
          <img id='rest' src={resturant} alt="screenshot" />
          <h2>Resturant Page</h2>
          <div className="color-bar"></div>
          <p>This is a single page informational landing page for a hypothetical resturant.</p>
          <div className="btn-container">
            <button className='card-btn'><a href="https://salamanderctesiphon.github.io/resturant-page-project/">Live Site</a></button>
            <button className='card-btn'><a href="https://github.com/SalamanderCtesiphon/resturant-page-project">Git Repo</a></button>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Projects