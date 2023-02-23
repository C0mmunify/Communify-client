import React from 'react';
import jwt from 'jwt-decode';

const ProfileBlock = () => {

    const userToken = localStorage.getItem('token')
    const userInfo = jwt(userToken)

    return(
        <>
        <img alt="Profile" src={userInfo.profile_image}></img>
        <h1> {userInfo.username} </h1>
        <p> Age: {userInfo.age} </p>
        {/* <p> following: {followingInfo.length-1} </p> */}
        {/* <p> followers: {followerInfo.length-1} </p> */}
        <p> {userInfo.council}</p>
    </>
    )
}

export default ProfileBlock
