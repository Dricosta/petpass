import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landpage from './pages/landpage';
import Login from './components/Login'
import UserRegister from './components/UserRegister'
import JobberRegister from './components/JobberRegister'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landpage} />
            <Route path='/login' component={Login} />
            <Route path='/userRegister' component={UserRegister} />
            <Route path='/jobberRegister' component={JobberRegister} />
        </Switch>
    </BrowserRouter>
)

export default Routes