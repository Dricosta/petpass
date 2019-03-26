import React from 'react';
import logo from '../../assets/petpass.png';
import Button from '@material-ui/core/Button';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <img src={logo} alt="petpass"/>
        <div className="Navbar__group-button">
        <Button variant="contained" color="primary" className="btn-navbar">
          Sobre nós
        </Button>
        <Button variant="contained" color="primary" className="btn-navbar">
          Cadastre-se
        </Button>
        <Button variant="contained" color="primary" className="btn-navbar">
          Login
        </Button>
        </div>
      </nav>
    );
  }
}

export default Navbar;