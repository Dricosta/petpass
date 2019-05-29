import React, { Component } from 'react'
import '../../reset.scss'
import {
    Grid, Input, InputLabel, TextField,
    MenuItem, FormControl, Select,
    Button, InputAdornment
} from '@material-ui/core'

export class ServiceDetails extends Component {
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
            <Grid container item xs={12}
                justify='center' alignItems='center'
                style={styles.formPage}>
                <Grid item container xs={12}
                    justify='center' alignItems='center'>

                    <Grid item container xs={12} justify='center'>
                        <h2>Registro de serviço</h2>
                    </Grid>

                    {/* Inputs */}
                    <Grid item xs={10}>
                        <FormControl style={styles.select} >
                            <InputLabel htmlFor="serviceName">
                                Nome
                            </InputLabel>
                            <Select
                                value={values.serviceName}
                                onChange={handleChange('serviceName')}
                                input={<Input name="serviceName" id="serviceName" />}
                                autoWidth>
                                <MenuItem value=""> </MenuItem>
                                <MenuItem value={'passeio'}>Passeio</MenuItem>
                                <MenuItem value={'banho/tosa'}>Banho / Tosa</MenuItem>
                                <MenuItem value={'petsitter'}>Pet Sitter</MenuItem>
                                <MenuItem value={'hospedagem'}>Hospedagem</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Descrição'
                            type='text'
                            multiline
                            required
                            value={values.serviceDescription}
                            onChange={handleChange('serviceDescription')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>
                    
                    <Grid item xs={10}>
                        <TextField
                            label='Valor em Real'
                            type='number'
                            required
                            value={values.serviceValueSm}
                            onChange={handleChange('serviceValueSm')}
                            margin='normal'
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                            }}
                        />
                    </Grid>
                    
                    {/* Buttons */}
                    <Grid item container xs={10}
                        alignItems='baseline'
                        style={styles.divAction}>
                        <Grid item container xs={6}
                            justify='flex-start'>
                            <Button
                                onClick={this.back}
                                style={styles.actionButton}>
                                Voltar
                            </Button>
                        </Grid>

                        <Grid item container xs={6}
                            justify='flex-end'>
                            <Button
                                onClick={this.continue}
                                style={styles.actionButton}>
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
        border: '1px solid #282222'
    },
    photo: {
        height: '82px',
        width: '85px',
        maxWidth: '85px',
        maxHeight: '82px',
        objectFit: 'cover',
        borderRadius: '50%',
        margin: '10px'
    },
    icon: {
        height: '100%',
        width: '100%',
        maxWidth: '85px',
        maxHeight: '82px',
        objectFit: 'contain',
        borderRadius: '50%',
        margin: '10px',
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
    select: {
        width: '100%',
        marginTop: '10px'
    }
}

export default ServiceDetails
