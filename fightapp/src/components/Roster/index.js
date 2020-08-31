import React, {useState, useReducer} from "react"
import API from "../../utils"

function roster() {

    return([{
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
        username: "unqiue-uName1",
        password: "unique-pWord1"
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
}])
}

export default roster