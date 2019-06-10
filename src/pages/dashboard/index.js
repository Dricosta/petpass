import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHandshake, faCalendar, faSignOutAlt, faCoins, faCreditCard, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss'
import InfoUser from '../../components/InfoUser/'
import api from '../../services/api';
import InfoJobber from '../../components/infoJobber';
import ServiceScheduling from '../../components/ServiceScheduling';
import InfoServices from '../../components/ServiceHistory/InfoServices';

library.add(faUser, faLightbulb, faHandshake, faCalendar, faSignOutAlt, faCoins, faCreditCard)


class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            light: false,
            photoUser: ''
        }
    }

    async componentWillMount(){

        if (localStorage.getItem("idJobber")) {
            const idLocalStorage = localStorage.getItem("idJobber")
            const responseJobber = await api.get(`jobber/${idLocalStorage}`)
            this.setState({ photoUser: responseJobber.data.result.photo })
        } else if (localStorage.getItem("idOwner")) {
            const idLocalStorage = localStorage.getItem("idOwner")
            const responseUser = await api.get(`user/${idLocalStorage}`)
            this.setState({ photoUser: responseUser.data.result.photo })
        }

        console.log(window.location.pathname.indexOf('dashboard'))
    }

    handleLight = () => {
        this.setState(state => ({
            light: !state.light
        }))
    }

    handleLogout = () => {
        localStorage.clear()
    }


    render() {
        return (
            <div className={`dashboard ${this.state.light ? 'dashboard-dark' : 'dashboard-light'}`}>   
                <NavbarDash 
                handleLight={this.handleLight} 
                handleLogout={this.handleLogout}
                Light={this.state.light}
                Photo={this.state.photoUser}/>  
                { window.location.pathname.indexOf('dashboard') !== -1 ?
                    localStorage.getItem('idOwner') ? <InfoUser/> : <InfoJobber/>
                    :
                    false
                }
                { window.location.pathname.indexOf('agendarServico') !== -1 ? 
                    localStorage.getItem('idOwner') ? <ServiceScheduling/> : false 
                    :
                    false
                }
                {
                    window.location.pathname.indexOf('servicos') !== -1 ?
                        localStorage.getItem('idOwner') || localStorage.getItem('idJobber') ? <InfoServices /> : false
                        :
                        false
                }
            </div>
        );
    }
}

export default Dashboard;
