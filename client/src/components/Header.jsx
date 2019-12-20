import React from 'react';

export default function Header(props) {
  return (
    <>
      <div id="header">
        {
          props.scrollY < 200 ?
            <div id="header-anchor">
              <a href='mailto:nemicruz003@gmail.com' target="_blank" rel="noopener noreferrer" id="contactme-one">Contact Me</a>
              <a href="#projects-section" id="projects-in">Projects</a>
              <a href="https://docdro.id/8CPDUw8" target="_blank" rel="noopener noreferrer" id="about-me">About Me</a>
            </div> :
            <div id="header-anchor-two">
              <a href="#contact" id="contactme-two">Contact Me</a>
              <a href="#" id="projects-out">Projects</a>
              <a href="https://docdro.id/8CPDUw8" target="_blank" rel="noopener noreferrer" id="about-me-two">About Me</a>
            </div>
        }
      </div>
    </>
  )
}
