import React, { Component } from 'react'
import api from '../../services/api'
import '../../reset.scss'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import {
    Grid, Input, InputLabel, TextField,
    MenuItem, FormControl, Select,
    Button
} from '@material-ui/core'

export class PetDetails extends Component {
    state = {
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

    componentDidMount() {
        const id = localStorage.getItem('idOwner')
        this.setState({ idOwner: id })
    }

    continue = e => {
        e.preventDefault()

        let newPet = {
            'idOwner': this.state.idOwner,
            'name': this.state.name,
            'description': this.state.description,
            'photo': '',
            'breed': this.state.breed,
            'weight': this.state.weight,
            'animalSize': this.state.animalSize,
            'animalType': this.state.animalType
        }

        const photo = this.state.photo
        var reader = new FileReader();
        reader.onloadend = function () {
            newPet.photo = reader.result
            api.post('animal/create', newPet)
                .then(function (response) {
                    console.log('Pet cadastrado!')
                });
        }
        reader.readAsDataURL(photo);

        this.props.nextStep()
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
                    <h2>Registre seu pet</h2>

                    {/* Avatar */}
                    {
                        this.state.photoPreview &&
                        <Grid item container xs={10}
                            justify='flex-end' alignItems='center'>
                            <label htmlFor="photo">
                                <img
                                    src={this.state.photoPreview}
                                    alt='Foto de perfil'
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
                            type='text'
                            required
                            value={this.state.weight}
                            onChange={this.handleChange('weight')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <FormControl style={styles.select} >
                            <InputLabel htmlFor="animalSize">
                                Tipo
                            </InputLabel>
                            <Select
                                value={this.state.animalType}
                                onChange={this.handleChange('animalType')}
                                input={<Input name="animalType" id="animalType" />}
                                autoWidth>
                                <MenuItem value=""> </MenuItem>
                                <MenuItem value={'dog'}>Cachorro</MenuItem>
                                <MenuItem value={'cat'}>Gato</MenuItem>
                                <MenuItem value={'other'}>Outro</MenuItem>
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
                                <MenuItem value={'p'}>Pequeno</MenuItem>
                                <MenuItem value={'m'}>Médio</MenuItem>
                                <MenuItem value={'g'}>Grande</MenuItem>
                            </Select>
                        </FormControl>
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

export default PetDetails
