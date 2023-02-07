import axios from 'axios'

export const loginFunction = async (e) => {
    try {
        const userData = {
            email: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('http://localhost:3000/auth/login', userData)
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
            email: e.target.username.value,
            password: e.target.password.value
        }

        const response = await axios.post('http://localhost:3000/auth/register', userData)
        const data = await response.data
        if (data.err)
        {throw Error(data.err)}
    } catch (err) {
        console.warn(err);
    }

}


// helpers

function login(data) {
    localStorage.setItem("token", data.Bearer)
}
