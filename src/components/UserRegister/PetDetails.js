import React, { Component } from 'react'
import '../../reset.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput'
import api from '../../services/api'

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

        let payload = {
            'idOwner': this.state.idOwner,
            'name': this.state.name,
            'description': this.state.description,
            'photo': '',
            'breed': this.state.breed,
            'weight': this.state.weight,
            'animalSize': this.state.animalSize,
            'animalType': this.state.animalType
        }

        const photo = this.props.values.photo
        var reader = new FileReader();
        reader.onloadend = function () {
            payload.photo = reader.result
            console.log(payload)
            api.post('animal/create', payload)
                .then(function (response) {
                    console.log(response.data.result.photo)
                });
        }
        reader.readAsDataURL(photo);

        this.props.nextStep()
        console.log(this.state)
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
            this.setState({ photoPreview: URL.createObjectURL(file), photo: e.target.files[0] })
        }
    }

    render() {
        return (
            <Grid item xs={12} container
                justify='center' alignItems='center' style={styles.formPage}>
                <Grid item xs={12} container
                    justify='center' alignItems='center'>
                    <h2>Cadastre ao menos um pet para começar</h2>
                    {/* Avatar */}
                    {this.state.photoPreview && <Grid item container xs={10} justify='flex-end' alignItems='center'>
                        <label htmlFor="photo">
                            <img src={this.state.photoPreview} alt='Foto de perfil' style={styles.photo} />
                        </label>
                    </Grid>}
                    <Grid item container xs={10} justify='flex-end' alignItems='center'>
                        <input
                            accept="image/*"
                            id="photo"
                            multiple
                            type="file"
                            onChange={this.handleUpload('photo')}
                            hidden
                        />
                        {!this.state.photoPreview && <label htmlFor="photo">
                            <Button variant="contained" component="span" fullWidth style={styles.button}
                            >
                                <PhotoCamera style={styles.icon} />
                            </Button>
                        </label>}
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
                            <InputLabel htmlFor="animalSize">Tipo</InputLabel>
                            <Select
                                value={this.state.animalType}
                                onChange={this.handleChange('animalType')}
                                input={<Input name="animalType" id="animalType" />}
                                autoWidth
                            >
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
                                autoWidth
                            >
                                <MenuItem value=""> </MenuItem>
                                <MenuItem value={'p'}>Pequeno</MenuItem>
                                <MenuItem value={'m'}>Médio</MenuItem>
                                <MenuItem value={'g'}>Grande</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>




                    {/* Buttons */}
                    <Grid item container xs={10} alignItems='baseline' style={styles.divAction}>
                        <Grid item container xs={6} justify='flex-start'>
                            <Button onClick={this.back} style={styles.actionButton}>
                                Voltar
                                </Button>
                        </Grid>
                        <Grid item container xs={6} justify='flex-end'>
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
