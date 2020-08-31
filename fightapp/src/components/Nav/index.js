import React from "react"
import {Link} from 'react-router-dom';
import "./style.css"

function Nav() {
    return(
    <div class="nav-aside">
        <ul class="nav-list-group">
        <li class="nav-list-item"><a href="/"> Home </a></li>
            <li class="nav-list-item"><Link to ="/match"> Match-Up </Link></li>
            <li class="nav-list-item"><a href="/profile"> Profile </a>  </li>
            <li class="nav-list-item"><a href="/social"> Social </a>  </li>
            <li class="nav-list-item"> <a href="/events"> Events </a>  </li>
            <li class="nav-list-item"><a href="#"> Edit Profile </a>  </li>
        </ul>
    </div>
    )
}

export default Nav