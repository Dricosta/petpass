import React, { Component } from 'react';
import dog from '../../assets/dog.png';
import Avatar from '@material-ui/core/Avatar';
import './style.scss'

class MyPets extends Component {
    render() {
        const stylesUser = {
            backgroundImage: 'url(' + dog + ')',
            backgroundSize: 'cover'
        }

        return (
            <div className="MyPets">
                <div className="MyPets_info">
                    <Avatar className="MyPets_avatar" style={stylesUser}/>
                    <div className="MyPets_info-main">
                        <span className="MyPets_info-main_name">Aslam</span>
                        <span className="MyPets_info-main_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                    </div>
                </div>
                <div className="MyPets_info-secundary">
                    <span className="MyPets_info-secundary_raca">Golden</span>
                    <span className="MyPets_info-secundary_porte">Grande</span>
                    <span className="MyPets_info-secundary_peso">30kg</span>
                </div>
            </div>
            
        );
    }
}

export default MyPets;
