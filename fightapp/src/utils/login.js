import react, { useState } from 'react'
import API from './API'

let roster = []

// if(API.getAllFighters) {
//         console.log('...fetching from DB')
//     API.getAllFighters()
//     .then(res => { roster = res})
//     .catch(err => {console.log(err)})
// }
// else {
roster = [{
    fightId: 1,
    firstName: "John",
    lastName: "Kim",
    image: "https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png",
    stats: {
        weight: 180,
        height: 70,
        reach: 69,
        class: "middle-weight"
      },
      location: {
        latitude: 30.543813,
        longitude: -97.5917
      },
      userCred: {
        username: "johnk9000",
        password: "Password"
      }
},
{
    fightId: 2,
    firstName: "Fighter",
    lastName: "One",
    url: "https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png",
    stats: {
        weight: 225,
        height: 78,
        reach: 77,
        class: "middle-weight"
      },
      location: {
        latitude: 33,
        longitude: -99
      },
      userCred: {
        username: "unqiue-uName2",
        password: "unique-pWord2"
      }
},
{
    fightId: 3,
    firstName: "Fightman",
    lastName: "Two",
    url: "https://images.squarespace-cdn.com/content/v1/54b1df70e4b089270ed14cb5/1585071880672-6D753V75KMMBD8EWBFK5/ke17ZwdGBToddI8pDm48kPmAnfhQvqhMptgWHhbKoyhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxHmI13PUQExzHe63IkveXOojHqdB-MF5SqgJGovDTk0l_7uBv7xs1F-MHtfbN3UJ8/generic-placeholder-person.png",
    stats: {
        weight: 155,
        height: 65,
        reach: 64,
        class: "middle-weight"
      },
      location: {
        latitude: 33,
        longitude: -99
      },
      userCred: {
        username: "unqiue-uName3",
        password: "unique-pWord3"
      }
}]
// }
async function login({ username, password }) {
    //const [profile, setProfile] = useState({})

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var uName = [] 
            var pWord = []
            for(let i = 0; i < roster.length; i++) {
                uName.push(roster[i].userCred.username)
                pWord.push(roster[i].userCred.password)
            }
            console.log(uName.indexOf(username), pWord.indexOf(password))

            if( uName.indexOf(username) != -1 && uName.indexOf(username) == pWord.indexOf(password) || username == 'admin' && password == 'Welcome_1!') {
                resolve()
                var index = uName.indexOf(username)
                console.log("USER LOGGED IN!!" + index)
                //setProfile(roster[index])
                return roster[index]
            } else {
                reject()
                alert("Invalid Username or Password!")
            }
        }, 1500)
    })
}

export default login