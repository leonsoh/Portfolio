import React from 'react';
import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
      <Header></Header>
      </div>
    </div>
  );
}

export default App;