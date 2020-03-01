import React from 'react';
import logo from './logo.svg';
import Sidebar from './components/sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Sidebar/>
      </header>
    </div>
  );
}

export default App;
