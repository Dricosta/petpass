import React, { Component } from 'react';
import './reset.scss'
import Navbar from './components/Navbar';
import Landpage from './pages/landpage'

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
