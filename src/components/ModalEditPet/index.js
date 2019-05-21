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
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss'

const ModalEditPet = ({ openModal, handleModal, handleSubmitEditPet, editar, loading }) => {
    return (
            <Dialog open={openModal} onClose={handleModal}>
                <DialogTitle>Editar seu Pet</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edite as informação do seu Pet aqui mesmo.
                    </DialogContentText>
                    <div className="UploadPhotoPet">
                        <input accept="image/*" id="btn-banner" type="file" hidden />
                        <label htmlFor="btn-banner"> Foto do Pet
                            <IconButton color="primary" component="span">
                                <PhotoCamera />
                            </IconButton>
                        </label>
                    </div>
                    <form onSubmit={handleSubmitEditPet}>
                        <TextField
                        margin="dense"
                        id="name"
                        label="Nome"
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="breed"
                        label="Raça"
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="weight"
                        label="Peso"
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="animalSize"
                        label="Porte"
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="description"
                        label="Descrição"
                        fullWidth
                        />
                        <TextField
                        margin="dense"
                        id="animalType"
                        label="Tipo do Pet"
                        fullWidth
                        />
                        <div className="btn-group">
                            <button className="btn-group_cancelar" type="button" onClick={handleModal}>
                                Cancelar
                            </button>
                            <button className="btn-group_editar" type="submit" variant="contained" color="primary">
                                {!!loading && <CircularProgress className="loading"/>}
                                {editar}
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        
    );
}

export default ModalEditPet;
