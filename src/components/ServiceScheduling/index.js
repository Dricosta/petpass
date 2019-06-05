import React, { Component } from 'react';
import './style.scss'
import api from '../../services/api';
import CardListServices from '../CardListServices';
import Calendar from 'react-calendar';

let idLocalStorage = ''

class ServiceScheduling extends Component {
    constructor(){
        super()
        this.state = {
            services: [],
            serviceTarget: '',
            calendar: false
        }
    }

    async componentDidMount(){
        idLocalStorage = localStorage.getItem("idOwner")
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

    handleCalendar = () => {
        this.setState({
            calendar: true
        })
    }


    render() {
        return (
            <div className="agendarServico">
                <div className="w-50">
                    <form className="agendarServico_form">
                            <h2>Agende um serviço aqui mesmo:</h2>
                            <select className="agendarServico_form-select" onChange={this.handleServices}>
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
                        name={services.name}
                        serviceName={services.serviceName}
                        servicePrice={services.servicePrice}
                        serviceDescription={services.serviceDescription}
                        email={services.email}
                        handleCalendar={this.handleCalendar}
                        /> )
                    })}
                </div>
                <div className="w-50">
                { this.state.calendar && 
                    <Calendar
                    onChange={this.onChange}
                    value={this.state.date}/>
                }
                </div>
                

            </div>
        );
    }
}

export default ServiceScheduling;
