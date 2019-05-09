import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Navbar from '../Navbar'
import Footer from '../Footer'

/* import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera' */

export class AccountDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values, handleChange } = this.props

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
                        <h1 style={styles.h1}>Informe sua conta para compra de créditos</h1>
                    </Grid>
                </Grid>

                {/* Body */}
                <Grid container direction='row' justify='center'>
                    <Grid item xs={10} sm={8} container direction='row' justify='center'>
                        <form style={styles.formInput}>
                            <TextField
                                label="Número da conta"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                onChange={handleChange('accountNumber')}
                                defaultValue={values.accountNumber}
                            />

                            <TextField
                                label="Agência"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                onChange={handleChange('agency')}
                                defaultValue={values.agency}
                            />

                            <TextField
                                label="Dígito"
                                margin="normal"
                                variant="outlined"
                                required={true}
                                fullWidth={true}
                                onChange={handleChange('digit')}
                                defaultValue={values.digit}
                            />

                            <TextField
                                label="Código do banco"
                                margin="normal"
                                variant="outlined"
                                required
                                fullWidth={true}
                                onChange={handleChange('bankCode')}
                                defaultValue={values.bankCode}
                            />
                        </form>
                    </Grid>

                    <Grid item container justify='center' style={styles.footer}>
                        <Grid item>
                            <Button children='Voltar' color='primary' variant='outlined'
                                style={styles.button} onClick={this.back} />
                        </Grid>
                        <Grid item>
                            <Button children='Continuar' color='primary' variant='outlined'
                                style={styles.button} onClick={this.continue} />
                        </Grid>
                    </Grid>
                </Grid>
                <Footer />
            </div >
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

export default AccountDetails
