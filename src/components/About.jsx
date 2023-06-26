import React from 'react'
import './About.css'

function About() {
  return (
    <section className="projects" id='about-anchor'>
      <h1>About</h1>
      <div className="group20">
        <div className="line-box">
          <div className="dates">
            <p>2020</p>
            <p>2021</p>
            <p>2022</p>
            <p>2023</p>
          </div>
          <div id="time-line">
            <div className="bullets"></div>
            <div className="bullets"></div>
            <div className="bullets"></div>
            <div className="bullets"></div>
          </div>
        </div>
        <div className="text-columns">
          <p>Became intrested in tech. Began learing 6502 assembly. Set my Git Hub profile. Studied fundamental computer science concepts.</p>
          <p>Became interested in learning to code. Started to learn Python, while coding games in pygame.</p>
          <p>Began my serious journey towards learnin web developement. Started to work through the Odin Project curriculum </p>
          <p>Completed the Odin Projects' front end lessons and began looking for a job. Began contributing to open-source and free-lancing on upwork.</p>
        </div>
      </div>
    </section>
  )
}

export default About