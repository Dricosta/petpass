import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss'
import InfoUser from '../../components/InfoUser/'
import api from '../../services/api';

library.add(faUser, faLightbulb, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard)
const idLocalStorage = localStorage.getItem("idOwner")

class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            light: false,
            photoUser: ''
        }
    }

    handleLight = () => {
        this.setState(state => ({
            light: !state.light
        }))
    }

    async componentWillMount(){
        const responseUser = await api.get(`user/${idLocalStorage}`)

        console.log(responseUser)

        this.setState({
            photoUser: responseUser.data.result.photo
        })
    }


    render() {
        return (
            <div className={`dashboard ${this.state.light ? 'dashboard-dark' : 'dashboard-light'}`}>                
                <NavbarDash 
                handleLight={this.handleLight} 
                Light={this.state.light}
                Photo={this.state.photoUser}
                />



                <InfoUser/>
            </div>
        );
    }
}

export default Dashboard;
