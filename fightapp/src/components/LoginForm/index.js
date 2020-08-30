import React from "react"
import login from "../../utils"
import API from "../../utils/API"

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
            }
        case 'err':
            return {
                ...state,
                err: 'incorrect username or password',
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

const stateInit = {username: '', password: '', isChecking: false, err: '', isLoggedIn: false}

function LoginForm() {
    const [state, dispatch] = useReducer(loginRedux, stateInit)
    const { username, password, isChecking, err, isLoggedIn } = state

    const exitForm = e => {
        e.preventDefault()
        var login = document.querySelector(".login-form")
        login.classList.add("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.remove("hide")
    }
    
    const checkLogin = async e => {
        e.preventDefault()
        console.log("logging in...")
        var uName = document.querySelector('.username-input').value
        var pWord = document.querySelector('.password-input').value
        dispatch({ type: 'login' })

        try {
            await login({ uName, pWord })
            dispatch({ type: 'success' })
            document.querySelector('.nav-list-group').classList.remove('blur')
        } catch (err) {
            dispatch({ type: 'err' })
        }
    }

    return(
    <div class="login-form form-group fight-card hide">
            <form className="form">
            <div class="row">
            <button class="close-form" onClick={exitForm}>X</button>
            </div>
            <div class="col-25">
      <label for="username">USERNAME</label>
    </div>
            <div class="col-75">
        <input className="username-input"
                name="userName"
                type="text"
                placeholder="Username"
            />
               </div>
               <div class="col-25">
      <label for="password">PASSWORD</label>
    </div>
        <div class="col-75">
            <input className="password-input"
                    name="passWord"
                    type="text"
                    placeholder="Password"
                />
            </div>
            <br></br>
            <button onClick={checkLogin} disabled={isChecking}>
                {isChecking ? 'Authenticating' : 'Log In'}
            </button>
        </form>
    </div>
    )
}

export default LoginForm