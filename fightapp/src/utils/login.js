import react from 'react'
import API from './API'

const roster = API.getAllFighters

async function login({uName, pWord}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(roster.indexOf(uName) !== -1 || uName == "admin" && pWord === 'Welcome_1!') {
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