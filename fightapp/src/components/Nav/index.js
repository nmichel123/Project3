import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

function Nav() {
    return(
    <div class="nav-aside">
        <ul class="nav-list-group">
        <li class="nav-list-item"><Link to="/"> Home </Link></li>
            <li class="nav-list-item"><Link to="/match"> Match-Up </Link></li>
            <li class="nav-list-item"><Link to="/profile"> Profile </Link>  </li>
            <li class="nav-list-item"><Link to="/social"> Social </Link>  </li>
            <li class="nav-list-item"> <Link to="#"> Events </Link>  </li>
            <li class="nav-list-item"><Link to="#"> Edit Profile </Link>  </li>
        </ul>
    </div>
    )
}

export default Nav