import React from 'react';
//import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import './styles.css'
import { BackButton } from '../../components';

const Profile = () => {
    //const goTo = useNavigate();
    const userInfo = localStorage.getItem('token')
    const username = jwt(userInfo).name

    return (
        <section>
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <h1>Welcome {username}</h1>
            <BackButton />
        </section>
    )
}

export default Profile;
