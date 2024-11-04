import React from 'react';
import './About.css';
import port from '../../assets/port.jpg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className='about-section'>
                <div className='about-left'>
                    <img src={port} alt='Personal Portfolio' className='profile-img'/>
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                       
                        <p> I have developed a strong foundation in various programming languages, 
                            with a particular focus on C++, JavaScript, and web development technologies like React, HTML, and CSS. 
                        </p>
                    </div>
                    <div className='about-skills'>
                        <div className='about-skill'><p>HTML & CSS</p><hr style={{width:"50%"}}></hr></div>
                        <div className='about-skill'><p>React JS</p><hr style={{width:"70%"}}></hr></div>
                        <div className='about-skill'><p>Javascript</p><hr style={{width:"60%"}}></hr></div>
                        <div className='about-skill'><p>C++</p><hr style={{width:"90%"}}></hr></div>

                    </div>

                </div>
            </div>

            <div className='about-achievements'>
                <div className='about-achievement'>
                    <h1>Fresher</h1>
                    <p>Excited to contribute and learn in the company!</p>
                </div>
                <hr />
                <div className='about-achievement'>
                    <h1>5+</h1>
                    <p>Projects Completed</p>
                </div>
            </div>


        </div>
    );
}

export default About;
