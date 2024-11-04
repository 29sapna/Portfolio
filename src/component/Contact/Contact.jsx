import React from 'react'
import './Contact.css'
import m from '../../assets/email.png'
import c from '../../assets/c.png'
import l from '../../assets/l.png'


const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "38279588-bcc2-49cb-881a-c61d2b89d127");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
    };
    
    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I aim to provide clarity, assistance, and support based on the topics you bring up. If you have specific questions or need guidance on something, feel free to ask!</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img  src={m} alt=''></img> 
                            <p>sapnatiiwarii@gmail.com</p>

                        </div>
                        <div className="contact-detail">
                            <img src={c} alt=''></img> <p>+91 1234567890</p>

                        </div>
                        <div className="contact-detail">
                            <img src={l} alt=''></img> <p>Guj, India</p>

                        </div>

                    </div>
                </div>

                
                <form onSubmit={onSubmit} className='contact-right'>
                        <label htmlFor=''>Your Name</label>
                        <input type='text' placeholder='Enter your name' name='name'></input>
                        <label htmlFor=''>Your Email</label>
                        <input type='email' placeholder='Enter your email' name='email'></input>
                        <label htmlFor=''>Write your message here</label>
                        <textarea name='message' rows="8" placeholder='Enter your message'></textarea>
                        <button type='submit' className='contact-submit'>Submit now</button>

                    </form>


            </div>

        </div>
    )
}

export default Contact