import React, { Component } from 'react'
import './landpage.scss'
import ball from '../../assets/ball.svg'
import cardiogram from '../../assets/cardiogram.svg'
import clock from '../../assets/clock.svg'
import pin from '../../assets/pin.svg'
import phone from '../../assets/telephone.svg'
import pets from '../../assets/Pets.png'

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
              <div className="Team-developer_main">
                <div clasName="Team-developer_group">
                  <div className="Team-developer_circle dev-joao"></div>
                  <span>Developer Fullstack</span>
                </div>

                <div clasName="Team-developer_group">
                  <div className="Team-developer_circle dev-marcelo"></div>
                  <span>Developer Back-end</span>
                </div>

                <div clasName="Team-developer_group">
                  <div className="Team-developer_circle dev-rodrigo"></div>
                  <span>Developer Back-end</span>
                </div>

                <div clasName="Team-developer_group">
                  <div className="Team-developer_circle dev-adriano"></div>
                  <span>Developer Front-end</span>
                </div>

                <div clasName="Team-developer_group">
                  <div className="Team-developer_circle dev-julio"></div>
                  <span>Developer Front-end</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }
  }

export default Landpage;