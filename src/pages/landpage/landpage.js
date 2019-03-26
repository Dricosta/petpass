import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faPhone, faClock, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import './landpage.scss';
import bgAdriano from '../../assets/bgAdriano.jpeg';
import bgJulio  from '../../assets/bgJulio.jpeg';
import bgMarcelo from '../../assets/bgMarcelo.jpeg';
import bgJoao from '../../assets/bgJoao.jpeg';
import bgRodrigo from '../../assets/bgRodrigo.jpg';


class Landpage extends Component {
    render() {
      return (
        <div className="Landpage">
            <div className="Landpage__background">
                <h1>Encontre serviços de confiança e qualidade para o seu Pet como <small>XXXXXX</small></h1>
            </div>
            <div className="Landpage__content">
                <div className="Landpage__group-circle" >
                    <div className="Landpage__group-circle__content">
                        <div className="Landpage__group-circle__content__circle">
                            <FontAwesomeIcon className="icon" icon={faLock} />
                        </div>
                        <small>Seu Pet 100% seguro</small>
                    </div>
                    
                    <div className="Landpage__group-circle__content">
                        <div className="Landpage__group-circle__content__circle">
                            <FontAwesomeIcon className="icon" icon={faPhone} />
                        </div>
                        <small>Fale Conosco</small>
                    </div>
                    
                    <div className="Landpage__group-circle__content">
                        <div className="Landpage__group-circle__content__circle">
                            <FontAwesomeIcon className="icon" icon={faClock} />
                        </div>
                        <small>Rápido e Prático</small>
                    </div>
                    
                    <div className="Landpage__group-circle__content">
                        <div className="Landpage__group-circle__content__circle">
                            <FontAwesomeIcon className="icon" icon={faSmileWink} />
                        </div>
                        <small>Satisfação Total</small>
                    </div>
                </div>
            </div>

            <section className="About-us">
                <h2>O que nós fazemos</h2>
                <h3>Desenvolvemos Sistemas voltados para Internet / Web
                com o próposito de facilitar a vida e comodidate de nossos
                usuarios.<br/> O App PetPass é um dos nossos ultimos avanços, e pode
                ser utilizado como referência.</h3>
                <div className="About-us__team">
                    <div className="About-us__team-primary">
                        <div className="About-us__team-primary__cards Marcelo">
                            <a href="https://github.com/marcelob133">
                                <img src={ bgMarcelo } alt="marcelo"/>
                                <span>Desenvolvedor Back-end</span>
                            </a>
                        </div>
                        <div className="About-us__team-primary__cards Joao">
                            <a href="https://github.com/JoHNNyRiver">
                                <img src={ bgJoao } alt="joao"/>
                                <span>Desenvolvedor FullStack</span>
                            </a>
                        </div>
                        <div className="About-us__team-primary__cards Rodrigo">
                            <a href="https://github.com/RodrigoLS">
                                <img src={ bgRodrigo } alt="rodrigo"/>
                                <span>Desenvolvedor Back-end</span>
                            </a>
                        </div>
                    </div>
                    <div className="About-us__team-secundary">
                        <div className="About-us__team-secundary__cards Adriano">
                            <a href="https://github.com/Dricosta">
                                <img src={ bgAdriano } alt="adriano"/>
                                <span>Desenvolvedor Front-end</span>
                            </a>
                        </div>
                        <div className="About-us__team-secundary__cards Julio">
                            <a href="https://github.com/julioklein">
                                <img src={ bgJulio } alt="julio"/>
                                <span>Desenvolvedor Front-end</span>
                            </a>
                        </div>
                    </div>
                </div> 
            </section>

            <footer className="footer">
                <span>@Copyright 2019 - PetPass /  Sistemas para Internet SENAC</span>
            </footer>
        </div>
      );
    }
  }

export default Landpage;