import React from "react"
import "./style.css"

function ProfileHeader({ firstName }) {


    return(
        <div>
            <h1>FIGHTER: { firstName }</h1>
        </div>
    )
}

export default ProfileHeader