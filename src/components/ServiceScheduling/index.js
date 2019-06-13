import React, { Component } from 'react';
import './style.scss'
import api from '../../services/api';
import CardListServices from '../CardListServices';
import Calendar from 'react-calendar';
import MsgNotification from '../MsgNotification';

let idLocalStorage = ''

class ServiceScheduling extends Component {
    constructor(){
        super()
        this.state = {
            services: [],
            serviceTarget: '',
            calendar: false,
            date: new Date(),
            dateInital: new Date(),
            workHours: [],
            dataAgendada: '',
            horarioAgendado: '',
            idJobber: '',
            PetNotification: false,
            PetMsg: '',
            PetMsgColor: true,
            PetNotificationIcon: true,
        }
    }

    async componentDidMount(){
        idLocalStorage = localStorage.getItem("idOwner")

        const AnimalsUser = await api.get(`user/animals/${idLocalStorage}`)
        this.setState({
            PetsOwner: AnimalsUser.data.result[0]._id
        }, () => {
            console.log(this.state.PetsOwner)
        })
    }

    handleServices = async (e) => {
        let servicesValue = e.target.value
        this.setState({
            serviceTarget: servicesValue
        })


        try {
            const responseUser = await api.get(`user/${idLocalStorage}`)
            const UserLng = responseUser.data.result.lng
            const UserLat = responseUser.data.result.lat
            const responseServices = await api.get(`jobber/search/for/proximity?lng=${UserLng}&lat=${UserLat}&typeService=${this.state.serviceTarget}`)
            this.setState({
                services: responseServices.data.result
            })
        } catch (error) {
            alert('servicos nao encontrado')
        }

        console.log(this.state.services)
    }

    handleWorkHours = (e) => {
        
        this.setState({
            horarioAgendado: e.target.value
        }, () => {
            console.log('horario escolhido:', this.state.horarioAgendado)
        })
    }

    handleDayScheduling = (day) => {
        
        this.setState({
            dataAgendada: day
        }, () => {
            console.log('data agendada:', this.state.dataAgendada)
        })

    //  //    console.log(e.getTime())
    //      //e = new Date()
    //      let newHours = day.setHours(18)
 
    //     console.log('alterando horas:', new Date(newHours))
        
     }


     AgendarService = () => {
        let data = this.state.dataAgendada
        let horario = this.state.horarioAgendado
        let newHours = data.setHours(horario)
        const newDate = new Date(newHours).getTime()

        const Agendamento = {
            idUserOwner: localStorage.getItem("idOwner"),
            idUserJobber: this.state.idJobber,
            idAnimal: this.state.PetsOwner,
            date: newDate
        }


        api.post(`service/create`, {
            ...Agendamento
        }).then((response) => { 
            if (response.status === 200) {
                this.setState({
                    PetNotificationIcon: true,
                    PetNotification: true,
                    PetMsg: 'Serviço agendado com sucesso',
                    PetMsgColor: true
                }, () => {
                    setTimeout(() => {
                        this.setState({
                            PetNotification: false
                        })
                    }, 2000)
                })
            }
        })

        console.log('agendado para:', Agendamento)
     }

    handleCalendar = () => {
        this.setState({
            calendar: true,
            workHours: []
        })
    }


    GetJobber = (id) => async (e) => {
        e.preventDefault()
        console.log(id)
        this.setState({
            idJobber: id
        })
        this.handleCalendar()

        try {
            const responseJobber = await api.get(`jobber/${id}`)
            let startTime = responseJobber.data.result.startTime
            let endTime = responseJobber.data.result.endTime
            for (let  hours = startTime; hours <= endTime; hours++) {

                this.setState(state => ({
                     workHours: [...state.workHours, hours ]
                }))

                
            }
            console.log('dias em que eu trabalho:', this.state.workHours)
            console.log('jobber que faz esse servico:', responseJobber.data.result)

        } catch (error) {
            alert('jobber nao encontrado')
        }
    }



   


    render() {
        return (
            <div className="agendarServico">
                <div className="buscar-consulta">
                    <form className="agendarServico_form">
                            <h2>Agende um serviço aqui mesmo:</h2>
                            <select defaulValue="escolha um serviço" className="agendarServico_form-select" onChange={this.handleServices}>
                                <option value="Passeio">Passeio</option>
                                <option value="Banho">Banho</option>
                                <option value="Tosa">Tosa</option>
                                <option value="Pet Sitter">Pet Sitter</option>
                                <option value="Hospedagem">Hospedagem</option>
                            </select>
                    </form>

                    {this.state.services.length <= 0 ? <div className="errorServices">nenhum serviço encontrado</div>
                        : this.state.services.map((services) => {
                        return (
                        <CardListServices
                        key={services._id}
                        name={services.name}
                        serviceName={services.serviceName}
                        servicePrice={services.servicePrice}
                        serviceDescription={services.serviceDescription}
                        email={services.email}
                        handleCalendar={this.GetJobber(services._id)}
                        /> )
                    })}
                </div>
                <div className="agendar-consulta">
                    <div className="agendar-consulta_calendary">
                        { this.state.calendar && 
                            <div>
                            <span>Qual dia é o melhor dia para você?</span>
                            <Calendar
                            className="calendar"
                            value={this.state.date}
                            minDate={this.state.dateInital}
                            onClickDay={this.handleDayScheduling}
                            locale="pt"/>
                            </div>
                        }
                    </div>
                    <div className="agendar-consulta_hours">
                       {this.state.workHours.length > 0 && 
                            <select defaultValue={this.state.workHours} onChange={this.handleWorkHours}>
                                {this.state.workHours.map((hours) => {
                                    return(
                                        <option value={hours}>{hours}:00 horas </option>
                                    )
                                })}
                            </select>
                        }
                    </div>
                    { this.state.calendar &&  <button className="btn-confirmar" onClick={this.AgendarService}>Confirmar Agendamento</button> }
                </div>
                
                <MsgNotification
                PetNotification={this.state.PetNotification} 
                PetMsg={this.state.PetMsg}
                PetMsgColor={this.state.PetMsgColor}
                PetNotificationIcon={this.state.PetNotificationIcon}/>

            </div>
        );
    }
}

export default ServiceScheduling;
