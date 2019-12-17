import React from 'react';
import NehemiasResume from '../Files/NehemiasBrightResume.pdf';

export default function Header(props) {
  return (
    <>
      <div id="header">
        {
          props.scrollY < 200 ?
            <div id="header-anchor">
              <a href="#contact" id="contactme-one">Contact Me</a>
              <a href="#projects-section" id="projects-in">Projects</a>
              <a href="https://docdro.id/AOW8f68" target="_blank" rel="noopener noreferrer" id="about-me">About Me</a>
            </div> :
            <div id="header-anchor-two">
              <a href="#contact" id="contactme-two">Contact Me</a>
              <a href="#" id="projects-out">Projects</a>
              <a href="https://docdro.id/AOW8f68" target="_blank" rel="noopener noreferrer" id="about-me-two">About Me</a>
            </div>
        }
      </div>
    </>
  )
}
