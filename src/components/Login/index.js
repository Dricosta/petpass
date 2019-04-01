import React from 'react'
import './style.scss'
import Footer from '../Footer'
import Navbar from '../Navbar'

const Login = () => (
    <div>
        <Navbar />
        <div className='form-login'>
        <h1>Entre com sua conta PetPass</h1>
            {/* <form>
                <input type='text' name='login' placeholder='Usuário' />
                <input type='password' name='password' placeholder='Senha' />
                <label htmlFor='rememberUser' >Relembre-me</label>
                <input type='checkbox' name='rememberUser' />
                <button type='submit'>Login</button>
            </form>
            <div>
                <a href='#'>Esqueceu sua senha?</a>
            </div> */}
        </div>
        <Footer />
    </div>
)

export default Login