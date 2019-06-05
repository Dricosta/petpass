import React, { Component } from 'react';
import PerfilOwner from '../PerfilOwner/index';
import { distanceInWords } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import './style.scss'
import { Grid, Button } from '@material-ui/core'

let idLocalStorage = ''

class InfoServices extends Component {
    constructor() {
        super()
        this.state = {
            services: [{
                ownerName: 'Usuário Comum',
                ownerEmail: 'user@comum.com',
                jobberName: 'Usuário Prestador',
                jobberEmail: 'user@prestador.com',
                petName: 'Pet do Usuário',
                execDate: '02/06/2019',
                serviceStatus: 'Solicitado',
                paymentOwner: 'Confirmar',
                paymentJobber: 'Confirmar'
            }, {
                ownerName: 'Usuário Comum2',
                ownerEmail: 'user@comum.com2',
                jobberName: 'Usuário Prestador2',
                jobberEmail: 'user@prestador.com2',
                petName: 'Pet do Usuário2',
                execDate: '02/06/20192',
                serviceStatus: 'Solicitado2',
                paymentOwner: 'Confirmar2',
                paymentJobber: 'Confirmar2'
            }, {
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user@comum.com3',
                jobberName: 'Usuário Prestador3',
                jobberEmail: 'user@prestador.com3',
                petName: 'Pet do Usuário3',
                execDate: '03/06/30193',
                serviceStatus: 'Solicitado3',
                paymentOwner: 'Confirmar3',
                paymentJobber: 'Confirmar3'
            },{
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user@comum.com3',
                jobberName: 'Usuário Prestador3',
                jobberEmail: 'user@prestador.com3',
                petName: 'Pet do Usuário3',
                execDate: '03/06/30193',
                serviceStatus: 'Solicitado3',
                paymentOwner: 'Confirmar3',
                paymentJobber: 'Confirmar3'
            },{
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user@comum.com3',
                jobberName: 'Usuário Prestador3',
                jobberEmail: 'user@prestador.com3',
                petName: 'Pet do Usuário3',
                execDate: '03/06/30193',
                serviceStatus: 'Solicitado3',
                paymentOwner: 'Confirmar3',
                paymentJobber: 'Confirmar3'
            },{
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user@comum.com3',
                jobberName: 'Usuário Prestador3',
                jobberEmail: 'user@prestador.com3',
                petName: 'Pet do Usuário3',
                execDate: '03/06/30193',
                serviceStatus: 'Solicitado3',
                paymentOwner: 'Confirmar3',
                paymentJobber: 'Confirmar3'
            }],
            userLogado: [],
            genderUserLogado: ''
        }
    }



    async componentDidMount() {
        idLocalStorage = localStorage.getItem("idOwner") || localStorage.getItem("idJobber")
        const responseUser = await api.get(`user/${idLocalStorage}`)
        const responseServices = await api.get(`user/services/${idLocalStorage}`)

        console.log('serviços:', responseServices)

        console.log('usuario:', responseUser)

        this.setState({
            userLogado: responseUser.data.result,
            services: responseServices.data.result
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
    }

    render() {
        const { userLogado } = this.state;
        const date = new Date();
        const birthDate = {
            day: date.getDay(userLogado.birthday),
            month: date.getMonth(userLogado.birthday),
            year: date.getFullYear(userLogado.birthday)
        }
        return (
            <div className="InfoUser">

                {/* <PerfilOwner
                    photo={userLogado.photo}
                    name={userLogado.name}
                    description={userLogado.description}
                    genero={this.state.GenderuserLogado}
                    birthDate={`${birthDate.day}/${birthDate.month}/${birthDate.year}`}
                    rate={userLogado.rate}
                    creditos={userLogado.qtdCredit} /> */}


                <Grid container item xs={12} justify='flex-start'>
                    <Grid item container xs={11} justify='center' style={styles.scroll}>
                        {this.state.services.map((services) => {
                            return (
                                <Grid item container xs={12} key={services.petName} style={styles.serviceCard}
                                    justify='space-between'>
                                    <Grid item container xs={12} sm={4}>
                                        <Grid item xs={12}>
                                            <h3><strong>Usuário Dono</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Nome</strong>: {services.ownerName} </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Email</strong>: {services.ownerEmail}</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Pet</strong>: {services.petName}</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p>{distanceInWords(services.execDate, new Date(), { locale: pt })} atrás</p>
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} sm={3} style={styles.textCenter}>
                                        <Grid item xs={12}>
                                            <h3><strong>Status</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p>{services.serviceStatus} </p>
                                        </Grid>
                                        <Grid item container xs={12} justify='space-around'>
                                            <Grid item>
                                                <Button style={styles.button}>{services.paymentOwner}</Button>
                                            </Grid>
                                            <Grid item>
                                                <Button style={styles.button}>{services.paymentJobber}</Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} sm={4}>
                                        <Grid item xs={12}>
                                            <h3><strong>Prestador</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Nome</strong>: {services.jobberName} </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Email</strong>: {services.jobberEmail}</p>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

const styles = {
    serviceCard: {
        marginBottom: '18px',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    },
    textCenter: {
        textAlign: 'center'
    },
    button: {
        textTransform: 'none'
    },
    scroll: {
        scrollY: 'scroll'
    }
}

export default InfoServices;
