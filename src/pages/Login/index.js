import React, { useEffect } from 'react';
import { BackButton, LoginForm } from '../../components';
import './styles.css'

const Login = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])
    
    return (
    <section id='loginSection'>
    <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
    <h1>Login</h1>

    <LoginForm />
    <BackButton />
    </section>
    )
}

export default Login;
