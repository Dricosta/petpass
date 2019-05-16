import React, { Component } from 'react'
import '../../reset.scss'
import Grid from '@material-ui/core/Grid'
import { List, ListItem, ListItemText } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import api from '../../services/api'

export class AccountDetails extends Component {
    continue = e => {
        e.preventDefault()
        //PROCESS FORM
        /* this.props.nextStep() */
        const parseBirthday = new Date(this.props.values.birthday)
        api.post('user/signup', {

            'name': this.props.values.name,
            'email': this.props.values.email,
            'password': this.props.values.password,
            'description': this.props.values.description,
            'accountNumber': this.props.values.accountNumber,
            'digit': this.props.values.digit,
            'agency': this.props.values.agency,
            'bankCode': this.props.values.bankCode,
            'birthday': Date.parse(parseBirthday),
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
        const { values } = this.props

        return (
            <Grid item xs={12} container
                justify='center' alignItems='center'>
                <Grid item xs={12} container
                    justify='center' alignItems='center'>
                    <Grid item xs={12} sm={8} container direction='row' justify='flex-start'>
                    <h2> Confirme seus dados </h2>
                    {values.photoPreview && <Grid item container xs={10} justify='center' alignItems='center'>
                        <label htmlFor="photo">
                            <img src={values.photoPreview} alt='Foto de perfil' style={styles.photo} />
                        </label>
                    </Grid>}
                        <List component="nav">
                            <ListItem>
                                <ListItemText primary="Nome" secondary={values.name} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Email" secondary={values.email} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Apresentação" secondary={values.description} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Nascimento" secondary={values.birthday} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Telefone / Celular" secondary={values.phone} />
                            </ListItem>
                            <ListItem>
                                {values.gender === 'f' && <ListItemText primary="Gênero" secondary='Feminino' />}
                                {values.gender === 'm' && <ListItemText primary="Gênero" secondary='Masculino' />}
                                {values.gender === 'o' && <ListItemText primary="Gênero" secondary='Outro' />}
                                {values.gender === '' && <ListItemText primary="Gênero" secondary='Não informado' />}
                            </ListItem>
                        </List>
                        <h2> Dados da conta </h2>
                        <List component='nav'>
                            <ListItem>
                                <ListItemText primary="Código do banco" secondary={values.bankCode} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Agência" secondary={values.agency} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Número da Conta" secondary={values.accountNumber} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Dígito" secondary={values.digit} />
                            </ListItem>
                        </List>
                    </Grid>

                    {/* Buttons */}
                    <Grid item container xs={10} alignItems='baseline' style={styles.divAction}>
                        <Grid item container xs={6} justify='flex-start'>
                            <Button onClick={this.back} style={styles.actionButton}>
                                Voltar
                                </Button>
                        </Grid>
                        <Grid item container xs={6} justify='flex-end'>
                            <Button children='Confirmar' color='primary' variant='outlined'
                                style={styles.actionButton} onClick={this.continue} />
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
    },
    photo: {
        height: '82px',
        width: '85px',
        maxWidth: '85px',
        maxHeight: '82px',
        objectFit: 'cover',
        borderRadius: '50%',
        margin: '10px'
    }
}

export default AccountDetails