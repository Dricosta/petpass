import React, { Component } from 'react';
import './reset.scss';
import Navbar from './components/Navbar/navbar.js';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Routes />
      </div>
    );
  }
}

export default App;
