import React, { Component } from 'react'

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
              <p>
                This project was created using the React framework, a part of the Yelp api, and the freegeoip geo-location api. The page renders and automatically shows you restaurants near your location. Additionally, you are able to search for restaurants in other cities and other countries(up to 32 different countries). 
              </p>
            </div> : null  
        }
        {
          this.props.showTwo === true ?
          <div id="modal-two">
          <button onClick={e => {
            this.props.closeModal(e);
              }}>X</button>
            <p>Parkvision will show information about different park events going on in New York at the time of your visit to the site. It uses the National Parks Service API and if you provide a two-letter state abbreviation it will diplay popular images of six different parks from that state as well as links to their respective websites.</p>
          </div> : null
        }
        {
          this.props.showThree === true ?
          <div id="modal-three">
          <button onClick={e => {
            this.props.closeModal(e);
          }}>X</button>
          </div> : null
        }
        {
          this.props.showFour === true ?
          <div id="modal-four">
          <button onClick={e => {
            this.props.closeModal(e);
          }}>X</button>
          </div> : null
        }

      </>  
    )
  }
}
