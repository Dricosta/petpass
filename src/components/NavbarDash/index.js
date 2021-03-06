import React from 'react'
import './navbardash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '@material-ui/core/Avatar'


// bgUrl is expect for update image user
const stylesUser = {
    margin: 10,
    width: 60,
    height: 60,
}

const NavbarDash = ({ handleLight, handleLogout, Light, Photo }) => {
    return (
        <div className="navbardash">
            <div className="navbardash_logo">
                <Avatar src={`${Photo}`} style={stylesUser} />
            </div>
            <ul className="navbardash_menu">
                <li className="navbardash_menu-item"><a href="/dashboard"><FontAwesomeIcon icon="user" /></a></li>
                <li className="navbardash_menu-item"><a href="/servicos"><FontAwesomeIcon icon="handshake" /></a></li>
                <li className="navbardash_menu-item"><a href="/agendarServico"><FontAwesomeIcon icon="calendar" /></a></li>
                <li className="navbardash_menu-item" onClick={handleLight}><FontAwesomeIcon className={`${Light ? 'dark' : 'false'}`} icon="lightbulb" /></li>
                <li className="navbardash_menu-item" onClick={handleLogout}><a href="/"><FontAwesomeIcon icon="sign-out-alt" /></a></li>
            </ul>
        </div>
    );
}

export default NavbarDash;
