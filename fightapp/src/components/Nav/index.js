import React, {useContext} from "react"
import { Link } from "react-router-dom"
import "./style.css"
import FighterContext from "../FighterContext"

function Nav() {
    const isLoggedIn = true

    return(
    <div class="nav-aside">
        <ul class="nav-list-group">
        <li class="nav-list-item"><Link to="/"> Home </Link></li>
            <li class="nav-list-item"><Link to="/match" disabled={!isLoggedIn}> Match-Up </Link></li>
            <li class="nav-list-item"><Link to="/profile" disabled={!isLoggedIn}> Profile </Link>  </li>
            <li class="nav-list-item"><Link to="/social" disabled={!isLoggedIn}> Social </Link>  </li>
            <li class="nav-list-item"> <Link to="#" disabled={!isLoggedIn}> Events </Link>  </li>
            <li class="nav-list-item"><Link to="#" disabled={!isLoggedIn}> Edit Profile </Link>  </li>
        </ul>
    </div>
    )
}

export default Nav