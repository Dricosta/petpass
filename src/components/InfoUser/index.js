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
            PetsOwner: []
        }
    }
    

    async componentDidMount(){
        const response = await api.get(`user/animals/5ca8c905725d7b51b271c31e`)
        this.setState({
            PetsOwner: response.data.result
        })
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

     handleSubmitPetAdd = (e) => {
        e.preventDefault()
        const { name, breed, weight, animalSize, animalType, description } = e.target
        

        const newPets = {
            idOwner: "5ca8c905725d7b51b271c31e",
            name: name.value,
            breed: breed.value,
            weight: weight.value,
            animalSize: animalSize.value,
            animalType: animalType.value,
            description: description.value
        }

        api.post(`/animal/create`, {
            ...newPets
        })

        console.log('dados', newPets)

    }

    render() {
        return (
            <div className="InfoUser">
                <PerfilOwner/>
                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                        <Comments/>
                    </div>
                    <div className="InfoUser_group-pets">
                        {this.state.PetsOwner.map((pet, index) => {
                            return (
                                <MyPets
                                key={index}
                                handleDelete={this.handleDeletePet}
                                handleEdit={this.handleEditPet}
                                name={pet.name}
                                breed={pet.breed}
                                weight={pet.weight}
                                animalSize={pet.animalSize}
                                animalType={pet.animalType}
                                description={pet.description}
                                /> 
                            )
                        })}
                        <Fab onClick={this.handleAddPet} aria-label="Pets" className="InfoUser_add-pet" >
                            <IconPets />
                        </Fab>
                    </div>
                </div>

                <ModalAddPet
                openModal={this.state.ModalAddPet}
                handleModal={this.handleAddPet}
                handleSubmitPetAdd={this.handleSubmitPetAdd}/>

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
