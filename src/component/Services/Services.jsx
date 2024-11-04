import React from 'react'
import './Services.css'
import Services_data from '../../assets/Services_data.jsx'
import arrow from '../../assets/arrow.png'

const Services = () => {
  return (
    <div id='services' className='services'> 
    <div className="services-title">
        <h1>My Services</h1>
    </div>
    <div className="services-container">
        {Services_data.map((service,index)=>{
            return <div key={index} className='services-format'>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_desc}</p>
                <div className='services-readmore'>
                    <p>Read More</p>
                    <img src={arrow} alt=''></img>
                </div>
            </div>
        })  }

    </div>


    </div>
  )
}

export default Services