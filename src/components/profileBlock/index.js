import React from 'react';
import jwt from 'jwt-decode';
import './styles.css';

const ProfileBlock = () => {

    const userToken = localStorage.getItem('token')
    const userInfo = jwt(userToken)

    return(
        <>
        <section id="profileBlock">
        <img id="profileImg" alt="Profile" src="https://drive.google.com/uc?export=view&id=19mG4U3KP7vzFPncPKHNGjhFKeQrI8rKq"></img>
        <section id="profileText">
        <h1> {userInfo.username} </h1>
        <p id="profileAge"> Age: {userInfo.age} </p>
        {/* <p> following: {followingInfo.length-1} </p> */}
        {/* <p> followers: {followerInfo.length-1} </p> */}
        <p id="profileCouncil"> Council: {userInfo.council}</p>
        </section>
        </section>
    </>
    )
}

export default ProfileBlock
