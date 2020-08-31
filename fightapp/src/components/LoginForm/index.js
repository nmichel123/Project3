import React, {useReducer, useState} from "react"
import login from "../../utils/login"
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
            //console.log(username, password)
        dispatch({ type: 'login' })
        try {
            await login({ username, password }).then(exitForm())
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
    )
}

export default LoginForm