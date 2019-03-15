import React, { Component } from 'react';
import './reset.scss'
import Navbar from './components/Navbar/navbar.js';
import Landpage from './pages/landpage/landpage.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Landpage/>
      </div>
    );
  }
}

export default App;
