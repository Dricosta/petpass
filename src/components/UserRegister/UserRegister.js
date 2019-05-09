import React, { Component } from 'react'
import UserDetails from './UserDetails'
import AccountDetails from './AccountDetails'
import PetDetails from './PetDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserRegister extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        password: '',
        active: '',
        description: '',
        rate: '',
        qtdCredit: '',
        accountNumber: '',
        digit: '',
        agency: '',
        bankCode: '',
        birthday: '',
        address: '',
        lat: '',
        lng: '',
        phone: '',
        gender: '',
        photo: '',
        photoPreview: '',
        capaPhoto: '',
        comments: '',
        animals: []
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
        console.log(this.state)
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
        console.log(this.state)
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    handleUpload = input => e => {
        if (input === 'photo') {
            const file = e.target.files[0]
            this.setState({ photoPreview: URL.createObjectURL(file), photo: e.target.files[0] })
        }
    }

    render() {
        const { step } = this.state
        const { name,
            email,
            password,
            active,
            description,
            rate,
            qtdCredit,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            address,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview,
            capaPhoto,
            comments,
            animals } = this.state

        const values = {
            name,
            email,
            password,
            active,
            description,
            rate,
            qtdCredit,
            accountNumber,
            digit,
            agency,
            bankCode,
            birthday,
            address,
            lat,
            lng,
            phone,
            gender,
            photo,
            photoPreview,
            capaPhoto,
            comments,
            animals
        }

        switch (step) {

            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleUpload={this.handleUpload}
                        values={values} />
                )
            case 2:
                return (
                    <AccountDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 3:
                return (
                    <PetDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                )
            case 4:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values} />
                )
            case 5:
                return (
                    <Success />
                )
            default:
                return ''
        }
    }
}

export default UserRegister
