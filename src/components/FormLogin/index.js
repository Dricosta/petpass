import React from 'react'
import './style.css'

const FormLogin = () => (
    <div className='form-login'>
        <form>
            <input type='text' name='login' placeholder='Usuário' />
            <input type='password' name='password' placeholder='Senha' />
            <label htmlFor='rememberUser' >Relembre-me</label>
            <input type='checkbox' name='rememberUser' />
            <button type='submit'>Login</button>
        </form>
        <div>
            <a href='/register'>Cadastre sua conta PetPass</a>
            <a href='#'>Esqueceu sua senha?</a>
        </div>
    </div>
)

export default FormLogin