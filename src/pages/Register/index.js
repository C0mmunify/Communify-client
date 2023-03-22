import React, {useEffect} from 'react';
import { handleLogout } from '../../actions';
import { BackButton, RegisterForm } from '../../components';
import './styles.css'

const Register = () =>  {
    
    useEffect(() => {
        handleLogout()
    }, [])

    return (
    <section id='registerSection'>
    <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
    <h1>Register</h1>

    <RegisterForm />
    <BackButton />
    </section>
    )

}

export default Register;
