import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <>
        {
          this.props.show === true ?
            <div id="modal">
              <button onClick={e => {
                this.props.closeModal(e);
              }}>X</button>
              <div id="modal-h1-div">
                <h1>Sondar</h1>
              </div>  
              <p>
                This project was created using the React framework, a part of the Yelp api, and the freegeoip geo-location api. The page renders and automatically shows you restaurants near your location. Additionally, you are able to search for restaurants in other cities and other countries(up to 32 different countries). 
              </p>
              <div className="modal-content">
              <video id="sondar-video" src="https://i.imgur.com/DN9MR8W.mp4" autoplay="true" CONTROLLER="false" loop="true" PLUGINSPAGE="http://www.apple.com/quicktime/"></video>
                <a href="https://sondar.surge.sh/" target="_blank" rel="noopener noreferrer">visit site</a>
              </div>
          </div> : null  
        }
        {
          this.props.showTwo === true ?
          <div id="modal-two">
          <button onClick={e => {
            this.props.closeModal(e);
              }}>X</button>
              <div id="modal-two-h1-div">
                <h1>Park Vision</h1>
              </div>
              <p>Parkvision will show information about different park events going on in New York at the time of your visit to the site. It uses the National Parks Service API and if you provide a two-letter state abbreviation it will diplay popular images of six different parks from that state as well as links to their respective websites.</p>
              <div className="modal-content">
                <video id="parkvision-video" src="https://i.imgur.com/yIDtjzN.mp4" autoplay="true" CONTROLLER="false" loop="true" PLUGINSPAGE="http://www.apple.com/quicktime/"></video>
                <a href="http://parkvision.surge.sh/" target="_blank" rel="noopener noreferrer">visit site</a>
              </div>  
          </div> : null
        }
        {
          this.props.showThree === true ?
          <div id="modal-three">
          <button onClick={e => {
            this.props.closeModal(e);
              }}>X</button>
              <div id="modal-three-h1-div">
                <h1>Undisclosed</h1>
              </div>
              <p>The purpose of this app is to allow the user to create blogs of places in their city that are secret or not very well known. Register, login, and you'll be able to see the locations that other user's have posted.</p>
              <div className="modal-content">
                <video id="undisclosed-video" src="https://i.imgur.com/D2mNbRb.mp4" autoplay="true" CONTROLLER="false" loop="true" PLUGINSPAGE="http://www.apple.com/quicktime/"></video>
                <a href="http://undisclosed.surge.sh/" target="_blank" rel="noopener noreferrer">visit site</a>
              </div>  
          </div> : null
        }
        {
          this.props.showFour === true ?
          <div id="modal-four">
          <button onClick={e => {
            this.props.closeModal(e);
          }}>X</button>
          <div id="modal-four-h1-div">
            <h1>abook</h1>
          </div>
          <p>This abook is for the readers. Register and login and you'll be able to create a list of books that you are planning on reading at some point. If you read something particularly interesting, attach a not to that book so that you can reference it later. Once done with the book you're currently on hit the finished button to transfer your book from the next/current to the finished section.</p>
          <div className="modal-content">
            <video id="abook-video" src="https://i.imgur.com/VuUdSwb.mp4" autoplay="true" CONTROLLER="false" loop="true" PLUGINSPAGE="http://www.apple.com/quicktime/"></video>
            <a href="http://abook.surge.sh/login" target="_blank" rel="noopener noreferrer">visit site</a>
          </div>      
          </div> : null
        }

      </>  
    )
  }
}
