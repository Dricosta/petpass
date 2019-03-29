import React, { Component } from 'react';
import './reset.scss'
import Navbar from './components/Navbar';
import Landpage from './pages/landpage'

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
