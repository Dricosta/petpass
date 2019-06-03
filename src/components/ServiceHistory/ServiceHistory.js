import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import InfoServices from './InfoServices';


class ServiceHistory extends Component {
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

    render() {
        return (
            <div className={`dashboard ${this.state.light ? 'dashboard-dark' : 'dashboard-light'}`}>                
                <NavbarDash 
                handleLight={this.handleLight} 
                Light={this.state.light}
                Photo={this.state.photoUser}
                />

                <InfoServices />

            </div>
        );
    }
}

export default ServiceHistory;
