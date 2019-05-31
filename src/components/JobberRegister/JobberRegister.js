import React, { Component } from 'react'
import PersonalDetails from './PersonalDetails'
import AccountDetails from './AccountDetails'
import WorkDetails from './WorkDetails'
import ServiceDetails from './ServiceDetails'
import Login from '../JobberLogin/JobberLogin'
import logo from '../../assets/mypetpass.png'
import { Grid, Hidden } from '@material-ui/core'
import './page.scss'
import '../../reset.scss'

export class JobberRegister extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        description: '',
        accountNumber: '',
        digit: '',
        agency: '',
        bankCode: '',
        birthday: '',
        lat: '',
        lng: '',
        phone: '',
        gender: '',
        photo: '',
        photoPreview: '',
        startTime: '',
        endTime: '',
        serviceName: '',
        serviceDescription: '',
        serviceValue: '',
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        if((input === "startTime" || input === "endTime") && e.target.value > 24){
            e.target.value = 24
            // this.setState({ [input]: 24 })
        }
        this.setState({ [input]: e.target.value })
    }

    handleUpload = input => e => {
        if (input === 'photo') {
            const file = e.target.files[0]
            if (file !== undefined) {
                this.setState({
                    photoPreview: URL.createObjectURL(file),
                    photo: e.target.files[0]
                })
            }
        }
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude
                })
                this.setState({
                    lng: position.coords.longitude
                })
            })
        }
    }

    render() {
        const { step } = this.state
        const {
            name,
            email,
            password,
            description,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview,
            weekDays,
            startTime,
            endTime,
            serviceName,
            serviceDescription,
            serviceValue
        } = this.state

        const values = {
            name,
            email,
            password,
            description,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview,
            weekDays,
            startTime,
            endTime,
            serviceName,
            serviceDescription,
            serviceValue
        }

        switch (step) {

            case 1:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>

                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center' className='box-brown'>
                                    <a href='/' title='Página Inicial' >
                                        <img src={logo} alt='logo' />
                                    </a>
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <PersonalDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    handleUpload={this.handleUpload}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 2:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center' className='box-brown'>
                                    <a href='/' title='Página Inicial' >
                                        <img src={logo} alt='logo' />
                                    </a>
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <AccountDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 3:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center' className='box-brown'>
                                    <a href='/' title='Página Inicial' >
                                        <img src={logo} alt='logo' />
                                    </a>
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <ServiceDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>
                )
            case 4:
                return (
                    <Grid className='page'>
                        <Grid
                            item container xs={10}
                            className='box'>
                            <Hidden xsDown>
                                <Grid
                                    item container sm={6}
                                    justify='center' alignItems='center' className='box-brown'>
                                    <a href='/' title='Página Inicial' >
                                        <img src={logo} alt='logo' />
                                    </a>
                                </Grid>
                            </Hidden>

                            <Grid
                                item container xs={12} sm={6}
                                justify='center' alignItems='center'
                                className='form'>
                                <WorkDetails
                                    nextStep={this.nextStep}
                                    prevStep={this.prevStep}
                                    handleChange={this.handleChange}
                                    values={values} />
                            </Grid>
                        </Grid>
                    </Grid>

                )
            case 5:
                return (
                    <Login msg="Obrigado por se cadastrar no petpass!" />
                )
            default:
                return ''
        }
    }
}

export default JobberRegister
