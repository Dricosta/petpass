import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss'
import InfoUser from '../../components/InfoUser/'

library.add(faUser, faLightbulb, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard)


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            light: false
        }
    }

    handleLight = () => {
        this.setState(state => ({
            light: !state.light
        }))
    }


    render() {
        return (
            <div className={`dashboard ${this.state.light ? 'dashboard-dark' : 'dashboard-light'}`}>                
                <NavbarDash handleLight={this.handleLight} Light={this.state.light}/>
                <InfoUser/>
            </div>
        );
    }
}

export default Dashboard;
