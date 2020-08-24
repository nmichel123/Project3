import React from "react"
import "./style.css"

function Nav() {
    return(
    <div class="nav-aside">
        <ul class="nav-list-group">
            <li class="nav-list-item">
                <a href="/match"> Match-Up </a>
                <a href="/profile"> Profile </a>
                <a href="/social"> Social </a>
                <a href="#"> Events </a>
                <a href="#"> Edit Profile </a>
            </li>
        </ul>
    </div>
    )
}

export default Nav