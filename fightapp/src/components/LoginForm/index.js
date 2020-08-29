import React from "react"
import API from "../../utils/API"

const exitForm = e => {
    e.preventDefault()
    var login = document.querySelector(".login-form")
    login.classList.add("hide")
    var homeBtns = document.querySelector(".home-btns")
    homeBtns.classList.remove("hide")
}

const checkLogin = e => {
    e.preventDefault()
    console.log("logging in...")
    let roster = []
    roster.push(API.getAllFighters())
    var uName = document.querySelector('.username-input').value
    console.log(roster, uName)
    if(roster.indexOf(uName) !== -1 || uName == "admin" ) {
        console.log("USER LOGGED IN!!")
    } else {
        alert("Invalid Username or Password!")
    }
}


function LoginForm() {
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
            <button onClick={checkLogin}>Submit</button>
        </form>
    </div>
    )
}

export default LoginForm