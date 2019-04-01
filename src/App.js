import React, { Component } from 'react';
import './reset.scss'
import Navbar from './components/Navbar';
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
