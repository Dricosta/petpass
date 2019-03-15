import React from 'react';
import logo from '../../assets/petpass.png';
import './navbar.scss';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <img src={logo} alt="petpass"/>
        <div className="Navbar__group-button">
           <button>Sobre nós</button>
           <button>Cadastre-se</button>
           <button>Login</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;