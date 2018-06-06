import React, { Component } from 'react' ;
import { Link }  from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div id='' className='landing-container'>
      <div className='landing-text-container'>
        <div className='row'>
          <h1 className='col-3 land-name'>Chance<br /> Baars.</h1>
          <div className='col-1 land-hr'></div>
          <div className='col-8 land-desc'>
            <h3 className='land-desc-t'>Fullstack Web Developer</h3>
            <p>I do with passion what I am good at.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Landing;
