import React, { Component } from 'react'

export default class Sidebar extends Component {

  onButtonClicked = () => {
    alert("Clicked");
  };
   

  render() {
    return (
      <div>
        <div style={{borderWidth: 1, borderColor: 'white'}}>
          <nav><i /></nav>
          <aside >
            <div>
              <div style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1><a href="index.html" style={{color: "white"}}>Leon Soh</a></h1>
              <span><i></i> mokuyobikaji@gmail.com</span>
            </div>
            <nav>
              <div>
                <ul>
                  <li>
                    <a href="#home" style={font} onClick={this.onButtonClicked}>Introduction</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
            </nav>
            <div>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}


const font = {
  color: 'tomato',
}
