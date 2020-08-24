import React, { useReducer, useRef } from "react";
import "./style.css"

function ProfilePic(props) {
    return(
        <div>
            <img src={props.user.image} />
        </div>
    )
}

export default ProfilePic