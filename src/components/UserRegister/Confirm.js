import React, { Component, Fragment } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'

/* import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera' */

export class Confirm extends Component {
    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        this.props.nextStep()
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {
        const { values: { email, password, avatar, banner, name,
            birthday, genre, bio, address, phone, accountNumber,
            agencyNumber, digit, pet: [{
                petName, idNumber, petBio, petAvatar,
                breed, weight, size }] }} = this.props

        return (

            <Fragment>
                <AppBar position="static" color="default">
                    <Toolbar>
                        <Typography variant="h6" color="inherit">
                            Confirme seus dados
                        </Typography>
                    </Toolbar>
                </AppBar>

                <List component="nav">
                    <ListItem>
                        <ListItemText primary="Email" secondary={email} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Nome" secondary={name} />
                    </ListItem>
                </List>

                <Button children='Confirmar e continuar' color='primary' variant='outlined'
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

export default Confirm
