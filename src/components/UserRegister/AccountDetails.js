import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

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

            <Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Informações da conta
          </Typography>
                    </Toolbar>
                </AppBar>

                <TextField label='Número da conta'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('accountNumber')}
                    defaultValue={values.accountNumber} />

                <TextField label='Agência'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('agencyNumber')}
                    defaultValue={values.agencyNumber} /> <br />

                <TextField label='Dígito'
                    type='text'
                    variant='outlined'
                    onChange={handleChange('digit')}
                    defaultValue={values.digit} />

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

export default AccountDetails
