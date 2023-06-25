import React from 'react'
import './Footer.css'
import gitHub from '../assests/icons/mark-github-24.svg'


function Footer() {
  return (
    <div className="footer-container">
      <p>Call Me: 1-719-419-0109</p>
      <p>Email: <a href='#'>swbrookshire@gamil.com</a></p>
      <div className="footer-icons">
        <a href="#"><img src={gitHub} alt="git hub " /></a>
        <a href="#"><img src={gitHub} alt="git hub " /></a>
        <a href="#"><img src={gitHub} alt="git hub " /></a>
      </div>
    </div>
)
}

export default Footer