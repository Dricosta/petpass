import React from 'react'
import pin from '../../assets/pin.svg'
import phone from '../../assets/telephone.svg'
import './style.scss'

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <div className="footer_main">
                <div className="footer_main_box">
                    <h3 className="footer_main_box_title">Para perguntas e <br />sugestões</h3>
                    <ul className="footer_main_box_list">
                        <li className="footer_main_box_list-item"><img src={phone} alt="pin" /><a href="https://github.com/Dricosta/petpass">Github PetPass</a></li>
                        <li className="footer_main_box_list-item"><img src={phone} alt="phone" />+55 (11) 98585-6800</li>
                    </ul>
                </div>

                <div className="footer_main_boxtwo">
                    <h3 className="footer_main_boxtwo_title">Nós estamos esperando <br />por sua visita</h3>
                    <ul className="footer_main_boxtwo_list">
                        <li className="footer_main_boxtwo_list-item"><img src={pin} alt="pin" />Centro Universitario Senac <br />Santo Amaro</li>
                        <li className="footer_main_boxtwo_list-item"><img src={pin} alt="pin" />SP, São Paulo - Brasil</li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer