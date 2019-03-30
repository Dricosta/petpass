import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import './style.scss'
import '../../reset.scss'

const JobberRegister = () => (
    <div>
        <Navbar />
        <div className='register-page'>
            <h1 className='title'>Cadastro como prestador de Serviço</h1>
            <div className='div-form'>
                <form className='form-user-reg'>
                    {/* <input type='file' className='input' placeholder='Tipo' hidden />
                    <input type='text' className='input' placeholder='Foto' />
                    <input type='text' className='input' placeholder='Foto de capa' />
                    <input type='text' className='input' placeholder='Nome' />
                    <input type='text' className='input' placeholder='Nascimento' />
                    <input type='text' className='input' placeholder='Sexo' />
                    <input type='text' className='input' placeholder='Telefone' />
                    <input type='text' className='input' placeholder='Descrição' />
                    <input type='text' className='input' placeholder='Email' />
                    <input type='text' className='input' placeholder='Senha' />
                    <input type='text' className='input' placeholder='Agência' />
                    <input type='text' className='input' placeholder='Número da conta' />
                    <input type='text' className='input' placeholder='Dígito' />
                    <input type='text' className='input' placeholder='Endereço' />
                    <input type='text' placeholder='Latitude' hidden />
                    <input type='text' placeholder='Longitude' hidden /> */}
                </form>
            </div>
        </div>
        <Footer />
    </div>
)

export default JobberRegister