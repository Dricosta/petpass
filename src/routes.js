import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landpage from './pages/landpage'
import UserRegister from './components/UserRegister/UserRegister'
import JobberRegister from './components/JobberRegister/JobberRegister'
import UserLogin from './components/UserLogin/UserLogin'
import JobberLogin from './components/JobberLogin/JobberLogin'
import Dashboard from './pages/dashboard'
import ServiceHistory from './components/ServiceHistory/ServiceHistory'



const Routes = () => (

    <BrowserRouter>
        <Switch>
            
            <Route exact path='/' component={Landpage} />
            <Route path='/userRegister' component={UserRegister} />
            <Route path='/jobberRegister' component={JobberRegister} />
            <Route path='/userLogin' component={UserLogin} />
            <Route path='/jobberLogin' component={JobberLogin} />
            <Route path='/dashboard' component={Dashboard} /> 
            <Route path='/services' component={ServiceHistory} />
            <Route path='/agendarServico' component={Dashboard} />
        </Switch>
    </BrowserRouter>
)

export default Routes