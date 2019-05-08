import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MyPets from '../MyPets/index';
import Fab from '@material-ui/core/Fab';
import IconPets from '@material-ui/icons/Pets';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import './style.scss'




class InfoUser extends Component {
    constructor(){
        super()
        this.state = {
            ModalAddPet: false
        }
    }

    handleAddPet = () => {
        this.setState(state => ({
            ModalAddPet: !state.ModalAddPet
        }))
    }



    render() {
        return (
            <div className="InfoUser">
                <PerfilOwner/>
                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                        <Comments/>
                        <Comments/>
                    </div>
                    <div className="InfoUser_group-pets">
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <MyPets/>
                        <Fab onClick={this.handleAddPet} aria-label="Pets" className="InfoUser_add-pet" >
                            <IconPets />
                        </Fab>
                    </div>
                </div>

                <Dialog
                open={this.state.ModalAddPet}
                onClose={this.handleAddPet}
                >
                <DialogTitle>Cadastrar Pet</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Cadastre seu novo Pet aqui mesmo, após o cadastro ele aparecerá ao lado direito do seu perfil.
                    </DialogContentText>
                    <div className="UploadPhotoPet">
                        <input accept="image/*" id="btn-banner" type="file" hidden />
                        <label htmlFor="btn-banner"> Foto do Pet
                            <IconButton color="primary" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                    <TextField
                    margin="dense"
                    id="name"
                    label="Nome"
                    type="email"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    id="name"
                    label="Raça"
                    type="email"
                    fullWidth
                    />
                    <TextField
                    margin="dense"
                    id="name"
                    label="Peso"
                    type="email"
                    fullWidth
                    />
                     <TextField
                    margin="dense"
                    id="name"
                    label="Porte"
                    type="email"
                    fullWidth
                    />
                     <TextField
                    margin="dense"
                    id="name"
                    label="Descrição"
                    type="email"
                    fullWidth
                    />
                </DialogContent>
                <DialogActions className="DialogActionsButtons">
                    <Button onClick={this.handleAddPet} variant="contained" color="secondary">
                    Cancelar
                    </Button>
                    <Button  variant="contained" color="primary">
                    Cadastrar
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default InfoUser;
