import axios from 'axios'

export const loginFunction = async (e) => {
    try {
        const userData = {
            email: e.target.email.value,
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
            //address: e.target.postcode.value,
            name: e.target.username.value,
            email: e.target.email.value,
            phone: "07983748596",
            age: 312,
            council: "Kingston",
            admin: false,
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
