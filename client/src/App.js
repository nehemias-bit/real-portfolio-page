import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Splash from './components/Splash';
import Projects from './components/Projects';
import Modal from './components/Modal';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      scrollY: null,
      show: false,
      showTwo: false,
      showThree: false,
      showFour: false
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

  showModal = (e) => {
      this.setState({
        show: true
      })
  }

  showModalTwo = (e) => {
      this.setState({
        showTwo: true
      })
  }

  showModalThree = (e) => {
    this.setState({
      showThree: true
    })
  }

  showModalFour = (e) => {
    this.setState({
      showFour: true
    })
  }

  closeModal = (e) => {
    this.setState({
      show: false,
      showTwo: false,
      showThree: false,
      showFour: false
    })
  }


  render() {
    return (
      <div className="app">
        <Header scrollY={this.state.scrollY} />
        <Splash />
        <Projects showModal={this.showModal} showModalTwo={this.showModalTwo} showModalThree={this.showModalThree} showModalFour={this.showModalFour}/>
        <Modal show={this.state.show} showTwo={this.state.showTwo} showThree={this.state.showThree} showFour={this.state.showFour} closeModal={this.closeModal} />
        <Footer />
      </div>
    );
  } 
}

export default App;
