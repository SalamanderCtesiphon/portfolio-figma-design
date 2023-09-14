import React from 'react'
import './About.css'

function About() {
  return (
    <section className="projects" id='about-anchor'>
      <h1>About</h1>
      <div className="group20">
        <div className="line-box">
          <div className="dates">
            <p>1965</p>
            <p>1974</p>
            <p>1984</p>
            <p>1995</p>
          </div>
          <div id="time-line">
            <div className="bullets"></div>
            <div className="bullets"></div>
            <div className="bullets"></div>
            <div className="bullets"></div>
          </div>
        </div>
        <div className="text-columns">
          <p>Two computers at MIT Lincoln Lab communicate with one another using packet-switching technology.</p>
          <p>The first Internet Service Provider (ISP) is born with the introduction of a commercial version of ARPANET, known as Telenet.</p>
          <p>William Gibson, author of "Neuromancer," is the first to use the term "cyberspace."</p>
          <p>Brendan Eich created JavaScript. This is widely regarded as a mistake.</p>
        </div>
      </div>
    </section>
  )
}

export default About