import React, { Component } from 'react' ;
import { Link }  from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div id='land' className='landing-container'>
      <div className='landing-text-container'>
        <div className='row'>
          <h1 className='col-3 land-name'>Chance<br /> Baars.</h1>
          <div className='col-1 land-hr'></div>
          <h3 className='col-8 land-desc'>Fullstack Web Developer</h3>
        </div>
      </div>
    </div>
  )
}
export default Landing;
