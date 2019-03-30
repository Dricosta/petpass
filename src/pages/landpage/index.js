import React, { Component } from 'react'
import './landpage.scss'
import ball from '../../assets/ball.svg'
import cardiogram from '../../assets/cardiogram.svg'
import clock from '../../assets/clock.svg'
import pin from '../../assets/pin.svg'
import phone from '../../assets/telephone.svg'
import pets from '../../assets/Pets.png'
import Navbar from '../../components/Navbar'

class Landpage extends Component {
    render() {
      return (
        <div className="landpage">
        <Navbar/> 
          <header className="header-info">
            <div className="header-info_content container">
                <h1 className="header-info_content_title">Conheça a PetPass</h1>
                <p className="header-info_content_text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <a className="header-info_content_button" href="www.google.com">Saiba mais</a>
            </div>
          </header>
          <section className="petinfo">
              <div className="container">
                  <div className="petinfo_content">
                      <div className="petinfo_content_group">
                        <img src={ball} alt="ball" />
                        <p>Diversão garantida</p>
                      </div>
                      <div className="petinfo_content_group">
                        <img src={cardiogram} alt="coracao" />
                        <p>Cuidados especiais</p>
                      </div>
                      <div className="petinfo_content_group">
                        <img src={clock} alt="relogio" />
                        <p>Rápido e Prático</p>
                      </div>
                      <div className="petinfo_content_group">
                        <img src={pin} alt="localizacao" />
                        <p>Perto de você</p>
                      </div>
                      <div className="petinfo_content_group">
                        <img src={phone} alt="telefone" />
                        <p>Fale Conosco</p>
                      </div>
                  </div>
              </div>
          </section>
          <section className="About-us">
            <div className="container">
              <div className="About-us_content">
                  <div className="About-us_content_box">
                    <img src={pets} alt="pets"/>
                  </div>
                  <div className="About-us_content_boxtwo">
                    <h2>About the shelter “Cozy House”</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce efficitur blandit condimentum. Proin accumsan lorem vel gravida fringilla. Suspendisse potenti. Mauris ut pulvinar nunc.
                    </p>
                    <p>Donec consectetur, diam in porta tempus, urna ligula vestibulum nibh, ac ornare felis justo nec leo. Praesent mattis nibh quis 
                    ultrices pharetra. Morbi tempus at ante sit amet tristique. 
                    Maecenas dignissim justo orci, in laoreet urna dapibus nec. Praesent quis tortor faucibus, tristique ante vitae, dignissim 
                    lorem. Sed at ligula et sem mattis gravida ac vel erat. </p>
                  </div>
              </div>
            </div>
          </section>
          <section className="Team-developer">
            <div className="container">
            <h2 className="Team-developer_title">Developers | Petpass</h2>
              <div className="Team-developer_main">
                <div className="Team-developer_group">
                  <div className="Team-developer_circle dev-joao"></div>
                  <span className="Team-developer_name">João Ribeiro</span>
                  <span className="Team-developer_skill">Developer Fullstack</span>
                  <a className="Team-developer_btn" href="https://github.com/JoHNNyRiver">Github</a>
                </div>

                <div className="Team-developer_group">
                  <div className="Team-developer_circle dev-marcelo"></div>
                  <span className="Team-developer_name">Marcelo B H</span>
                  <span className="Team-developer_skill">Developer Back-end</span>
                  <a className="Team-developer_btn" href="https://github.com/marcelob133">Github</a>
                </div>

                <div className="Team-developer_group">
                  <div className="Team-developer_circle dev-rodrigo"></div>
                  <span className="Team-developer_name">Rodrigo Lima</span>
                  <span className="Team-developer_skill">Developer Back-end</span>
                  <a className="Team-developer_btn" href="https://github.com/RodrigoLS">Github</a>
                </div>

                <div className="Team-developer_group">
                  <div className="Team-developer_circle dev-adriano"></div>
                  <span className="Team-developer_name">Adriano da Costa</span>
                  <span className="Team-developer_skill">Developer Front-end</span>
                  <a className="Team-developer_btn" href="https://github.com/Dricosta">Github</a>
                </div>

                <div className="Team-developer_group">
                  <div className="Team-developer_circle dev-julio"></div>
                  <span className="Team-developer_name">Julio Klein</span>
                  <span className="Team-developer_skill">Developer Front-end</span>
                  <a className="Team-developer_btn" href="https://github.com/julioklein">Github</a>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer">
            <div className="container">
              <div className="footer_main">
                <div className="footer_main_box">
                  <h3 className="footer_main_box_title">Para perguntas e <br/>sugestões</h3>
                  <ul className="footer_main_box_list">
                    <li className="footer_main_box_list-item"><img src={phone} alt="pin"/><a href="https://github.com/Dricosta/petpass">Github PetPass</a></li>
                    <li className="footer_main_box_list-item"><img src={phone} alt="phone"/>+55 (11) 98585-6800</li>
                  </ul>
                </div>

                <div className="footer_main_boxtwo">
                  <h3 className="footer_main_boxtwo_title">Nós estamos esperando <br/>por sua visita</h3>
                  <ul className="footer_main_boxtwo_list">
                    <li className="footer_main_boxtwo_list-item"><img src={pin} alt="pin"/>Centro Universitario Senac <br/>Santo Amaro</li>
                    <li className="footer_main_boxtwo_list-item"><img src={pin} alt="pin"/>SP, São Paulo - Brasil</li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      );
    }
  }

export default Landpage;