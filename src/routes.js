import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landpage from './pages/landpage';
import Login from './pages/login'
import Register from './pages/register'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landpage} />
            <Route path='/login' component={Login} />
            <Route path='/register' compor  ={Register} />
        </Switch>
    </BrowserRouter>
)

export default Routes