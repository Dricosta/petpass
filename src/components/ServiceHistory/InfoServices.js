import React, { Component } from 'react';
import api from '../../services/api';
import './styleServices.scss'
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
                execDate: 1559995236000,
                serviceStatus: 'solicitado',
                paymentOwner: 'Confirmar',
                paymentJobber: 'Confirmar'
            }, {
                ownerName: 'Usuário Comum2',
                ownerEmail: 'user2@comum.com',
                jobberName: 'Usuário Prestador',
                jobberEmail: 'user@prestador.com',
                petName: 'Pet do Usuário',
                execDate: 1559995236000,
                serviceStatus: 'cancelado',
                paymentOwner: 'Confirmar',
                paymentJobber: 'Confirmar'
            }, {
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user3@comum.com',
                jobberName: 'Usuário Prestador',
                jobberEmail: 'user@prestador.com',
                petName: 'Pet do Usuário',
                execDate: 1559995236000,
                serviceStatus: 'executado',
                paymentOwner: 'Confirmado',
                paymentJobber: 'Confirmado'
            }, {
                ownerName: 'Usuário Comum3',
                ownerEmail: 'user3@comum.com',
                jobberName: 'Usuário Prestador',
                jobberEmail: 'user@prestador.com',
                petName: 'Pet do Usuário',
                execDate: 1559995236000,
                serviceStatus: 'pago',
                paymentOwner: 'Confirmado',
                paymentJobber: 'Confirmado'

            }],
            userLogado: [],
            genderUserLogado: ''
        }
    }



    async componentDidMount() {
        idLocalStorage = localStorage.getItem("idOwner") || localStorage.getItem("idJobber")
        const responseUser = await api.get(`user/${idLocalStorage}`)
        const responseServices = await api.get(`user/services/${idLocalStorage}`)

        this.setState({
            userLogado: responseUser.data.result,
            services: responseServices.data.result
        })
    }

    render() {
        const owner = localStorage.getItem('idOwner') || false
        const jobber = localStorage.getItem('idJobber') || false
        var count = 0
        return (
            <div className="InfoUser">
                <Grid container item xs={12} justify='flex-start'>
                    <Grid item container xs={11} justify='center' style={styles.scroll}>
                        {this.state.services.map((services) => {
                            const { date } = services
                            const newDate = new Date(date)
                            console.log(services)
                            return (
                                <Grid item container xs={12} key={count++} style={styles.servicesCard}
                                    justify='space-between'>
                                    <Grid item container xs={12} sm={4} style={styles.serviceCard}>
                                        <Grid item container xs={12} justify='center'>
                                            <h3><strong>Usuário Dono</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Nome</strong>: {services.ownerName} </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Email</strong>: {services.ownerEmail}</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Pet</strong>: {services.animalName}</p>
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} sm={3} style={styles.textCenter}>
                                        <Grid item container xs={12} justify='center'>
                                            <h3><strong>Status</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p>{services.serviceStatus} </p>
                                        </Grid>
                                        <Grid item container xs={12} justify='center'>
                                            <Grid item container xs={12} justify='center'>
                                                {
                                                    owner && services.serviceStatus === 'solicitado' &&
                                                    <Grid item xs={12}>
                                                        <Button fullWidth style={styles.button} children='cancelar' />
                                                    </Grid>
                                                }
                                                {
                                                    jobber && services.serviceStatus === 'solicitado' &&
                                                    <Grid item container xs={12} justify='space-between'>
                                                        <Button style={styles.button} children='cancelar' />
                                                        <Button style={styles.button} children='confirmar' />
                                                    </Grid>
                                                }
                                                {
                                                    owner && services.serviceStatus === 'cancelado' &&
                                                    <Button fullWidth disabled style={styles.buttonNotAllow} children='cancelado' />
                                                }
                                                {
                                                    jobber && services.serviceStatus === 'cancelado' &&
                                                    <Button fullWidth disabled style={styles.buttonNotAllow} children='cancelado' />
                                                }

                                                {
                                                    owner && services.serviceStatus === 'executado' &&
                                                    <Button fullWidth style={styles.button} children='Realizar pagamento' />
                                                }
                                                {
                                                    jobber && services.serviceStatus === 'executado' &&
                                                    <Button disabled fullWidth style={styles.buttonNotAllow} children='Aguardando pagamento' />
                                                }
                                                {
                                                    owner &&
                                                    services.serviceStatus === 'pago' &&
                                                    <Button disabled fullWidth style={styles.buttonNotAllow} children='Serviço Concluído' />
                                                }
                                                {
                                                    jobber &&
                                                    services.serviceStatus === 'pago' &&
                                                    <Button disabled fullWidth style={styles.buttonNotAllow} children='Serviço Concluído' />
                                                }

                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item container xs={12} sm={4} style={styles.serviceCard}>
                                        <Grid item container xs={12} justify='center'>
                                            <h3><strong>Prestador</strong></h3>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Nome</strong>: {services.jobberName} </p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Email</strong>: {services.jobberEmail}</p>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <p><strong>Data</strong>: {newDate.toLocaleDateString('pt-Br')}</p>
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
    servicesCard: {
        marginBottom: '18px',
        padding: '4px 0px',
        backgroundColor: '#fff',
        boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)'
    },
    serviceCard: {
        padding: '2px 10px',
        margin: '2px 0px'
    },
    textCenter: {
        textAlign: 'center'
    },
    text: {
        fontFamily: 'Anonymous Pro, monospace',
        color: '#282222'
    },
    button: {
        margin: '2px 0px',
        fontSize: '11px',
        backgroundColor: '#282222',
        color: '#fff'
    },
    buttonNotAllow: {
        margin: '2px 0px',
        fontSize: '11px',
        backgroundColor: '#d2d2d2',
        color: '#282222',
        border: '1px solid #282222'
    },
    scroll: {
        scrollY: 'scroll'
    }
}

export default InfoServices;
