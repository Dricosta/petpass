import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import Comments from '../Comments/index';
import MyPets from '../MyPets/index';
import Fab from '@material-ui/core/Fab';
import IconPets from '@material-ui/icons/Pets';
import ModalAddPet from '../ModalAddPet/index';
import ModalDeletePet from '../ModalDeletePet/index';
import ModalEditPet from '../ModalEditPet/index';
import MsgNotification from '../MsgNotification/index';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
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
            loadingEditPet: false,
            PetNotification: false,
            PetMsg: '',
            PetMsgColor: true,
            PetNotificationIcon: true,
            cadastrar: 'Cadastrar',
            Editar: 'Editar',
            PetsOwner: [],
            Comments: [],
            CommentsJobber: [],
            CommentsOwner: [],
        }
    }
    

    async componentDidMount(){
        const response = await api.get(`user/animals/5ca8c905725d7b51b271c31e`)
        const responseComments = await api.get(`user/comments/5ca8c905725d7b51b271c31e`)

        const idCommentJobber = this.state.Comments.map((id) => id.idUserJobber)
        const idCommentOwner = this.state.Comments.map((id) => id.idUserOwner)

        this.setState({
            PetsOwner: response.data.result
        })
            
        this.setState({
          Comments: responseComments.data.result  
        })


        idCommentJobber.map( async (id) => {
            // console.log(id)
            const GetJobbers = await api.get(`jobber/${id}`).then((response)=>{return response.data.result})
            console.log('comentarios:', this.state.Comments)
            this.setState({
                CommentsJobber: this.state.CommentsJobber.concat(GetJobbers)
            })

        })

        // console.log(this.state.CommentsJobber)


        // const CommentJobber = await api.get(`jobber/${idCommentJobber}`)
        // const CommentOwner = await api.get(`user/${idCommentOwner}`)




        // this.setState({
        //     CommentsJobber: this.state.CommentsJobber.concat(CommentJobber.data.result),
        //     CommentsOwner: this.state.CommentsOwner.concat(CommentOwner.data.result)
        // })


        // console.log('Comentario:', this.state.Comments)
        // console.log('jobber comentou', this.state.CommentsJobber)
        // console.log('owner comentou', this.state.CommentsOwner)
     
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
                        PetMsgColor: true,
                        PetNotification: true,
                        PetNotificationIcon: true,
                        PetMsg: 'Pet cadastrado com sucesso',
                        PetsOwner: this.state.PetsOwner.concat(newPets),
                    }, () => {
                        // atualiza os novos Pets que foram inseridos no banco
                        api.get(`user/animals/5ca8c905725d7b51b271c31e`).then((response) => {
                            this.setState({
                                PetsOwner: response.data.result
                            })
                        })
                        setTimeout(() => {
                            this.setState({
                                PetNotification: false
                            })
                        }, 3000);
                    })
                } 
            }, 2000);
        })
    }


    GetId = (id) => (e) => {
        e.preventDefault()
        this.handleEditPet()

        this.handleSubmitEditPet = (e) => {
            e.preventDefault()
            
            const { name, breed, weight, animalSize, animalType, description } = e.target
            const PetEdit = {
                idOwner: "5ca8c905725d7b51b271c31e",
                name: name.value,
                breed: breed.value,
                weight: weight.value,
                animalSize: animalSize.value,
                animalType: animalType.value,
                description: description.value
            }

            api.put(`animal/edit/${id}`, {
                ...PetEdit
            }).then((response) => {
                this.setState(state => ({
                    Editar: '',
                    loadingEditPet: !state.loadingEditPet
                }))
                setTimeout(() => {
                    if(response.status === 200){
                        this.setState(state => ({
                            Editar: 'Editar',
                            loadingEditPet: !state.loadingEditPet
                        }))
                        setTimeout(() => {
                            this.handleEditPet()
                        }, 800);
                        // atualiza os novos Pets que foram inseridos no banco
                        api.get(`user/animals/5ca8c905725d7b51b271c31e`).then((response) => {
                            this.setState({
                                PetMsgColor: true,
                                PetNotification: true,
                                PetNotificationIcon: true,
                                PetMsg: 'Pet editado com sucesso',
                                PetsOwner: response.data.result
                            }, () => {
                                console.log('state:', this.state.PetsOwner)
                                setTimeout(() => {
                                    this.setState({
                                        PetNotification: false
                                    })
                                }, 3000);
                            })
                        })
                    }
                }, 2000)
            })
        }
    }

    
    DeletePet = (PetToBeDelet) => (e) => {
        e.preventDefault()
        console.log(PetToBeDelet, e)

        const PetsCadastrados = this.state.PetsOwner.length;

        if (PetsCadastrados === 1) {
            this.setState({
                PetNotificationIcon: false,
                PetNotification: true,
                PetMsg: 'Desculpe, você não pode deletar todos os seus pets',
                PetMsgColor: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        PetNotification: false
                    })
                }, 3000);
            })
            return false 
        } else {
            api.delete(`animal/delete?id=${PetToBeDelet}`).then((response) => {
                if(response.status === 200){
                    this.setState({
                        PetsOwner: this.state.PetsOwner.filter(Pet => Pet._id !== PetToBeDelet)
                    })
                }
            })
        }
    }


    render() {
        return (
            <div className="InfoUser">
                <PerfilOwner/>
                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                

                    {this.state.Comments.map((comments) => {
                        return comments.direction === "JO" ?
                            <div key={comments._id}>
                                {this.state.CommentsJobber.map((commentJobber, index) =>  {
                                    return ( <Comments
                                        key={index}
                                        rate={comments.rate}
                                        name={commentJobber.name}
                                        hour={distanceInWords(comments.date, new Date(), {locale: pt} )}
                                        comments={comments.comment}/>
                                    )
                                })}
                            </div>
                            :
                            <div key={comments._id}>
                                {this.state.CommentsOwner.map((commentOwner, index) => {
                                    return ( <Comments
                                    key={index}
                                    rate={comments.rate}
                                    name={commentOwner.name}
                                    hour={distanceInWords(comments.date, new Date(), {locale: pt} )}
                                    comments={comments.comment}/>
                                    )
                                })}
                            </div>
                    })}

                    </div>
                    <div className="InfoUser_group-pets">
                        {this.state.PetsOwner.map((pet, index) => {
                            return (
                                <MyPets
                                key={index}
                                handleDelete={this.DeletePet(pet._id)}
                                handleEdit={this.GetId(pet._id)}
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
                handleModal={this.handleEditPet}
                handleSubmitEditPet={this.handleSubmitEditPet}
                loading={this.state.loadingEditPet}
                editar={this.state.Editar}/>

                <MsgNotification 
                PetNotification={this.state.PetNotification} 
                PetMsg={this.state.PetMsg}
                PetMsgColor={this.state.PetMsgColor}
                PetNotificationIcon={this.state.PetNotificationIcon}/>


            </div>
        );
    }
}

export default InfoUser;
