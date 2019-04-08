import React from 'react'
import logoPetpass from '../../assets/petpass.png'
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      scrollNav: false,
      menuOptionCadastro: false,
      menuOptionLogin: false
    }
    this.OpenMenuHamburguer = this.OpenMenuHamburguer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.OpenOptionCadastro = this.OpenOptionCadastro.bind(this);
    this.OpenOptionLogin = this.OpenOptionLogin.bind(this);
  }

  OpenMenuHamburguer() {
    return this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  }

  OpenOptionCadastro() {
    return this.setState(state => ({
      menuOptionCadastro: !state.menuOptionCadastro,
      menuOptionLogin: false
    }));
  }

  OpenOptionLogin() {
    return this.setState(state => ({
      menuOptionLogin: !state.menuOptionLogin,
      menuOptionCadastro: false
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

  scrollToTop = () => {
    scroll.scrollToTop();
  };


  render() {
    return (
      <nav className={`Navbar ${this.state.scrollNav ? 'scrolling' : ''}`}>
        <div className="Navbar_container">
          {window.location.pathname === "/" ?
            <Link to="header-info"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1200}>
              <img className="Navbar_logo" src={logoPetpass} alt="petpass" />
            </Link>
            :
            <a href="/">
              <img className="Navbar_logo" src={logoPetpass} alt="petpass" />
            </a>
          }
          <div className={`Navbar_menu-hamburguer ${this.state.menuOpen ? 'open' : 'close'}`} onClick={this.OpenMenuHamburguer}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          {this.state.menuOpen || window.innerWidth > 768 ?
            <div className="Navbar_group-button">
              <ul className="Navbar_group-button_content">
                <li>
                  <Link to="Team-developer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}>
                    Developers</Link>
                </li>
                <li>
                  <Link to="About-us"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1200}>
                    Sobre nós
                </Link>
                </li>
                <li className="link_dropdown"
                  onClick={this.OpenOptionCadastro}>
                  Cadastre-se
                <div className={`link_dropdown_option ${this.state.menuOptionCadastro ? 'openOption' : ''}`}>
                    <ul className="link_dropdown_list">
                      <li className="link_dropdown_list-item submenu">P / de Serviço</li>
                      <li className="link_dropdown_list-item submenu"><a href="/userRegister" className="link_dropdown_list-item">Usuário</a></li>
                    </ul>
                  </div>
                </li>

                <li className="link_dropdown"
                  onClick={this.OpenOptionLogin}>
                  Login
                <div className={`link_dropdown_option option_login ${this.state.menuOptionLogin ? 'openOptionLogin' : ''}`}>
                    <ul className="link_dropdown_list">
                      <li className="link_dropdown_list-item submenu">P / de Serviço</li>
                      <li className="link_dropdown_list-item submenu">Usuário</li>
                    </ul>
                  </div>
                </li>
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