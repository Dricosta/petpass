import React from 'react';
import logoPetpass  from '../../assets/petpass.png';
import './navbar.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      scrollNav: true
    }
    this.OpenMenuHamburguer = this.OpenMenuHamburguer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  OpenMenuHamburguer() {
    return this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  }

  handleScroll() { 
    if (document.documentElement.scrollTop > 60) {
       this.setState({
         scrollNav: true
       })
     } else {
       this.setState({
         scrollNav: false
       })
     }
   }

  componentDidMount() {
    window.onscroll = () => this.handleScroll()
  }


  render() {
    return (
      <nav className={`Navbar ${this.state.scrollNav ? 'scrolling' : '' }`}>
        <div className="Navbar_container">
          <a href="/"><img className="Navbar_logo" src={logoPetpass} alt="petpass"/></a>
          <div className={`Navbar_menu-hamburguer ${this.state.menuOpen ? 'open' : 'close'}`} onClick={this.OpenMenuHamburguer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {this.state.menuOpen || window.innerWidth > 768 ? 
          <div className="Navbar_group-button">
            <ul className="Navbar_group-button_content">
              <li><a href="www.google.com">Sobre nós</a></li>
              <li><a href="/register">Cadastre-se</a></li>
              <li><a href="/login">Login</a></li>
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