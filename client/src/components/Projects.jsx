import React from 'react'

export default function Projects(props) {
  return (
    <div id="projects-section">

      <h1 id="highlighted-pros">Highlighted Projects</h1>
      <hr></hr>
				<div className="grid">
          
        {/* Sondar */}
					<section className="effect-terry">
						<img src="https://i.imgur.com/Ynmt9Gi.jpg" alt="img16"/>
						<div id="figcap">
							<h2>Sondar</h2>
							<p>

                <a href="#" id="second-anchor"><i class="devicon-react-original-wordmark"></i></a>
                                                
                
						    <a onClick={e => {
                  props.showModal();
                }} href="#modal" id="about">about</a>
              
                <a id="sondar-github" href="https://github.com/nehemias-bit/second-project.git" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain-wordmark"></i></a>

                <a href="#" id="last-anchor"><i class="devicon-javascript-plain"></i></a>
                <a id="sondar-html"><i class="devicon-html5-plain-wordmark"></i></a>
                <a id="sondar-css"><i class="devicon-css3-plain-wordmark"></i></a>
							</p>
						</div>			
          </section>


          {/* Parkvision */}
					<section className="effect-terry">
						<img src="https://i.imgur.com/MUJC8tG.png" alt="img26"/>
						<div id="figcap">
							<h2>Parkvision</h2>
							<p>
              
              <a href="#" id="parkvision-html"><i class="devicon-html5-plain-wordmark"></i></a>
              
								<a onClick={e => {
                  props.showModalTwo();
                }} href="#modal-two" id="parkvision-about">about</a>
              
                <a id="parkvision-git-hub-logo" href="https://github.com/nehemias-bit/First-Project.git" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain-wordmark"></i></a>
              
              <a href="#" id="parkvision-javascript"><i class="devicon-javascript-plain"></i></a>
              
              <a href="#" id="parkvision-css"><i class="devicon-css3-plain-wordmark"></i></a>
              
							</p>
						</div>			
          </section>
        



          {/* Undisclosed */}
					<section className="effect-terry">
						<img src="https://i.imgur.com/9SXOeT0.png" alt="img26"/>
						<div id="figcap">
							<h2 id="undiclosed-h2">Undisclosed</h2>
							<p>
              
              <a href="#" id="html-undisclosed"><i class="devicon-html5-plain-wordmark"></i></a>
              
								<a onClick={e => {
                  props.showModalThree();
                  }} href="#modal-two" id="parkvision-about">about</a>
              
                <a id="undisclosed-git" href="https://github.com/nehemias-bit/Undisclosed.git" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain-wordmark"></i></a>
              
              <a href="#" id="undisclosed-javascript"><i class="devicon-javascript-plain"></i></a>
              
              <a href="#" id="undisclosed-css"><i class="devicon-css3-plain-wordmark"></i></a>

              <a href="#" id="undisclosed-express"><i class="devicon-express-original"></i></a>
              
							</p>
						</div>			
          </section>
        

        
          {/* abook */}
					<section className="effect-terry" id="abook-section">
						<img src="https://i.imgur.com/enNGywo.png" alt="img26"/>
						<div id="figcap">
							<h2>abook</h2>
							<p>
              
              <a href="#" id="html-abook"><i class="devicon-html5-plain-wordmark"></i></a>
              
								<a onClick={e => {
                  props.showModalFour();
                  }} href="#modal-two" id="abook-about">about</a>
              
                <a id="abook-git-hub" href="https://github.com/nehemias-bit/abook.git" target="_blank" rel="noopener noreferrer"><i class="devicon-github-plain-wordmark"></i></a>
              
              <a href="#" id="abook-javascript"><i class="devicon-javascript-plain"></i></a>
              
              <a href="#" id="abook-css"><i class="devicon-css3-plain-wordmark"></i></a>

              <a href="#" id="abook-rails"><i class="devicon-rails-plain-wordmark"></i></a>
              
							</p>
						</div>			
          </section>
				</div>
    </div>
  )
}
