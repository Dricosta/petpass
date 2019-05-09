import React, { Component } from 'react'
import '../../reset.scss'
import Navbar from '../Navbar'
import Grid from '@material-ui/core/Grid'
//import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/AccountCircle'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Footer from '../Footer'
import MaskedInput from 'react-text-mask'

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    render() {
        const { values, handleChange, handleUpload } = this.props

        return (
            <Grid item xs={12} container
                justify='center' alignItems='center' style={styles.formPage}>
                <Grid item xs={12} container
                    justify='center' alignItems='center'>

                    {/* Avatar */}
                    {values.photoPreview && <Grid item container xs={10} justify='flex-end' alignItems='center'>
                        <label htmlFor="photo">
                            <img src={values.photoPreview} alt='Foto de perfil' style={styles.photo} />
                        </label>
                    </Grid>}
                    <Grid item container xs={10} justify='flex-end' alignItems='center'>
                        <input
                            accept="image/*"
                            id="photo"
                            multiple
                            type="file"
                            onChange={handleUpload('photo')}
                            hidden
                        />
                        {!values.photoPreview && <label htmlFor="photo">
                            <Button variant="contained" component="span" fullWidth style={styles.button}
                            >
                                <PhotoCamera style={styles.photo} />
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
                            value={values.name}
                            onChange={handleChange('name')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Email'
                            type='email'
                            required
                            value={values.email}
                            onChange={handleChange('email')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Senha'
                            type='password'
                            required
                            value={values.password}
                            onChange={handleChange('password')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Apresentação'
                            multiline
                            value={values.description}
                            onChange={handleChange('description')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Nascimento'
                            type='date'
                            required
                            defaultValue={values.birthday}
                            onChange={handleChange('birthday')}
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Endereço'
                            type='text'
                            required
                            value={values.address}
                            onChange={handleChange('address')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <TextField
                            label='Telefone / Celular'
                            type='text'
                            value={values.phone}
                            onChange={handleChange('phone')}
                            margin='normal'
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={10}>
                        <FormControl component="fieldset" style={styles.radioGroup}>
                            <FormLabel component="legend">Gênero</FormLabel>
                            <RadioGroup
                                aria-label="Gender"
                                name="gender"
                                value={values.gender}
                                onChange={handleChange('gender')}
                            >
                                <FormControlLabel value="f" control={<Radio />} label="Feminino" />
                                <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                                <FormControlLabel value="o" control={<Radio />} label="Outro" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    {/* End Inputs */}

                    {/* Buttons */}
                    <Grid item container xs={10} alignItems='baseline'>
                        <Grid item container xs={6} justify='flex-start'>
                            <Button href="/" style={styles.actionButton}>
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
    photo: {
        height: '82px',
        width: '85px',
        maxWidth: '85px',
        maxHeight: '82px',
        objectFit: 'cover',
        borderRadius: '50%',
        margin: '10px'
    },
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
    radioGroup: {
        margin: '20px 0px'
    },
    actionButton: {
        background: '#282222',
        boxShadow: '4px 5px 15px rgba(0, 0, 0, 0.25)',
        borderRadius: '4px',
        color: '#fff',
        textTransform: 'none',
    }
}

export default UserDetails