import React from "react"
import BackgroundVideo from "../components/BackgroundVideo/Rick_James_Montage.mp4"
import ProfilePic from "../components/ProfilePic"
import ProfileAside from "../components/ProfileAside"
import ProfileHeader from "../components/ProfileHeader"
import Stats from "../components/Stats"

function Profile() {
    return(
        <div>
        <video autoPlay muted loop id="myVideo">
        <source src={BackgroundVideo} type="video/mp4"/>
        </video>
            <ProfileHeader/>
            <div class="column">
                <div class="fight-card">
                    <ProfilePic/>
                    <Stats/>
                </div>
                <div class="profile-aside">
                    <ProfileAside/>
                </div>
            </div>
        </div>
    )
}

export default Profile