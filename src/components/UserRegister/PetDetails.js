import React, { Component } from 'react'
import '../../reset.scss'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput'

export class PetDetails extends Component {
    state = {
        idOwner: '',
        status: '',
        name: '',
        animalRegister: '',
        description: '',
        photo: '',
        breed: '',
        weight: '',
        animalSize: '',
        animalType: ''
    }

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
            <div>
                {/* Header */}
                <Grid container>
                    <Grid item xs={12}>
                        <header style={styles.header}>
                            <Navbar />
                        </header>
                    </Grid>
                    <Grid item xs={12}>
                        <h1 style={styles.h1}>Cadastre seu pet</h1>
                    </Grid>
                </Grid>

                {/* Body */}
                <Grid container direction='row' spacing={8} justify='center'>
                    <Grid container direction='row' justify='center'>
                        <Grid item xs={10} sm={8} container direction='row' justify='center'>
                            <form style={styles.formInput}>
                                <TextField
                                    label="Nome"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    fullWidth={true}
                                    onChange={handleChange('petName')}
                                    defaultValue={values.petName}
                                />

                                <TextField
                                    label="Número de identificação"
                                    margin="normal"
                                    variant="outlined"
                                    type='email'
                                    required={true}
                                    fullWidth={true}
                                    onChange={handleChange('idNumber')}
                                    defaultValue={values.idNumber}
                                />

                                <Grid item container xs={12} sm={4} justify='center'>
                                    <input accept="image/*" id="btn-petAvatar" type="file" hidden />
                                    <label htmlFor="btn-petAvatar">Foto
                                        <IconButton color="primary" component="span">
                                            <PhotoCamera />
                                        </IconButton>
                                    </label>
                                </Grid>

                                <TextField
                                    label="Descrição"
                                    margin="normal"
                                    variant="outlined"
                                    multiline
                                    fullWidth={true}
                                    onChange={handleChange('petBio')}
                                    defaultValue={values.petBio}
                                />

                                <TextField
                                    label="Raça"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    fullWidth={true}
                                    onChange={handleChange('breed')}
                                    defaultValue={values.breed}
                                />

                                <TextField
                                    label="Peso"
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    fullWidth={true}
                                    onChange={handleChange('weight')}
                                    defaultValue={values.weight} />

                                <FormControl variant="outlined" style={styles.selectSize}>
                                    <InputLabel
                                        ref={ref => {
                                            this.InputLabelRef = ref;
                                        }}
                                        htmlFor="outlined-size"
                                        style={styles.selectSize}>
                                        Porte
                                    </InputLabel>
                                    <Select
                                        value={this.state.animalSize}
                                        onChange={handleChange('size')}
                                        input={
                                            <OutlinedInput
                                                labelWidth={100}
                                                name="size"
                                                id="outlined-size"
                                            />
                                        }
                                    >
                                        <MenuItem value="">

                                        </MenuItem>
                                        <MenuItem value={'small'}>Pequeno</MenuItem>
                                        <MenuItem value={'medium'}>Médio</MenuItem>
                                        <MenuItem value={'big'}>Grande</MenuItem>
                                    </Select>
                                </FormControl>
                            </form>
                        </Grid>

                        <Grid item container justify='center' style={styles.footer}>
                            <Grid item>
                                <Button children='Voltar' color='primary' variant='outlined'
                                    style={styles.button} onClick={this.back} />
                            </Grid>
                            <Grid item>
                                <Button children='Continuar' color='primary' variant='outlined'
                                    style={styles.button} onClick={this.continue} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                {/* Footer */}
                <Footer />
            </div>
        )
    }
}

const styles = {
    header: {
        backgroundColor: '#3d3029',
        height: 76
    },
    h1: {
        textAlign: 'center',
        backgroundColor: '#3d3029',
        color: '#fff',
        fontWeight: 100,
        padding: '20px 10px',
        marginBottom: 30
    },
    formPage: {
        paddingTop: 76,
    },
    banner: {
        backgroundColor: '#d3d3d3',
        margin: '0 10px',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%'
    },
    formInput: {
        width: '100%'
    },
    inputDate: {
        margin: '12px 0'
    },
    radioGroup: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    button: {
        margin: 15
    },
    footer: {
        marginBottom: 30
    },
    selectSize: {
        width: '100%'
    }
}

export default PetDetails
