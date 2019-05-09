import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landpage from './pages/landpage'
import UserRegister from './components/UserRegister/UserRegister'
import Dashboard from './pages/dashboard'
import UserTest from './components/UserRegister/UserTest'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landpage} />
            <Route path='/userRegister' component={UserRegister} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/usertest' component={UserTest} />
        </Switch>
    </BrowserRouter>
)

export default Routes