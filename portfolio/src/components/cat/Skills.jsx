import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Skills.css';

class Skills extends Component {
  constructor() {
    super()

  }

  render () {
    return(
      <div id='skills' className='skill-container'>
        <div className='skill-text'>
          <h1>SKILLS</h1>
          <hr />
        </div>
      </div>
    )
  }
}

export default Skills;
