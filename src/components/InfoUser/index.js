import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MyPets from '../MyPets/index';
import Fab from '@material-ui/core/Fab';
import IconPets from '@material-ui/icons/Pets';
import ModalAddPet from '../ModalAddPet/index';
import ModalDeletePet from '../ModalDeletePet/index';
import ModalEditPet from '../ModalEditPet/index';
import MsgSuccess from '../MsgSuccess/index';
import api from '../../services/api';
import './style.scss'



class InfoUser extends Component {
    constructor(){
        super()
        this.state = {
            ModalAddPet: false,
            ModalDeletePet: false,
            ModalEditPet: false,
            loadingAddPet: false,
            PetAddSuccess: false,
            cadastrar: 'Cadastrar',
            PetsOwner: []
        }
    }
    

    async componentDidMount(){
        const response = await api.get(`user/animals/5ca8c905725d7b51b271c31e`)
        this.setState({
            PetsOwner: response.data.result
        })
        console.log(this.state.PetsOwner)
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
        }).then((response) => {
            this.setState(state => ({
                cadastrar: '',
                loadingAddPet: !state.loadingAddPet
            }))
            setTimeout(() => {
                if(response.status === 200){
                    this.setState(state => ({
                        cadastrar: 'Cadastrar',
                        loadingAddPet: !state.loadingAddPet
                    }))
                    setTimeout(() => {
                        this.handleAddPet()
                    }, 800);

                    this.setState({
                        PetAddSuccess: true,
                        PetsOwner: this.state.PetsOwner.concat(newPets),
                    }, () => {
                        setTimeout(() => {
                            this.setState({
                                PetAddSuccess: false
                            })
                        }, 3000);
                    })
                } 
            }, 2000);
        })
    }

    DeletePet = () => {
        console.log('delete pet')
        api.delete(`/animal/5cb9e24da3afe3613a459bcd`, {
             
        })
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
                handleSubmitPetAdd={this.handleSubmitPetAdd}
                loading={this.state.loadingAddPet}
                cadastrar={this.state.cadastrar}/>
                
                <ModalDeletePet
                openDeleteModal={this.state.ModalDeletePet}
                handleDeleteModal={this.handleDeletePet}
                DeletePet={this.DeletePet}/>

                <ModalEditPet
                openModal={this.state.ModalEditPet}
                handleModal={this.handleEditPet}/>

                <MsgSuccess 
                PetAddSuccess={this.state.PetAddSuccess}/>
                
            </div>
        );
    }
}

export default InfoUser;
