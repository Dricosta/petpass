import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.scss'

const CardListServices = ({ name, serviceName, servicePrice, serviceDescription, email, handleCalendar}) => {
    return (
        <div className="d-flex">
            <div className="CardListServices">
                <div className="CardListServices_main">
                    <div className="CardListServices_main-primary">
                        <div className="CardListServices_info-primary">
                            <span className="CardListServices_name">{name}</span>
                            <span className="CardListServices_price"><FontAwesomeIcon className="coins" icon="coins"/>R$ {servicePrice}</span>
                        </div>
                        <div className="CardListServices_info">
                            <span className="CardListServices_service">
                                <FontAwesomeIcon className="icon_service" icon="handshake" />
                                {serviceName}
                            </span>
                            <span className="CardListServices_email">{email}</span>
                        </div>
                    </div>
                </div>
                <div className="CardListServices_description">
                {serviceDescription} 
                </div>  
                
            </div>
            <button onClick={handleCalendar} className="btn-agendar"><FontAwesomeIcon icon="calendar" /></button>
        </div>
    );
};

export default CardListServices;