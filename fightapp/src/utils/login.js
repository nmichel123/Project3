import react from 'react'
import API from './API'

const roster = API.getAllFighters

async function login({username, password}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Original condition: roster.indexOf(uName) !== -1
            if( username == 'admin' && password == 'Welcome_1!') {
                resolve()
                console.log("USER LOGGED IN!!")
            } else {
                reject()
                alert("Invalid Username or Password!")
            }
        }, 1500)
    })
}

export default login