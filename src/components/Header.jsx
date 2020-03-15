import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

class Header extends Component {
    state = {}

    render() {
      return (<div>
        <h1 className='heading-background'>Leon Soh</h1>
          <header>
            <h1>
              <Fade bottom cascade>Leon Soh</Fade></h1>
          </header>
          <Fade bottom>
            <p className='header-title'>
              <br></br>Welcome<br></br>
            </p>
          </Fade>
        </div>);
    }
}

export default Header;
