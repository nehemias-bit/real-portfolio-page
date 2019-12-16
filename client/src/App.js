import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Splash from './components/Splash';
import Projects from './components/Projects';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: null
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
    this.setState({
      scrollY: window.scrollY
    });
  }


  render() {
    return (
      <div className="app">
        <Header scrollY={this.state.scrollY} />
        <Splash />
        <Projects />
      </div>
    );
  } 
}

export default App;
