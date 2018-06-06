import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Header from './components/partials/Header'
import Landing from './components/cat/Landing'
import About from './components/cat/About'
import Projects from './components/cat/Projects'
import Skills from './components/cat/Skills'
import Contact from './components/cat/Contact'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
      </div>
    );
  }
}

export default App;
