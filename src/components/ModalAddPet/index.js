import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CloseIcon from '@material-ui/icons/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss';



const ModalAddPet = ({ openModal, handleModal, handleSubmitPetAdd, handleUpload, loading, cadastrar}) => {
    return (
        <Dialog open={openModal} onClose={handleModal}>
            <div className="header_modal">
                <DialogTitle>Cadastrar Pet</DialogTitle>
                <Button className="btn-cancelar" onClick={handleModal}>
                    <CloseIcon className="btn-cancelar-icon" />
                </Button>
            </div>
            <DialogContent>
                <DialogContentText>
                Cadastre seu novo Pet aqui mesmo, após o cadastro ele aparecerá ao lado direito do seu perfil.
                </DialogContentText>
                <div className="UploadPhotoPet">
                    <input accept="image/*" id="btn-banner" type="file" hidden onChange={handleUpload} />
                    <label htmlFor="btn-banner"> Foto do Pet
                        <IconButton color="primary" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </div>
                <form onSubmit={handleSubmitPetAdd}>
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
                        <button type="submit" className="btn-cadastrar">
                        {!!loading && <CircularProgress className="loading"/>}
                        {cadastrar}
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalAddPet;
