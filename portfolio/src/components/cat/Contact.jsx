import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  return(
    <div id='contact' className='contact-container-b'>
      <div className='contact-container'>
        <div className='contact-text'>
          <h1>CONTACT</h1>
          <hr />
          <div className='row contact-content-container'>
            <div className='col-4'><a target='_blank' href='https://github.com/chancelorb'>GitHub</a></div>
            <div className='col-4'><a target='_blank' href='https://www.linkedin.com/in/chancebaars'>Linked In</a></div>
            <div className='col-4'><a href='mailto:chancebaars@gmail.com'>mail</a></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Contact;
