import React from 'react'
import './Hero.css'
import port from '../../assets/port.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={port} alt=''></img>
      <h1><span>Hi, I'm Sapna Tiwari.</span></h1>
      <p>I am a Computer Science and Engineering (CSE)
        student at Parul University, currently in my 4th year.
        My skills include web development (HTML, CSS, JavaScript, React.js, Node.js)
        and C++ programming. I am passionate about coding and continuously working to
        enhance my knowledge and expertise in these areas.
      </p>

      <div className='hero-action'>
        <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className='hero-resume'>
          <a href="https://drive.google.com/file/d/1QID9WQ-HBCQGhUaUjPcpEaE-muapM5Rc/view?usp=drive_link" target='_blank' rel='noopener noreferrer'>My Resume</a>
        </div>
      </div>

    </div>
  )
}

export default Hero