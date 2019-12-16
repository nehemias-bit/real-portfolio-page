import React from 'react'

export default function Projects() {
  return (
    <div id="projects-section">

      {/* <h2>Terry</h2> */}
				<div className="grid">
					<section className="effect-terry">
						<img src="https://i.imgur.com/Ynmt9Gi.jpg" alt="img16"/>
						<div id="figcap">
							<h2>Sondar</h2>
							<p>
								<a href="#" className="last-anchor">link</a>
								<a href="#">link</a>
								<a href="#">link</a>
								<a href="https://github.com/nehemias-bit/second-project.git"  target="_black"><img src="http://pngimg.com/uploads/github/github_PNG45.png"/></a>
							</p>
						</div>			
					</section>
					<section className="effect-terry">
						<img src="https://images.pexels.com/photos/3361704/pexels-photo-3361704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img26"/>
						<div id="figcap">
							<h2>Noisy <span>Terry</span></h2>
							<p>
								<a href="#" className="last-anchor">hi</a>
								<a href="#">hi</a>
								<a href="#">hi</a>
								<a href="#">hi</a>
							</p>
						</div>			
					</section>
				</div>


    </div>
  )
}
