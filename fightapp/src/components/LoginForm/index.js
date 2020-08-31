import React, {useReducer, useState, useEffect, useContext} from "react"
import login from "../../utils/login"
import API from "../../utils/API"
import FighterContext from "../FighterContext"

const rosterInit = [{
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
}]


function LoginForm() {    
    const [roster, setRoster] = useState([])
    const [fightIndex, setFightIndex] = useState(0)
    function loginRedux(state, action) {
        switch (action.type) {
            case 'input': 
                return {
                    ...state,
                    [action.inputName]: action.payload,
                }
            case 'login':
                return {
                    ...state,
                    err: '',
                    isChecking: true,
                }
            case 'success':
                return {
                    ...state,
                    isLoggedIn: true,
                    isChecking: false,
                    ...rosterInit[fightIndex],
                }
            case 'err':
                return {
                    ...state,
                    err: 'Incorrect username or password',
                    isLoggedIn: false,
                    isChecking: false,
                    username: '',
                    password: '',
                } 
            case 'logout':
                return {
                    ...state,
                    isLoggedIn: false,
                } 
            default:
                return state     
        }
    }
    const stateInit = {username: '', password: '', isChecking: false, err: '', isLoggedIn: false, fightId: "",
firstName: "",
lastName: "",
image: "",
stats: {
  weight: "",
  height: "",
  reach: "",
  class: ""
},
location: {
  latitude: "",
  longitude: ""
},
userCred: {
    userName: "",
    passWord: ""
}}
    const [state, dispatch] = useReducer(loginRedux, stateInit)
    const { username, password, isChecking, err, isLoggedIn } = state


    const exitForm = e => {
        e.preventDefault()
        setRoster(rosterInit)

        var login = document.querySelector(".login-form")
        login.classList.add("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.remove("hide")
        //if(isLoggedIn) {
            // setProfile(roster[fightIndex])
            // console.log('setting profile context', profile)
    }
    
    const checkLogin = async e => {
        e.preventDefault()
        console.log("logging in...")
            //console.log(username, password)
        dispatch({ type: 'login' })
        // Following Code will find the index of the username and set that as the active profile provided the user is now logged in
        var uName = []
        for(let i = 0; i < roster.length; i++) {
                uName.push(roster[i].userCred.username)
            }
        setFightIndex(uName.indexOf(username))
        try {
            await login({ username, password }).then(exitForm())
            dispatch({ type: 'success' })
            document.querySelector('.nav-list-group').classList.remove('blur')
            
        } catch (err) {
            dispatch({ type: 'err' })
        }
    }

    return(
        <FighterContext.Provider value={ state, dispatch }>
    <div class="login-form form-group fight-card hide">
        
            <form className="form">
            <div class="row">
            <button class="close-form" onClick={exitForm}>X</button>
    {/* {isLoggedIn ? (<h3>Welcome { username }</h3>) : (err && <p class="error-message">{ err }</p>)} */}
            </div>
            <div class="col-25">
      <label for="username">USERNAME</label>
    </div>
            <div class="col-75">
        <input className="username-input"
                name="username"
                type="text"
                placeholder="Username"
                value={ username }
                onChange={e => dispatch({
                    type: 'input',
                    inputName: 'username',
                    payload: e.currentTarget.value,
                })}
            />
               </div>
               <div class="col-25">
      <label for="password">PASSWORD</label>
    </div>
        <div class="col-75">
            <input className="password-input"
                    name="password"
                    type="text"
                    placeholder="Password"
                    value={ password }
                    onChange={e => dispatch({
                        type: 'input',
                        inputName: 'password',
                        payload: e.currentTarget.value,
                    })} 
                />
            </div>
            <br></br>
            
            {isLoggedIn ? (
                <button onClick={() => dispatch({ type: 'logout'})}>
                    Log Out
                </button>
            ) : (<button onClick={checkLogin} disabled={isChecking}>
                {isChecking ? 'Authenticating' : 'Log In'}
            </button>)}
        </form>
    </div>
    </FighterContext.Provider>
    )
}

export default LoginForm