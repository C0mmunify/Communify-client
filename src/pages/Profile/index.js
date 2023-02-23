import React from 'react';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import './styles.css'
import { BackButton } from '../../components';
import ProfileBlock from '../../components/profileBlock';
import EditImageForm from '../../components/editImageForm';
import RunLogs from '../../components/runLogs';

const Profile = () => {
    const goTo = useNavigate();
    const userInfo = localStorage.getItem('token')
    const username = jwt(userInfo).name

    return (
        <section>
            <img src='https://drive.google.com/uc?export=view&id=1psAL2nh2-VuiS4XvU0sU259gGn3WDO6Y' alt='Communify Logo'></img>
            <h1>Welcome</h1>
            <h1>{username}</h1>
            <ProfileBlock />
            <EditImageForm />
            <RunLogs />
            <p className='clickable' onClick={() => goTo('/events')}> Click here for events </p>
            <BackButton />
        </section>
    )
}

export default Profile;
