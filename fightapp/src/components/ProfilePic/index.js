import React from "react"

function ProfilePic() {
    return(
        <div>
            <img src={props.user.image} />
        </div>
    )
}

export default ProfilePic