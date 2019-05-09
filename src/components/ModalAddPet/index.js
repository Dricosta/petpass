import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'

const ModalAddPet = ({ openModal, handleModal}) => {
    return (
        <div>
             <Dialog
                open={openModal}
                onClose={handleModal}
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
                    <Button onClick={handleModal} variant="contained" color="secondary">
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

export default ModalAddPet;
