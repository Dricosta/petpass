import React, { Component } from 'react'
import '../../reset.scss'
import Navbar from '../Navbar'
import Grid from '@material-ui/core/Grid'
//import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Footer from '../Footer'

export class UserDetails extends Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }

  render() {
    const { values, handleChange, handleUpload } = this.props

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
            <h1 style={styles.h1}>Cadastro como usuário</h1>
          </Grid>
        </Grid>

        {/* Body */}
         
         <Grid item xs={12} sm={6} container
            justify='center' alignItems='center'
            style={styles.form}>
            <Grid item xs={12} container
              justify='center' alignItems='center'>
              {values.photoPreview && <Grid item container xs={10} justify='center' alignItems='center'>
                <img src={values.photoPreview} alt='Foto de perfil' style={styles.photo} />
              </Grid>}
              <Grid item xs={10}>
                <input
                  accept="image/*"
                  id="photo"
                  multiple
                  type="file"
                  onChange={handleUpload('photo')}
                  hidden
                />
                <label htmlFor="photo">
                  <Button variant="contained" component="span" fullWidth
                    style={styles.buttonUpload}>
                    <PhotoCamera /> Escolha uma foto de perfil
                  </Button>
                </label>
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Nome'
                  value={values.name}
                  onChange={handleChange('name')}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Email'
                  value={values.email}
                  onChange={handleChange('email')}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Senha'
                  type='password'
                  value={values.password}
                  onChange={handleChange('password')}
                  margin='normal'
                  variant='outlined'
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
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Nascimento'
                  type='date'
                  defaultValue={values.birthday}
                  onChange={handleChange('birthday')}
                  variant='outlined'
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Endereço'
                  value={values.address}
                  onChange={handleChange('address')}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={10}>
                <TextField
                  label='Telefone / Celular'
                  value={values.phone}
                  onChange={handleChange('phone')}
                  margin='normal'
                  variant='outlined'
                  fullWidth
                />
              </Grid>

              <Grid item xs={10}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gênero</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange('gender')}
                    style={styles.radioGroup}
                  >
                    <FormControlLabel value="f" control={<Radio />} label="Feminino" />
                    <FormControlLabel value="m" control={<Radio />} label="Masculino" />
                    <FormControlLabel value="o" control={<Radio />} label="Outro" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item container xs={10}
                justify='space-around'
                style={styles.gridButtons}>
                <Grid item>
                  <Button variant="outlined" href="/">
                    Voltar
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" onClick={this.continue}>
                    Continuar
                  </Button>
                </Grid>
              </Grid>
              </Grid>
            </Grid>

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
  }
}

export default UserDetails
