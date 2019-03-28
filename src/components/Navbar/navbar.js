import React from 'react';
import logoPetpass  from '../../assets/petpass.png';
import './navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
    this.OpenMenuHamburguer = this.OpenMenuHamburguer.bind(this);
  }

  OpenMenuHamburguer() {
    return this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  }


  render() {
    return (
      <nav className="Navbar">
        <div className="Navbar_container">
          <img className="Navbar_logo" src={logoPetpass} alt="petpass"/>
          <div className={`Navbar_menu-hamburguer ${this.state.menuOpen ? 'open' : 'close'}`} onClick={this.OpenMenuHamburguer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {this.state.menuOpen || window.innerWidth > 768 ? 
          <div className="Navbar_group-button">
            <ul className="Navbar_group-button_content">
              <li><a href="www.google.com">Sobre nós</a></li>
              <li><a href="www.google.com">Cadastre-se</a></li>
              <li><a href="www.google.com">Login</a></li>
            </ul>
          </div>
          :
          false
          }
        </div>
      </nav>
    );
  }
}

export default Navbar;