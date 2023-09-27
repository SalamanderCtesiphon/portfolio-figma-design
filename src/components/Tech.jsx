import React from 'react'
import './Tech.css'

function Tech() {
  return (
    <section className="tech-section" id='technology-anchor'>
      <h1>Technologies</h1>
      <div className="skills">
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>HTML</p>
            <p className='skill-level'>Advanced</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect2"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>CSS</p>
            <p className='skill-level'>Advanced</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect2"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>JavaScript</p>
            <p className='skill-level'>Advanced</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect2"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>React</p>
            <p className='skill-level'>Intermediate</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect4"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>Figma</p>
            <p className='skill-level'>Novice</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect3"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>Firebase</p>
            <p className='skill-level'>Intermediate</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect4"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>NodeJS</p>
            <p className='skill-level'>Intermediate</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect4"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>ExpressJS</p>
            <p className='skill-level'>Novice</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect3"></div>
          </div>
        </div>
        <div className="group">
          <div className="text-box">
            <p className='skill-title'>NextJS</p>
            <p className='skill-level'>Intermediate</p>
          </div>
          <div className="bars">
            <div className="rect1"></div>
            <div className="rect4"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tech