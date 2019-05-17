import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landpage from './pages/landpage'
import UserRegister from './components/UserRegister/UserRegister'
import UserLogin from './components/UserLogin/UserLogin'
import Dashboard from './pages/dashboard'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landpage} />
            <Route path='/userRegister' component={UserRegister} />
            <Route path='/userLogin' component={UserLogin} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
    </BrowserRouter>
)

export default Routes