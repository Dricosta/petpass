import React, { Component } from 'react'
import '../../reset.scss'
import api from '../../services/api'
import { Grid, TextField, Button } from '@material-ui/core'
import MsgNotification from '../MsgNotification/index';

export class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            LoginNotification: false,
            LoginMsg: '',
            LoginMsgColor: true,
            LoginNotificationIcon: true,
        }
    }

    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        if ((this.props.values.email && this.props.values.password) === '') {
            this.setState({
                LoginNotificationIcon: false,
                LoginNotification: true,
                LoginMsg: 'Preencha todos os dados',
                LoginMsgColor: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        LoginNotification: false
                    })
                }, 2000)
            })
            return false
        }

        let formData = {
            'email': this.props.values.email,
            'password': this.props.values.password,
            redirect: this.props.nextStep
        }
        api.post('jobber/signin', formData)
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    console.log('result:', response)
                    localStorage.setItem('idJobber', response.data.result._id)
                    formData.redirect()
                } else {
                    this.setState({
                        LoginNotificationIcon: false,
                        LoginNotification: true,
                        LoginMsg: 'Login ou senha inválidos',
                        LoginMsgColor: false
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                LoginNotification: false
                            })
                        }, 2000)
                    })
                    return false
                }
            })
    }

    render() {
        const { values, handleChange, msg } = this.props

        return (
            <Grid
                item xs={12} container
                justify='center' alignItems='center'
                style={styles.formPage}>
                <Grid item xs={12} container
                    justify='center' alignItems='center'>
                    {
                        msg &&
                        <Grid item xs={10}>
                            <h3>{msg}</h3>
                        </Grid>
                    }
                    <Grid item xs={10}>
                        <h2 style={styles.h2}>Entre com sua conta</h2>
                    </Grid>

                    {/* Inputs */}
                    <Grid item xs={10}>
                        <TextField
                            label='Email'
                            type='email'
                            required
                            value={values.email}
                            onChange={handleChange('email')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Senha'
                            type='password'
                            required
                            value={values.password}
                            onChange={handleChange('password')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>


                    {/* Buttons */}
                    <Grid item container xs={10}
                        alignItems='baseline'
                        style={styles.divAction}>
                        <Grid item container xs={6}
                            justify='flex-start'>
                            <Button href="/" style={styles.actionButton}>
                                Voltar
                            </Button>
                        </Grid>

                        <Grid item container xs={6}
                            justify='flex-end'>
                            <Button onClick={this.continue} style={styles.actionButton}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                    {/* End Buttons */}

                    <MsgNotification
                        PetNotification={this.state.LoginNotification}
                        PetMsg={this.state.LoginMsg}
                        PetMsgColor={this.state.LoginMsgColor}
                        PetNotificationIcon={this.state.LoginNotification} />

                </Grid>
            </Grid>
        )
    }
}

const styles = {
    button: {
        height: '82px',
        width: '85px',
        maxWidth: '85px',
        maxHeight: '82px',
        objectFit: 'cover',
        borderRadius: '50%',
        margin: '10px',
        background: '#fff',
    },
    actionButton: {
        background: '#282222',
        boxShadow: '4px 5px 15px rgba(0, 0, 0, 0.25)',
        borderRadius: '4px',
        color: '#fff',
        textTransform: 'none',
        width: '80%'
    },
    divAction: {
        marginTop: '30px'
    },
    h2: {
        marginBottom: '30px'
    }
}

export default LoginForm