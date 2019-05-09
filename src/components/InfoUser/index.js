import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MyPets from '../MyPets/index';
import Fab from '@material-ui/core/Fab';
import IconPets from '@material-ui/icons/Pets';
import ModalAddPet from '../ModalAddPet/index';
import ModalDeletePet from '../ModalDeletePet/index';
import ModalEditPet from '../ModalEditPet/index';
import api from '../../services/api';
import './style.scss'


class InfoUser extends Component {
    constructor(){
        super()
        this.state = {
            ModalAddPet: false,
            ModalDeletePet: false,
            ModalEditPet: false,
            Comments: []
        }
    }
    

    async componentDidMount(){
        const response = await api.get(`user/animals/5ca8c905725d7b51b271c31e`)
        this.setState({
            Comments: response.data.result
        })
        console.log('Comentarios:',this.state.Comments)
    }
   
    handleAddPet = () => {
        this.setState(state => ({
            ModalAddPet: !state.ModalAddPet
        }))
    }

    handleDeletePet = () => {
        this.setState(state => ({
            ModalDeletePet: !state.ModalDeletePet
        }))
    }

    handleEditPet = () => {
        this.setState(state => ({
            ModalEditPet: !state.ModalEditPet
        }))
    }



    render() {
        return (
            <div className="InfoUser">
                <PerfilOwner/>
                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                        <Comments />
                    </div>
                    <div className="InfoUser_group-pets">
                        <MyPets 
                        handleDelete={this.handleDeletePet}
                        handleEdit={this.handleEditPet}
                        />
                        <Fab onClick={this.handleAddPet} aria-label="Pets" className="InfoUser_add-pet" >
                            <IconPets />
                        </Fab>
                    </div>
                </div>

                <ModalAddPet
                openModal={this.state.ModalAddPet}
                handleModal={this.handleAddPet}/>

                <ModalDeletePet
                openDeleteModal={this.state.ModalDeletePet}
                handleDeleteModal={this.handleDeletePet}/>

                <ModalEditPet
                openModal={this.state.ModalEditPet}
                handleModal={this.handleEditPet}/>
            </div>
        );
    }
}

export default InfoUser;
