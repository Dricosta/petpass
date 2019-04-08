import React, { Component } from 'react'
import UserDetails from './UserDetails'
import AccountDetails from './AccountDetails'
import PetDetails from './PetDetails'
import Confirm from './Confirm'
import Success from './Success'

export class UserRegister extends Component {
    state = {
        step: 1,
        email: '',
        password: '',
        avatar: '',
        banner: '',
        name: '',
        birthday: '',
        genre: '',
        bio: '',
        address: '',
        phone: '',
        accountNumber: '',
        agencyNumber: '',
        digit: '',
        pet: [{
            petName: '',
            idNumber: '',
            petBio: '',
            petAvatar: '',
            breed: '',
            weight: '',
            size: ''
        }]
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
        console.log(`input: ${input} e: ${e}`)
        this.setState({ [input]: e.target.value })
    }

    handleChangeDate = input => date => {
        console.log(`input: ${input} date: ${date}`)
        this.setState({ [input]: date })
    }

    render() {
        const { step } = this.state
        const { email, password, avatar, banner, name,
            birthday, genre, bio, address, phone, accountNumber,
            agencyNumber, digit, pet: [{
                petName, idNumber, petBio, petAvatar,
                breed, weight, size
            }]
        } = this.state

        const values = {
            email, password, avatar, banner, name,
            birthday, genre, bio, address, phone, accountNumber,
            agencyNumber, digit, pet: [{
                petName, idNumber, petBio, petAvatar,
                breed, weight, size
            }]
        }

        switch (step) {
            case 1:
                return (
                    <UserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleChangeDate={this.handleChangeDate}
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
