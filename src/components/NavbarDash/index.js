import React from 'react'
import './navbardash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import bgJulio from '../../assets/bgJulio.jpeg'


// bgUrl is expect for update image user
const stylesUser = {
    backgroundImage: 'url(' + bgJulio + ')',
    backgroundSize: 'cover'
}

const NavbarDash = () => {
    return (
        <div>
            <nav className="navbardash">
                <div className="navbardash_logo">
                    <div className="navbardash_circle" style={stylesUser}></div>
                </div>
                <ul className="navbardash_menu">
                    <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="user" /></a></li>
                    <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="home" /></a></li>
                    <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="handshake" /></a></li>
                    <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="map-marked-alt" /></a></li>
                    <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="sign-out-alt" /></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavbarDash;
