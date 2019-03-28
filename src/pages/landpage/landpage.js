import React, { Component } from 'react';
import './landpage.scss';
// import bgAdriano from '../../assets/bgAdriano.jpeg';
// import bgJulio  from '../../assets/bgJulio.jpeg';
// import bgMarcelo from '../../assets/bgMarcelo.jpeg';
// import bgJoao from '../../assets/bgJoao.jpeg';
// import bgRodrigo from '../../assets/bgRodrigo.jpg';

class Landpage extends Component {
    render() {
      return (
        <div className="landpage">
          <header className="header-info">
            <div className="header-info_content container">
                <h1 className="header-info_content_title">Conheça a PetPass</h1>
                <p className="header-info_content_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a className="header-info_content_button" href="www.google.com">Saiba mais</a>
            </div>
          </header>
        </div>
      );
    }
  }

export default Landpage;