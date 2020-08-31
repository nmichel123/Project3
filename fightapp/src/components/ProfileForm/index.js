import React, { useState, useRef, useReducer, useEffect } from "react";
import FighterContext from "../FighterContext"
import "./style.css"
import API from "../../utils/API";

function ProfileForm() {
    const inputRef = useRef()
    const [userLocation, setUserLocation] = useState({})
    const [roster, setRoster] = useState([])
    locateUser()
    const [fighterData, dispatch] = useReducer((state, action) => {
        switch ( action.type ) {
            case 'add':
                return [
                    ...state,
                    {
                        fightId: Math.floor(3 * Math.random()),
                        firstName: document.querySelector(".first-name-input").value,
                        lastName: document.querySelector(".last-name-input").value,
                        image: "url",
                        stats: {
                            weight: document.querySelector(".weight-input").value || 0,
                            height: document.querySelector(".height-input").value || 0,
                            reach: document.querySelector(".reach-input").value || 0,
                            class: document.querySelector("#weight-class").value || "no class",
                        },
                        location: userLocation,
                        userCred: {
                            userName: document.querySelector(".user-name-input").value,
                            passWord: document.querySelector(".password-input").value
                        }
                    }
                ]
            default: return state
        }
    }, {})

    const formSubmit = e => {
        e.preventDefault()
        locateUser()
        dispatch({
            type: 'add',
            name: inputRef.current.value
            })
            document.querySelectorAll('input').value = ""

        if(fighterData) {
            console.log("submitting form..." + JSON.stringify(fighterData[fighterData.length - 1])) // DEL unless verbose is enabled
        API.saveFighter(fighterData)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
            }
        }

    // User sign up functions -> to be sent to a Actions dir    
    const exitForm = e => {
        e.preventDefault()
        var signUp = document.querySelector(".sign-up-form")
        signUp.classList.add("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.remove("hide")
    }

    // Javascript Geolocation Fcn to track user location
    function showPosition(position) {
       let coordinates = { latitude: position.coords.latitude, longitude: position.coords.longitude }
            //console.log("showPosition" + JSON.stringify(coordinates))
        setUserLocation(coordinates)
    }

    function locateUser() {
        var geocode = document.getElementById('geocode')
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);

            } else {
              geocode.innerHTML = "Geolocation is not supported by this browser.";
            }
    }

    return(
    <div class="sign-up-form form-group fight-card hide">
        <script src="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js"></script>
        <link href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css" rel="stylesheet" />
        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v4.5.1/mapbox-gl-geocoder.min.js"></script>
        <script>locateUser()</script>
    <form className="form">
    <div id="geocoder" class="geocoder"></div>
        <div class="row" id="controls">
        <button class="close-form" onClick={exitForm}>X</button>
        </div>
    <div class="col-25">
        <label for="username">USERNAME</label>
        </div>
            <div class="col-75">
        <input className="user-name-input"
                name="username"
                type="text"
                placeholder="Username"
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
            />
            </div>
            <div class="col-25">
        <label for="firstName">FIRSTNAME</label>
        </div>
            <div class="col-75">
            <input className="first-name-input"
                name="firstName"
                type="text"
                placeholder="First Name"
                ref={inputRef}
            />
            </div>
            <div class="col-25">
        <label for="lastName">LASTNAME</label>
        </div>
            <div class="col-75">
            <input className="last-name-input"
                name="lastName"
                type="text"
                placeholder="Last Name"
                ref={inputRef}
            />
            </div>
            <div class="col-25">
        <label for="STATS">STATS </label>
        <label for="STATS"> [ lbs | in | class ] </label>
        </div>
                <div class="col-75">
            <input className="weight-input"
                name="weight"
                type="text"
                placeholder="Weight (lbs)"
            ref={inputRef}
            />

            <input className="height-input"
                name="height"
                type="text"
                placeholder="Height (in inches)"
                ref={inputRef}
            />

            <input className="reach-input"
                name="height"
                type="text"
                placeholder="Reach (in inches)"
                ref={inputRef}
            />
            <select id="weight-class" name="weightClass">
                <option value="Heavy Weight">Heavy Weight</option>
                <option value="Middle Weight">Middle Weight</option>
                <option value="Welter Weight">Welter Weight</option>
                <option value="Light Weight">Light Weight</option>

            </select>
    </div>
            <br></br>
            <button onClick={formSubmit}>Submit</button>
    </form>
    </div>
    )
}

export default ProfileForm