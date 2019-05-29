import React, { Component } from 'react'
import '../../reset.scss'
import api from '../../services/api'
import {
    Grid, TextField, Button, FormControlLabel,
    Checkbox, FormControl, FormLabel
} from '@material-ui/core'

export class WorkDetails extends Component {
    state = {
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    }

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
            'weekDays': this.state,
            'serviceName': this.props.values.serviceName,
            'serviceDescription': this.props.values.serviceDescription,
            'serviceValue': this.props.values.serviceValue,
            'startTime': this.props.values.startTime,
            'endTime': this.props.values.endTime
        }

        const photo = this.props.values.photo
        var reader = new FileReader();
        reader.onloadend = function () {
            newUser.photo = reader.result
            api.post('jobber/signup', newUser)
                .then(function (response) {
                    console.log('OBJETO QUE ESTÁ SENDO ENVIADO: ',newUser)
                    console.log('RESPOSTA: ',response)
                    localStorage.setItem('idJobber', response.data.result._id);
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

                    <Grid item container xs={12} justify='center'>
                        <h2>Informações de serviço</h2>
                    </Grid>
                    <Grid item container xs={10} justify='center'>
                        <h5>Dia / Horário</h5>
                    </Grid>

                    {/* Checkboxes */}
                    <Grid item container xs={10}
                        justify='center' alignItems='center'>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className='weeklabel'>
                                Dias da semana
                        </FormLabel>
                            <Grid item container xs={12} justify='center' alignItems='baseline'>
                                <Grid item container xs={6}
                                    justify='flex-start' direction='column'>

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.monday}
                                                onChange={this.handleChange('monday')}
                                                value="monday" />
                                        }
                                        label="Segunda"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.tuesday}
                                                onChange={this.handleChange('tuesday')}
                                                value="tuesday"
                                            />
                                        }
                                        label="Terça"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.wednesday}
                                                onChange={this.handleChange('wednesday')}
                                                value="wednesday"
                                            />
                                        }
                                        label="Quarta"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.thursday}
                                                onChange={this.handleChange('thursday')}
                                                value="thursday"
                                            />
                                        }
                                        label="Quinta"
                                    />
                                </Grid>

                                <Grid item container xs={6}
                                    justify='flex-start' direction='column'>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.friday}
                                                onChange={this.handleChange('friday')}
                                                value="friday"
                                            />
                                        }
                                        label="Sexta"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.saturday}
                                                onChange={this.handleChange('saturday')}
                                                value="saturday"
                                            />
                                        }
                                        label="Sábado"
                                    />
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                color="primary"
                                                checked={this.state.sunday}
                                                onChange={this.handleChange('sunday')}
                                                value="sunday" />
                                        }
                                        label="Domingo"
                                    />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>

                    <Grid item xs={10}>
                        <h4>Horário de Início</h4>
                    </Grid>

                    <Grid item container xs={10} justify='center' alignItems='center'>

                        <Grid item xs={2}>
                            <TextField
                                type='number'
                                required
                                value={values.startTime}
                                onChange={handleChange('startTime')}
                                margin='normal'
                                fullWidth
                                maxLength='2'
                                InputProps={{ inputProps: { min: 1, max: 24 } }}
                            />
                        </Grid>

                    </Grid>

                    <Grid item xs={10}>
                        <h4>Horário de Término</h4>
                    </Grid>

                    <Grid item container xs={10} justify='center' alignItems='center'>

                        <Grid item xs={2}>
                            <TextField
                                type='number'
                                required
                                value={values.endTime}
                                onChange={handleChange('endTime')}
                                margin='normal'
                                fullWidth
                                InputProps={{ inputProps: { min: 1, max: 24 } }}
                            />
                        </Grid>

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
    checkboxes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        alignItems: 'baseline',
        margin: '20px 0'
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
    },
}

export default WorkDetails