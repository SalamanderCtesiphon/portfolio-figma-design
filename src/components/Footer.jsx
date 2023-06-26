import React from 'react'
import './Footer.css'
import gitHub from '../assests/icons/mark-github-24.svg'
import linkedIn from '../assests/icons/Linkedin.svg'
import figma from '../assests/icons/Figma.png'


function Footer() {
  return (
    <div className="footer-container">
      <p>Call Me: 1-719-419-0109</p>
      <p>Email: <a href='mailto:swbrookshire@gmail.com'>swbrookshire@gamil.com</a></p>
      <div className="footer-icons">
        <a href="https://github.com/SalamanderCtesiphon"><img src={gitHub} alt="git hub " /></a>
        <a href="https://www.linkedin.com/in/shannon-brookshire-817577265/"><img src={linkedIn} alt="git hub " /></a>
        <a href="https://www.figma.com/proto/tQoLIK6tzphStRzUc2jW3U/frontend-web-developer-portfolio-(Community)?node-id=1-2"><img src={figma} alt="git hub " /></a>
      </div>
    </div>
)
}

export default Footer