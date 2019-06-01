import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard, faLightbulb } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss'
import InfoUser from '../../components/InfoUser/'
import api from '../../services/api';
import InfoJobber from '../../components/infoJobber';

library.add(faUser, faLightbulb, faHandshake, faMapMarkedAlt, faSignOutAlt, faCoins, faCreditCard)


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

    handleLogout = () => {
        console.log('limpou')
        localStorage.clear()
    }
   
    async componentWillMount(){

        
        if (localStorage.getItem("idJobber")) {
            const idLocalStorage = localStorage.getItem("idJobber")
            const responseJobber = await api.get(`jobber/${idLocalStorage}`)
            this.setState({
                photoUser: responseJobber.data.result.photo
            })
        } else if (localStorage.getItem("idOwner")) {
            console.log('tem owner')
            const idLocalStorage = localStorage.getItem("idOwner")
             const responseUser = await api.get(`user/${idLocalStorage}`)
              this.setState({
                photoUser: responseUser.data.result.photo
            })
        }

        
 
            // localStorage.getItem("idJobber") ? responseUser = await api.get(`jobber/${idLocalStorage}`) : await api.get(`user/${idLocalStorage}`)
            // this.setState({
            //     photoUser: responseUser.data.result.photo
            // })
    


        // let responseUser = ''
        // localStorage.getItem("idOwner") ? responseUser = await api.get(`user/${idLocalStorage}`) : await api.get(`jobber/${idLocalStorage}`)
        // this.setState({ photoUser: responseUser.data.result.photo})
        // console.log(responseUser)  
    }


    render() {
        return (
            <div className={`dashboard ${this.state.light ? 'dashboard-dark' : 'dashboard-light'}`}>                
                <NavbarDash 
                handleLight={this.handleLight} 
                handleLogout={this.handleLogout}
                Light={this.state.light}
                Photo={this.state.photoUser}/>

                { localStorage.getItem('idOwner') ?  <InfoUser/> : <InfoJobber/> }
               
            </div>
        );
    }
}

export default Dashboard;
