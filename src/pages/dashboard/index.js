import React, { Component } from 'react'
import NavbarDash from '../../components/NavbarDash'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faHandshake, faMapMarkedAlt, faSignOutAlt, faPaw } from '@fortawesome/free-solid-svg-icons'
import './dashboard.scss'

library.add(faUser, faPaw, faHandshake, faMapMarkedAlt, faSignOutAlt)


class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h1>Other Components</h1>
                <NavbarDash/>
            </div>
        );
    }
}

export default Dashboard;
