import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

/* import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera' */

export class PetDetails extends Component {
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
        console.log(values.petName)
        return (

            <Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Cadastre seu pet
                        </Typography>
                    </Toolbar>
                </AppBar>

                <TextField label='Nome'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <TextField label='Número de identificação'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} /> <br />

                <TextField label='Descrição'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <TextField label='Foto'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <TextField label='Raça'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <TextField label='Peso'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <TextField label='Porte'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('')}
                    defaultValue={''} />

                <Button children='Continuar' color='primary' variant='outlined'
                    style={styles.button} onClick={this.continue} />

                <Button children='Voltar' color='primary' variant='outlined'
                    style={styles.button} onClick={this.back} />
            </Fragment>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default PetDetails
