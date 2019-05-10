import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const ModalDeletePet = ({openDeleteModal, handleDeleteModal, DeletePet}) => {
    return (
        <Dialog open={openDeleteModal} onClose={handleDeleteModal}>
            <DialogTitle>Excluir?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Deseja mesmo excluir o seu pet?
                </DialogContentText>
            </DialogContent>
            <DialogActions className="DialogActionsButtons">
                <Button onClick={handleDeleteModal} variant="contained" color="secondary">
                    Não
                </Button>
                <Button onClick={DeletePet} variant="contained" color="primary">
                    Sim
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default ModalDeletePet;
