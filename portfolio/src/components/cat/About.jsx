import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div id='about' className='about-container'>
      <div className='about-text'>
        <h1>ABOUT</h1>
        <hr />
        <div className='row about-content-container'>
          <div className='col-6'>
            <img className='about-img' alt='pic is broken' src='https://media.licdn.com/dms/image/C5603AQFQZWy13BQghg/profile-displayphoto-shrink_100_100/0?e=1533772800&v=beta&t=ulA1K6iAEPO2NOpgFzoXMmdFlq_HENCWmggDxcr07Hw' />
          </div>
          <div className='col-5'>
          <div className='quote-container'>
            <p>When education and resources are available without price tag, there will be no limit to human potential.</p>
            <h4>- Jacque Fresco</h4>
          </div>
          <p>There is no limit to web development.</p>
          </div>
          <div className='col-1'></div>
        </div>
        <hr className='a-lower-hr'/>
      </div>
    </div>
  )
}

export default About;
