import React, { Component } from 'react'
import api from '../../services/api'
import '../../reset.scss'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {
    Grid, Input, InputLabel, TextField,
    MenuItem, FormControl, Select,
    Button, InputAdornment
} from '@material-ui/core'
import MsgNotification from '../MsgNotification'

export class PetDetails extends Component {
    state = {
        LoginNotification: false,
        LoginMsg: '',
        LoginMsgColor: true,
        LoginNotificationIcon: true,
        idOwner: '',
        name: '',
        description: '',
        photo: '',
        photoPreview: '',
        breed: '',
        weight: '',
        animalSize: '',
        animalType: ''
    }

    // componentDidMount() {
    //     const id = localStorage.getItem('idOwner')
    //     this.setState({ idOwner: id })
    // }

    continue = e => {
        e.preventDefault()

        if ((
            this.state.name &&
            this.state.description &&
            this.state.breed &&
            this.state.weight &&
            this.state.animalSize &&
            this.state.animalType
        ) === '') {
            this.setState({
                LoginNotificationIcon: false,
                LoginNotification: true,
                LoginMsg: 'Preencha todos os dados',
                LoginMsgColor: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        LoginNotification: false
                    })
                }, 2000)
            })
            return false
        }


        let newPet = {
            'idOwner': localStorage.getItem('idOwner'),
            'name': this.state.name,
            'description': this.state.description,
            'photo': '',
            'breed': this.state.breed,
            'weight': this.state.weight,
            'animalSize': this.state.animalSize,
            'animalType': this.state.animalType
        }

        const photo = this.state.photo

        if (photo !== '') {
            var reader = new FileReader();
            reader.onloadend = function () {
                newPet.photo = reader.result
                api.post('animal/create', newPet)
                    .then(function (response) {
                        console.log(newPet)
                        console.log(response)
                    });
            }
            reader.readAsDataURL(photo)

            localStorage.clear()
            this.props.nextStep()
        } else {

            newPet.photo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjUyRUM4NkYyREM2MTFFOTg4MUFBMEYyOUMwNjA1NUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjUyRUM4NzAyREM2MTFFOTg4MUFBMEYyOUMwNjA1NUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyNTJFQzg2RDJEQzYxMUU5ODgxQUEwRjI5QzA2MDU1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyNTJFQzg2RTJEQzYxMUU5ODgxQUEwRjI5QzA2MDU1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRG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'

            api.post('animal/create', newPet)
                .then(function (response) {
                    console.log(newPet)
                    console.log(response)
                });
            localStorage.clear()
            this.props.nextStep()
        }
    }

    back = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleUpload = input => e => {
        if (input === 'photo') {
            const file = e.target.files[0]
            this.setState({
                photoPreview: URL.createObjectURL(file),
                photo: e.target.files[0]
            })
        }
    }

    render() {
        return (
            <Grid container item xs={12}
                justify='center' alignItems='center'
                style={styles.formPage}>
                <Grid item container xs={12}
                    justify='center' alignItems='center'>

                    <Grid item container xs={12} justify='center'>
                        <h2>Cadastre seu pet</h2>
                    </Grid>

                    {/* Avatar */}
                    {
                        this.state.photoPreview &&
                        <Grid item container xs={10}
                            justify='flex-end' alignItems='center'>
                            <label htmlFor="photo">
                                <img
                                    src={this.state.photoPreview}
                                    alt='Foto do seu pet'
                                    style={styles.photo} />
                            </label>
                        </Grid>
                    }

                    <Grid item container xs={10}
                        justify='flex-end' alignItems='center'>
                        <input
                            accept="image/*"
                            id="photo"
                            multiple
                            type="file"
                            onChange={this.handleUpload('photo')}
                            hidden />
                        {
                            !this.state.photoPreview &&
                            <label htmlFor="photo">
                                <Button variant="contained"
                                    component="span"
                                    fullWidth
                                    style={styles.button}>
                                    <PhotoCamera style={styles.icon} />
                                </Button>
                            </label>
                        }
                    </Grid>
                    {/* End Avatar */}
                    {/* Inputs */}
                    <Grid item xs={10}>
                        <TextField
                            label='Nome'
                            type='text'
                            required
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Descrição'
                            type='text'
                            required
                            value={this.state.description}
                            onChange={this.handleChange('description')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Raça'
                            type='text'
                            required
                            value={this.state.breed}
                            onChange={this.handleChange('breed')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Peso'
                            type='number'
                            required
                            value={this.state.weight}
                            onChange={this.handleChange('weight')}
                            margin='normal'
                            fullWidth
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
                            }}
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <FormControl style={styles.select} >
                            <InputLabel htmlFor="animalType">
                                Tipo
                            </InputLabel>
                            <Select
                                value={this.state.animalType}
                                onChange={this.handleChange('animalType')}
                                input={<Input name="animalType" id="animalType" />}
                                autoWidth>
                                <MenuItem value=""> </MenuItem>
                                <MenuItem value={'Cachorro'}>Cachorro</MenuItem>
                                <MenuItem value={'Gato'}>Gato</MenuItem>
                                <MenuItem value={'Outros'}>Outro</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={10}>
                        <FormControl style={styles.select} >
                            <InputLabel htmlFor="animalSize">Porte</InputLabel>
                            <Select
                                value={this.state.animalSize}
                                onChange={this.handleChange('animalSize')}
                                input={<Input name="animalSize" id="animalSize" />}
                                autoWidth>
                                <MenuItem value=""> </MenuItem>
                                <MenuItem value={'Porte Pequeno'}>Pequeno</MenuItem>
                                <MenuItem value={'Porte Médio'}>Médio</MenuItem>
                                <MenuItem value={'Porte Grande'}>Grande</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* Buttons */}
                    <Grid item container xs={10}
                        alignItems='baseline'
                        style={styles.divAction}>
                        <Grid item container xs={6}
                            justify='flex-start'>
                            {/* <Button disabled
                                onClick={this.back}
                                style={styles.actionButton}>
                                Voltar
                            </Button> */}
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

                    <MsgNotification
                        PetNotification={this.state.LoginNotification}
                        PetMsg={this.state.LoginMsg}
                        PetMsgColor={this.state.LoginMsgColor}
                        PetNotificationIcon={this.state.LoginNotification} />

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

export default PetDetails
