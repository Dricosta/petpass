import React, { Component } from 'react'
import '../../reset.scss'
import { Grid, TextField, Button } from '@material-ui/core'

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
            <Grid
                item xs={12} container
                justify='center' alignItems='center'
                style={styles.formPage}>
                <Grid item xs={12} container
                    justify='center' alignItems='center'>

                    <Grid item container xs={12} justify='center'>
                        <h2>Informe sua conta</h2>
                    </Grid>
                    <Grid item container xs={10} justify='center'>
                        <h4>(para pagamento pelos serviços prestados)</h4>
                    </Grid>

                    {/* Inputs */}
                    <Grid item xs={10}>
                        <TextField
                            label='Código do banco'
                            type='text'
                            required
                            value={values.bankCode}
                            onChange={handleChange('bankCode')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Agência'
                            type='text'
                            required
                            value={values.agency}
                            onChange={handleChange('agency')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Número da conta'
                            type='text'
                            required
                            value={values.accountNumber}
                            onChange={handleChange('accountNumber')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Dígito'
                            type='text'
                            required
                            value={values.digit}
                            onChange={handleChange('digit')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    {/* Buttons */}
                    <Grid
                        item container xs={10}
                        alignItems='baseline'
                        style={styles.divAction}>
                        <Grid
                            item container xs={6}
                            justify='flex-start'>
                            <Button onClick={this.back} style={styles.actionButton}>
                                Voltar
                            </Button>
                        </Grid>

                        <Grid
                            item container xs={6}
                            justify='flex-end'>
                            <Button onClick={this.continue} style={styles.actionButton}>
                                Continuar
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
        marginTop: '24px'
    }
}

export default AccountDetails