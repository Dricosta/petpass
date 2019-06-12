import React, { Component } from 'react';
import api from '../../services/api';
import './styleServices.scss'
import { Grid, Button } from '@material-ui/core'
import Done from '@material-ui/icons/Done'

let idLocalStorage = ''

class InfoServices extends Component {
    constructor() {
        super()
        this.state = {
            services: [],
            userLogado: [],
            genderUserLogado: ''
        }
    }

    async componentDidMount() {
        idLocalStorage = localStorage.getItem("idOwner") || localStorage.getItem("idJobber")
        const responseUser = await api.get(`user/${idLocalStorage}`)

        const responseServices = localStorage.getItem("idOwner") ?
            await api.get(`user/services/${idLocalStorage}`) : await api.get(`jobber/services/${idLocalStorage}`)
        console.log(responseServices)
        this.setState({
            userLogado: responseUser.data.result,
            services: responseServices.data.result
        })
    }

    ownerConfirmService = (id) => (e) => {
        e.preventDefault()

        let serviceFilter = this.state.services.filter((service) => service.id === id)
        let serviceToBeCanceled = {
            "_id": serviceFilter[0].id,
            "ownerServiceConfirmation": true,
            "jobberServiceConfirmation": serviceFilter[0].jobberServiceConfirmation,
            "serviceStatus": serviceFilter[0].serviceStatus
        }

        api.put(`service/edit`, { ...serviceToBeCanceled }).then((response) => {
            if (response.status === 200) {
                console.log(response)
            }
        })

    }

    jobberConfirmService = (id) => (e) => {
        e.preventDefault()

        let serviceFilter = this.state.services.filter((service) => service.id === id)
        let serviceToBeCanceled = {
            "_id": serviceFilter[0].id,
            "ownerServiceConfirmation": serviceFilter[0].ownerServiceConfirmation,
            "jobberServiceConfirmation": true,
            "serviceStatus": serviceFilter[0].serviceStatus
        }

        api.put(`service/edit`, { ...serviceToBeCanceled }).then((response) => {
            if (response.status === 200) {
                console.log(response)
            }
        })

    }


    cancelService = (id) => (e) => {
        e.preventDefault()

        this.state.services.map((service) => {
            if (service.id === id) {
                service.serviceStatus = 'cancelado'
            }
        })

        let serviceFilter = this.state.services.filter((service) => service.id === id)
        let serviceToBeCanceled = {
            "_id": serviceFilter[0].id,
            "ownerServiceConfirmation": false,
            "jobberServiceConfirmation": false,
            "serviceStatus": "cancelado"
        }

        api.put(`service/edit`, { ...serviceToBeCanceled }).then((response) => {
            if (response.status === 200) {
                console.log(response)
            }
        })

    }


    render() {
        const owner = localStorage.getItem('idOwner') || false
        const jobber = localStorage.getItem('idJobber') || false
        return (
            <div className="InfoUser">
                <Grid container item xs={12} justify='flex-start'>
                    <Grid item container xs={11} justify='center' style={styles.scroll}>
                        {this.state.services.map((services) => {
                            const { date } = services
                            const newDate = new Date(date)
                            console.log(services)
                            return (
                                <Grid item container xs={12} key={services.id} style={styles.servicesCard}
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
                                                    <Grid item xs={12} >
                                                        <Button fullWidth style={styles.button}
                                                            onClick={this.cancelService(services.id)} children='cancelar' />
                                                    </Grid>
                                                }
                                                {
                                                    jobber && services.serviceStatus === 'solicitado' &&
                                                    <Grid item xs={12} >
                                                        <Button fullWidth style={styles.button}
                                                            onClick={this.cancelService(services.id)} children='cancelar' />
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
                                                    owner && services.serviceStatus === 'executado' && services.ownerServiceConfirmation &&
                                                    <Grid item container xs={12} justify='space-around'>
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                    </Grid>
                                                }
                                                {
                                                    owner && services.serviceStatus === 'executado' && !services.ownerServiceConfirmation &&
                                                    <Grid item container xs={12} justify='space-around'>
                                                        <Button xs={3} style={styles.button} children={<Done />} onClick={this.ownerConfirmService(services.id)} />
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                    </Grid>
                                                }

                                                {
                                                    jobber && services.serviceStatus === 'executado' && services.jobberServiceConfirmation &&
                                                    <Grid item container xs={12} justify='space-around'>
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                    </Grid>
                                                }
                                                {
                                                    jobber && services.serviceStatus === 'executado' && !services.jobberServiceConfirmation &&
                                                    <Grid item container xs={12} justify='space-around'>
                                                        <Button xs={3} disabled style={styles.buttonNotAllow} children={<Done />} />
                                                        <Button xs={3} style={styles.button} children={<Done />} onClick={this.jobberConfirmService(services.id)} />
                                                    </Grid>
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
