import React from "react"
import ProfilePic from "../components/ProfilePic"
import ProfileAside from "../components/ProfileAside"
import ProfileHeader from "../components/ProfileHeader"
import Stats from "../components/Stats"

function Profile() {
    return(
        <div>
            <ProfileHeader/>
            <div class="row">
                <div class="colMain">
                    <ProfilePic/>
                    <Stats/>
                </div>
                <div class="colAside">
                    <ProfileAside/>
                </div>
            </div>
        </div>
    )
}

export default Profile