import React from "react"

const exitForm = e => {
    e.preventDefault()
    var login = document.querySelector(".login-form")
    login.classList.add("hide")
    var homeBtns = document.querySelector(".home-btns")
    homeBtns.classList.remove("hide")
}

const checkLogin = e => {
    console.log("logging in...")
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