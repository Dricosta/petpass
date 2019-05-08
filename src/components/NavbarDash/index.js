import React from 'react'
import './navbardash.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Avatar from '@material-ui/core/Avatar'
import bgJulio from '../../assets/bgJulio.jpeg'


// bgUrl is expect for update image user
const stylesUser = {
    backgroundImage: 'url(' + bgJulio + ')',
    backgroundSize: 'cover'
}

const styles = {
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 60,
      height: 60,
    },
  };

const NavbarDash = ({ handleLight, Light }) => {
    return (
        <div className="navbardash">
            <div className="navbardash_logo">
                <Avatar alt="Remy Sharp" className="navbardash_circle" style={stylesUser} />
            </div>
            <ul className="navbardash_menu">
                <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="user" /></a></li>
                <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="handshake" /></a></li>
                <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="map-marked-alt" /></a></li>
                <li className="navbardash_menu-item" onClick={handleLight}><FontAwesomeIcon className={`${Light ? 'dark' : 'false'}`} icon="lightbulb" /></li>
                <li className="navbardash_menu-item"><a href="/"><FontAwesomeIcon icon="sign-out-alt" /></a></li>
            </ul>
        </div>
    );
}

export default NavbarDash;
