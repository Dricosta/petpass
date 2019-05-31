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

let idLocalStorage = ''

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
            PhotoPreview: '',
            Photo: '',
            PetsOwner: [],
            Comments: [],
            CommentsJobber: [],
            CommentsOwner: [],
            UserLogado: [],
            GenderUserLogado: ''
        }
    }
    
     

    async componentDidMount(){
        idLocalStorage = localStorage.getItem("idOwner")
        const response = await api.get(`user/animals/${idLocalStorage}`)
        const responseUser = await api.get(`user/${idLocalStorage}`)
        const responseComments = await api.get(`user/comments/${idLocalStorage}`)

          console.log('comentarios:', responseComments)

        console.log('usuario:', responseUser)

        this.setState({
            PetsOwner: response.data.result,
            UserLogado: responseUser.data.result,
            Comments: responseComments.data.result
        }, () => {
            if (responseUser.data.result.gender === "h") {
                this.setState({
                    GenderUserLogado: 'Masculino'
                })
            } else {
                this.setState({
                    GenderUserLogado: 'Feminino'
                })
            } 
        })

        // console.log('usuario logado:', this.state.UserLogado)
        // console.log('animais do usuario:', this.state.PetsOwner)
        // console.log('photoPreview:', this.state.PhotoPreview)
       

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
            idOwner: idLocalStorage,
            name: name.value,
            breed: breed.value,
            weight: weight.value,
            animalSize: animalSize.value,
            animalType: animalType.value,
            description: description.value,
            photo: ''
        }

        if ((name.value && breed.value && weight.value && animalSize.value && animalType.value && description.value) === '' ) {
            this.setState({
                PetNotificationIcon: false,
                PetNotification: true,
                PetMsg: 'Preencha todos os dados',
                PetMsgColor: false
            }, () => {
                setTimeout(() => {
                    this.setState({
                        PetNotification: false
                    })
                }, 2000)
            })
            return false
        }

        let reader = new FileReader();
        reader.onloadend = () => {
            newPets.photo = reader.result
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
                            PhotoPreview: URL.createObjectURL(this.state.Photo),
                            PetMsgColor: true,
                            PetNotification: true,
                            PetNotificationIcon: true,
                            PetMsg: 'Pet cadastrado com sucesso',
                            PetsOwner: this.state.PetsOwner.concat(newPets),
                        }, () => {
                            // atualiza os novos Pets que foram inseridos no banco
                            api.get(`user/animals/${idLocalStorage}`).then((response) => {
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
        reader.readAsDataURL(this.state.Photo);
    }

    handleUpload = input => e => {
        if (input === 'photo') {
            this.setState({
                Photo: e.target.files[0]
            }, () => {
                console.log('Photo:', this.state.Photo)
            })
        }
    }
    


    GetId = (id) => (e) => {
        e.preventDefault()
        this.handleEditPet()

        this.handleSubmitEditPet = (e) => {
            e.preventDefault()
            
            const { name, breed, weight, animalSize, animalType, description } = e.target
            const PetEdit = {
                idOwner: idLocalStorage,
                name: name.value,
                breed: breed.value,
                weight: weight.value,
                animalSize: animalSize.value,
                animalType: animalType.value,
                description: description.value,
                photo: ''
            }

            if ((name.value && breed.value && weight.value && animalSize.value && animalType.value && description.value) === '' ) {
                this.setState({
                    PetNotificationIcon: false,
                    PetNotification: true,
                    PetMsg: 'Preencha todos os dados',
                    PetMsgColor: false
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            PetNotification: false
                        })
                    }, 2000)
                })
                return false
            }


            let reader = new FileReader();
            reader.onloadend = () => {
                PetEdit.photo = reader.result
                console.log('readerResult:', reader.result)
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
                            api.get(`user/animals/${idLocalStorage}`).then((response) => {
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
            reader.readAsDataURL(this.state.Photo);
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
        const { UserLogado } = this.state;
        const date = new Date();
        const birthDate = {
            day: date.getDay(UserLogado.birthday),
            month: date.getMonth(UserLogado.birthday),
            year: date.getFullYear(UserLogado.birthday)
        }
        return (
            <div className="InfoUser">

                <PerfilOwner 
                photo={UserLogado.photo}
                name={UserLogado.name}
                description={UserLogado.description}
                genero={this.state.GenderUserLogado}
                birthDate={`${birthDate.day}/${birthDate.month}/${birthDate.year}`}
                rate={UserLogado.rate}
                creditos={UserLogado.qtdCredit}/>


                <div className="InfoUser_group">
                    <div className="InfoUser_group-comments">
                    {this.state.Comments.map((comments) => {
                        return(<Comments
                            key={comments._id}
                            photo={comments.photo}
                            rate={comments.rate}
                            name={comments.userName}
                            hour={distanceInWords(comments.date, new Date(), {locale: pt} )}
                            comments={comments.comment}/>
                        )
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
                                photo={pet.photo}
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
                cadastrar={this.state.cadastrar}
                handleUpload={this.handleUpload('photo')}/>
        
                <ModalDeletePet
                openDeleteModal={this.state.ModalDeletePet}
                handleDeleteModal={this.handleDeletePet}
                DeletePet={this.DeletePet}/>
                    
                <ModalEditPet
                openModal={this.state.ModalEditPet}
                handleModal={this.handleEditPet}
                handleSubmitEditPet={this.handleSubmitEditPet}
                loading={this.state.loadingEditPet}
                editar={this.state.Editar}
                handleUpload={this.handleUpload('photo')}/>

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
