import React, { Component } from 'react'
import '../../reset.scss'
import api from '../../services/api'
import { Grid, TextField, Button } from '@material-ui/core'

export class LoginForm extends Component {
    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        let formData = {
            'email': this.props.values.email,
            'password': this.props.values.password,
            redirect: this.props.nextStep
        }
        api.post('user/signin', formData)
            .then(function (response) {
                if (response.data.statusCode === 200) {
<<<<<<< HEAD
                    console.log('id:', response.data.result._id)
=======
                    localStorage.setItem('idOwner', response.data.result._id)
>>>>>>> 2c3888507c11ca3dd97edad60dd13a7c0a61c1e8
                    formData.redirect()
                    localStorage.setItem('idLogin', response.data.result._id)
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
                        <Grid item container xs={10} justify='center'>
                            <h3>{msg}</h3>
                        </Grid>
                    }
                    <Grid item container xs={10} justify='center'>
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