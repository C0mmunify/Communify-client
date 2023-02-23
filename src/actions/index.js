import axios from 'axios';
import jwt from 'jwt-decode';

export const loginFunction = async (e) => {
    try {
        const userData = {
            email: e.target.email.value,
            password: e.target.password.value
        }

        const response = await axios.post('https://communify-server-dev.onrender.com/auth/login', userData)
        const data = await response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
        login(data)
    } catch (err) {
        console.warn(err);
    }

}

export const registerFunction = async (e) => {
    try {
        const userData = {
            //address: e.target.postcode.value,
            name: e.target.username.value,
            email: e.target.email.value,
            //phone: "07983748596",
            age: 312,
            council: "Kingston",
            admin: false,
            password: e.target.password.value
        }

        const response = await axios.post('https://communify-server-dev.onrender.com/auth/register', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err);
    }

}

export const createEventFunction = async (e) => {
    try {
        const eventData = {
            title: e.target.eventTitle.value,
            description: e.target.eventDescription.value,
            location: e.target.eventLocation.value,
            council: e.target.eventCouncil.value,
            creator_id: e.target.createdby.value,
            spaces_total: e.target.eventSpaces.value,
            spaces_remaining: e.target.eventSpaces.value,
            date_occuring: e.target.startDate.value,
            date_ending: e.target.endDate.value
        }

        const response = await axios.post('https://communify-server-dev.onrender.com/post/events', eventData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err);
    }

}

export const editImageFunction = async (e) => {
    const userToken = localStorage.getItem('token')
    console.log(e.target.form[0].files[0]);
    try {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + userToken
            }
        };
        const response = await axios.patch(`https://communify-server-dev.onrender.com/user/5`,
        {
            "profile_image" : e.target.form[0].files[0]
        },
        config
        )
        const data = response.data
        console.log(data)
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err)
    } 
    
}

export const runLogs = () => {
    const userToken = localStorage.getItem('token')
    const userInfo = jwt(userToken)
    console.log(userInfo)
}

// helpers

function login(data) {
    localStorage.setItem("token", data.Bearer)
}
