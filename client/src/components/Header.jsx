import React from 'react'

export default function Header(props) {
  return (
    <>
      <div id="header">
        {
          props.scrollY < 200 ? 
          <div id="header-anchor">
            <a id="contactme-one">Contact Me</a>
            <a id="projects-in">Projects</a>
            <a>About Me</a>
          </div> :
          <div id="header-anchor-two">
            <a id="contactme-two">Contact Me</a>
            <a id="projects-out">Projects</a>
            <a>About Me</a>
          </div>
        }
      </div>
    </>
  )
}