import React from 'react'
import './Projects.css'
import portfolio from '../assests/images/portfolio.png'

function Projects() {
  return (
    <section className="projects">
      <h1>Projects</h1>
      <div className="projects-container">
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many animations and transformations. It is hosting on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'>Live Site</button>
            <button className='card-btn'>Git Repo</button>
          </div>
        </div>
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many animations and transformations. It is hosting on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'>Live Site</button>
            <button className='card-btn'>Git Repo</button>
          </div>
        </div> 
      </div>
      <div className="projects-container">
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many animations and transformations. It is hosting on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'>Live Site</button>
            <button className='card-btn'>Git Repo</button>
          </div>
        </div>
        <div className='card'>
          <img src={portfolio} alt="screenshot" />
          <h2>Previous Portfolio</h2>
          <div className="color-bar"></div>
          <p>This is my previous portfolio, that I built from scratch using ReactJS. It uses many animations and transformations. It is hosting on firebase hosting and I think it demonstrates my skills with vanilla CSS. And my ability to deploy a fully functional website while utilizing version control and industry standard best-practices.</p>
          <div className="btn-container">
            <button className='card-btn'>Live Site</button>
            <button className='card-btn'>Git Repo</button>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default Projects