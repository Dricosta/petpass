import React, { Component } from 'react'
import '../../reset.scss'
import Navbar from '../Navbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns'
import { InlineDatePicker, MuiPickersUtilsProvider } from 'material-ui-pickers'

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
    const { values, handleChange, handleChangeDate } = this.props

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
        <Grid container direction='row' spacing={8} justify='center'>
          <Grid item container xs={10} sm={8} direction='row' spacing={8}>
            <Grid item container justify='center' xs={12} sm={8}>
              <div style={styles.banner}>
                <input accept="image/*" id="btn-banner" type="file" hidden />
                <label htmlFor="btn-banner">Foto de capa
                  <IconButton color="primary" component="span">
                    <PhotoCamera />
                  </IconButton>
                </label>
              </div>
            </Grid>

            <Grid item container xs={12} sm={4} justify='center'>
              <input accept="image/*" id="btn-avatar" type="file" hidden />
              <label htmlFor="btn-avatar">Foto de perfil
                <IconButton color="primary" component="span">
                  <PhotoCamera />
                </IconButton>
              </label>
            </Grid>
          </Grid>

          <Grid container direction='row' justify='center'>
            <Grid item xs={10} sm={8} container direction='row' justify='center'>
              <form style={styles.formInput}>
                <TextField
                  label="Nome"
                  margin="normal"
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  onChange={handleChange('name')}
                  defaultValue={values.name}
                />

                <TextField
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type='email'
                  required={true}
                  fullWidth={true}
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                />

                <TextField
                  label="Senha"
                  margin="normal"
                  variant="outlined"
                  type='password'
                  required={true}
                  fullWidth={true}
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                />

                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <InlineDatePicker
                    keyboard
                    clearable
                    variant="outlined"
                    label="Nascimento"
                    fullWidth={true}
                    value={values.birthday}
                    style={styles.inputDate}
                    onChange={handleChangeDate('birthday')}
                    format={"dd/MM/yyyy"}
                    mask={[/\d/, /\d/, "/", /\d/, /\d/, "/", /\d/, /\d/, /\d/, /\d/]}
                  />
                </MuiPickersUtilsProvider>

                <Grid item xs={10} sm={8} container justify='center'>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gênero</FormLabel>
                    <RadioGroup
                      aria-label="gender"
                      style={styles.radioGroup}
                      name="gender"
                      value={values.genre}
                      onChange={handleChange('genre')}
                    >
                      <FormControlLabel
                        value="F"
                        control={<Radio color="primary" />}
                        label="Feminino"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="M"
                        control={<Radio color="primary" />}
                        label="Masculino"
                        labelPlacement="end"
                      />
                      <FormControlLabel
                        value="O"
                        control={<Radio color="primary" />}
                        label="Outro"
                        labelPlacement="end"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                <TextField
                  label="Descrição"
                  margin="normal"
                  variant="outlined"
                  multiline
                  fullWidth={true}
                  onChange={handleChange('bio')}
                  defaultValue={values.bio}
                />

                <TextField
                  label="Endereço"
                  margin="normal"
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  onChange={handleChange('address')}
                  defaultValue={values.address}
                />

                <TextField
                  label="Telefone"
                  margin="normal"
                  variant="outlined"
                  required={true}
                  fullWidth={true}
                  onChange={handleChange('phone')}
                  mask={["(", /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
                  defaultValue={values.phone} />
              </form>
            </Grid>

            <Grid item container justify='center' style={styles.footer}>
              <Grid item>
                <Button variant="outlined" href="/" style={styles.button}>
                  Voltar
                </Button>
              </Grid>
              <Grid item>
                <Button children='Continuar' color='primary' variant='outlined'
                  style={styles.button} onClick={this.continue} />
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
