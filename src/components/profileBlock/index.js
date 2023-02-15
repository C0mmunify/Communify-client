import React from 'react';
import jwt from 'jwt-decode';
import { BackButton } from '../../components';

const ProfileBlock = () => {

    const userToken = localStorage.getItem('token')
    const userInfo = jwt(userToken)

    return(
        <>
        {/* <img src={userInfo.profile_img}></img> */}
        <h1> {userInfo.username} </h1>
        {/* <h2> @{userInfo.main_user} </h2> */}
        {/* <p> following: {followingInfo.length-1} </p> */}
        {/* <p> followers: {followerInfo.length-1} </p> */}
        <p> {userInfo.council}</p>
        <BackButton />
    </>
    )
}

export default ProfileBlock
