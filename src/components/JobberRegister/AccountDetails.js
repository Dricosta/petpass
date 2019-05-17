import React, { Component } from 'react'
import '../../reset.scss'
import api from '../../services/api'
import { Grid, TextField, Button } from '@material-ui/core'

export class AccountDetails extends Component {
    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        const parseBirthday = new Date(this.props.values.birthday)

        let newUser = {
            'name': this.props.values.name,
            'email': this.props.values.email,
            'password': this.props.values.password,
            'description': this.props.values.description,
            'accountNumber': this.props.values.accountNumber,
            'digit': this.props.values.digit,
            'agency': this.props.values.agency,
            'bankCode': this.props.values.bankCode,
            'birthday': Date.parse(parseBirthday),
            'lat': this.props.values.lat,
            'lng': this.props.values.lng,
            'phone': this.props.values.phone,
            'gender': this.props.values.gender,
        }

        const photo = this.props.values.photo
        var reader = new FileReader();
        reader.onloadend = function () {
            newUser.photo = reader.result
            api.post('user/signup', newUser)
                .then(function (response) {
                    localStorage.setItem('idOwner', response.data.result._id);
                });
        }
        reader.readAsDataURL(photo);
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

                    <h2>Informe sua conta</h2>
                    <h4>(para compra de créditos)</h4>

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