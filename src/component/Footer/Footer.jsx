import React from 'react'
import './Footer.css'
import profile from '../../assets/profile.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <div className='footer-top-left'>
            <p> I am a fresher actively seeking job opportunities<br/> in web development. With a strong foundation in frontend technologies<br/> and a passion for creating clean, user-friendly interfaces,<br/> I am eager to apply my skills <br/>and learn from real-world projects. </p>                
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={profile} alt=''></img>
                    <input type='email' placeholder='Enter your email'></input>

                </div>
                <div className="footer-subscribe">
                    Subscribe
                </div>
            </div>

        </div>
        <hr/>
        <div className="footer-bottom">
            <p className='footer-bottom-left'>2023 Sapna Tiwari. All rights.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
