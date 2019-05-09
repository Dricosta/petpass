import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import '../../reset.scss'
import Navbar from '../Navbar'
import Grid from '@material-ui/core/Grid'
import Footer from '../Footer'
import api from '../../services/api'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        /* this.props.nextStep() */
        const values = this.props.values
        const data = new FormData()
        data.append('name', values.name)
        data.append('email', values.email)
        data.append('password', values.password)
        data.append('description', values.description)
        data.append('accountNumber', values.accountNumber)
        data.append('digit', values.digit)
        data.append('agency', values.agency)
        data.append('bankCode', values.bankCode)
        data.append('birhday', 1554564513464)
        data.append('address', values.address)
        data.append('phone', values.phone)
        data.append('gender', values.gender)
        data.append('photo', values.photo)
        data.append('lat', 20.592630)
        data.append('lng', -100.409660)
        console.log('DATA FORM: ', data)
        api.post('/user/signup', data)
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values: { name,
            email,
            password,
            description,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            address,
            lat,
            lng,
            phone,
            gender,
            photo, } } = this.props

        return (
            <div>
                {/* Header */}
                <Grid container>
                    <Grid item xs={12}>
                        <header style={styles.header}>
                            <Navbar />
                        </header>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={styles.h1}>Confirme seus dados</h1>
                    </Grid>
                </Grid>

                {/* Body */}
                <Grid container direction='row' spacing={8} justify='center'>
                    <Grid container direction='row' justify='center'>
                        <Grid item xs={10} sm={8} container direction='row' justify='center'>
                            <List component="nav">
                                <ListItem>
                                    <ListItemText primary="Email" secondary={email} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Senha" secondary={password} />
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary="Nome" secondary={name} />
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item container justify='center' style={styles.footer}>
                            <Grid item>
                                <Button children='Voltar' color='primary' variant='outlined'
                                    style={styles.button} onClick={this.back} />
                            </Grid>
                            <Grid item>
                                <Button children='Confirmar e continuar' color='primary' variant='outlined'
                                    style={styles.button} onClick={this.continue} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </div>
        )
    }
}

const styles = {
    header: {
        backgroundColor: '#3d3029',
        height: 76
    },
    h1: {
        textAlign: 'center',
        backgroundColor: '#3d3029',
        color: '#fff',
        fontWeight: 100,
        padding: '20px 10px',
        marginBottom: 30
    },
    formPage: {
        paddingTop: 76,
    },
    banner: {
        backgroundColor: '#d3d3d3',
        margin: '0 10px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    formInput: {
        width: '100%'
    },
    inputDate: {
        margin: '12px 0'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        margin: 15
    },
    footer: {
        marginBottom: 30
    }
}

export default Confirm
