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
        api.post('user/signup', {
            
                'name': this.props.values.name,
                'email': this.props.values.email,
                'password': this.props.values.password,
                'description': this.props.values.description,
                'accountNumber': this.props.values.accountNumber,
                'digit': this.props.values.digit,
                'agency': this.props.values.agency,
                'bankCode': this.props.values.bankCode,
                'birthday' : 1554564513464,
                'lat': 20.592630,
                'lng': -100.409660,
                'phone': this.props.values.phone,
                'gender': this.props.values.gender,
                'photo': this.props.values.photo,
            
        }).then(response => console.log(response.data.result._id))
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
