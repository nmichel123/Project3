import React, { useReducer, useRef, useState, useEffect } from "react";
import FormContext from "../FormContext"
import "./style.css"

function ProfileForm() {
    const inputRef = useRef()
    const [fighters, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                  return [
                      ...state,
                {
                    fId: Math.floor((2 ** 32) * Math.random()),
                    firstName: "",
                    lastName: "",
                    image: ""
                }
                  ]
                default:
                    return state;
                }
    }, [])
    
    const handleInputChange = e => {
        e.preventDefault()
        dispatch({
            type: 'add',
            name: inputRef.current.value
          });
          inputRef.current.value = '';
        }

    const exitForm = e => {
        e.preventDefault()
        var signUp = document.querySelector(".sign-up-form")
        signUp.classList.add("hide")
        var homeBtns = document.querySelector(".home-btns")
        homeBtns.classList.remove("hide")
    }

    return(
        <div class="sign-up-form form-group fight-card hide">
        <form className="form">
            <div class="row">
            <button class="close-form" onClick={exitForm}>X</button>
            </div>
    <div class="col-25">
      <label for="username">USERNAME</label>
    </div>
            <div class="col-75">
        <input className="user-name-input"
                name="userName"
                type="text"
                placeholder="Username"
            />
               </div>
               <div class="col-25">
      <label for="password">PASSWORD</label>
    </div>
            <div class="col-75">
        <input className="pass-word-input"
                name="passWord"
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
      <label for="STATS">STATS [ lbs | in | class ]</label>
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
      <select id="weight-class" name="weightClass">
        <option value="Heavy Weight">Heavy Weight</option>
        <option value="Middle Weight">Middle Weight</option>
        <option value="Welter Weight">Welter Weight</option>
        <option value="Light Weight">Light Weight</option>

      </select>
    </div>
            <br></br>
            <button onClick={handleInputChange}>Submit</button>
    </form>
        </div>

    )
}

export default ProfileForm