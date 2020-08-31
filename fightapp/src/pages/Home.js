import React, { useEffect, useState } from "react"
import API from "../utils/API";
import ProfileForm from "../components/ProfileForm"
import LoginForm from "../components/LoginForm"
import BackgroundVideo from "../components/BackgroundVideo/Rick_James_Montage.mp4"
import "./style.css"

function Home() {
    const [roster, setRoster] = useState([])

   async function loadFighters() {
        try {
            await API.getAllFighters()
            .then(res => setRoster(res))
        }  catch(err) {
            console.log(err)
        }
   }
    
loadFighters()
// Fcns to toggle sign-up and login windows
    const toggleSignUp = e => {
        e.preventDefault()
        var signUp = document.querySelector(".sign-up-form")
            console.log(signUp)
        signUp.classList.remove("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.add("hide")
    }

    const toggleLogin = e => {
        e.preventDefault()
        var login = document.querySelector(".login-form")
        login.classList.remove("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.add("hide")
    }

    return(
    <div class="home-cont">
        <link href="https://fonts.googleapis.com/css2?family=Graduate&display=swap" rel="stylesheet"></link>
        <video autoPlay muted loop id="myVideo">
        <source src={BackgroundVideo} type="video/mp4"/>
        </video>
        <h1 class="home-header"> Fight App </h1>
        <div class="home-btns">
            <btn class="login rumble" onClick={toggleLogin}>LOGIN</btn>
            <btn class="sign-up" onClick={toggleSignUp}>SIGN UP</btn>
        </div>
        <ProfileForm/>
        <LoginForm/>
    </div>
    )
}

export default Home