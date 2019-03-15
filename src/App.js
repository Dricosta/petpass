import React, { Component } from 'react';
import './reset.scss'
import ButtonAppBar from './components/Navbar/navbar.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonAppBar/>
      </div>
    );
  }
}

export default App;
