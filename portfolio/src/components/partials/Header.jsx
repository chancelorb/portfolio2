import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render () {
    return (
      <div className='header-container'>
        <div className='text-container row'>
          <a className={`col-2 trans`} href='#about'><h4>About</h4></a>
          <a className={`col-2 trans`} href='#projects'><h4>Portfolio</h4></a>
          <a className={`col-4 trans`} href='#land'><h4>HOME</h4></a>
          <a className={`col-2 trans`} href='#skills'><h4>Skills</h4></a>
          <a className={`col-2 trans`} href='#contact'><h4>Contact</h4></a>
        </div>
      </div>
    )
  }
}

export default Header;
