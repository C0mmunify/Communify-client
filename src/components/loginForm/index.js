import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginFunction } from "../../actions";
import './styles.css'

function LoginForm() {

    const goTo = useNavigate();

    const [errorMessage, setErrorMessage] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('')
        await loginFunction(e);
        if (localStorage.length) { goTo('/profile') }
        else { setErrorMessage('Incorrect Email or Password!') }
    }

    const updateEmail = e => {
        const input = e.target.value;
        setEmail(input)
    }

    const updatePassword = e => {
        const input = e.target.value;
        setPassword(input)
    }

    return (
        <form aria-label='form' onSubmit={handleSubmit}>
            {errorMessage && (
                <p className="error"> {errorMessage} </p>
            )}
            <label htmlFor='Email'>Email</label>
            <input aria-label="Email" name="email" type='text' onChange={updateEmail} />
            <label htmlFor='Password'>Password</label>
            <input aria-label='Password' name="password" type='password' onChange={updatePassword} />
            <input role='submit' className='submit' type='submit' value='LOGIN' />
            <p className='clickable' onClick={() => goTo('/register')}>Don't have an account yet? Register here!</p>
        </form>
    );
};

export default LoginForm;
