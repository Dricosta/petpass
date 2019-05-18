import React, { Component } from 'react'
import logo from '../../assets/mypetpass.png'
import { Grid, Hidden } from '@material-ui/core'
import './page.scss'
import '../../reset.scss'
import LoginForm from './LoginForm'
import { Redirect } from 'react-router-dom'

export class UserLogin extends Component {
    state = {
        step: 1,
        email: '',
        password: ''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { step } = this.state
        const { email, password } = this.state
        const values = { email, password }
        const msg = this.props.msg

        switch (step) {
            case 1:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center'>
                                    <img src={logo} alt='logo' />
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <LoginForm
                                    handleChange={this.handleChange}
                                    values={values}
                                    msg={msg}
                                    nextStep={this.nextStep} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 2:
                return(
                    <Redirect to='/dashboard' />
                )
            default:
                return ''
        }
    }
}

export default UserLogin
