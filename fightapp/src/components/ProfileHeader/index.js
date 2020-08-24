import React from "react"
import "./style.css"

function ProfileHeader(props) {
    return(
        <div>
            <h1>FIGHTER: {props.firstName}</h1>
        </div>
    )
}

export default ProfileHeader