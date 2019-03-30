import React from 'react'
import logoPetpass  from '../../assets/petpass.png'
import { Link, animateScroll as scroll } from "react-scroll";
import './navbar.scss'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      scrollNav: false,
      menuOptionCadastro: false
    }
    this.OpenMenuHamburguer = this.OpenMenuHamburguer.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.OpenOptionCadastro = this.OpenOptionCadastro.bind(this);
  }

  OpenMenuHamburguer() {
    return this.setState(state => ({
      menuOpen: !state.menuOpen
    }));
  }

  OpenOptionCadastro() {
    return this.setState(state => ({
      menuOptionCadastro: !state.menuOptionCadastro
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
      <nav className={`Navbar ${this.state.scrollNav ? 'scrolling' : '' }`}>
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
              <li>
                <Link to="Team-developer"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1200} 
                href="www.google.com">
                Developers</Link>
              </li>
              <li>
              <Link to="About-us"
                spy={true}
                smooth={true}
                offset={-70}
                duration= {1200} 
                href="www.google.com">
                Sobre nós
                </Link>
              </li>

              <li className="link_cadastre-se" 
              onClick={this.OpenOptionCadastro}>
                <a>Cadastre-se</a>
                <div className={`link_cadastre-se_option ${this.state.menuOptionCadastro ? 'openOption' : ''}`}>
                    <ul className="link_cadastre-se_list">
                      <li className="link_cadastre-se_list-item"><a href='/jobberRegister'>P / de Serviço</a></li>
                      <li className="link_cadastre-se_list-item"><a href='/userRegister'>Usuário</a></li>
                    </ul>
                </div>
              </li>

              <li className="link_login" onClick={this.OpenOptionLogin}><a href="/login">Login</a></li>
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