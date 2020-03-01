import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html" style={{color: "white"}}>Leon Soh</a></h1>
              <span className="email"><i className="icon-mail"></i> mokuyobikaji@gmail.com</span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home" style={{color: "white"}}>Introduction</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
            </nav>
            <div className="colorlib-footer">
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
