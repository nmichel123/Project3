import React from "react"
import "./style.css"
import FighterContext from "../FighterContext"
import { useContext } from "react"

function Stats() {
    return(        
        <div class="stats">
            <ul class="stats-ul">
                <li class="stat-item">
                    <span><strong>Weight: </strong> 180 lbs </span>
                </li>
                <li class="stat-item">
                    <span><strong>Height: </strong> 70 inches </span>
                </li>
                <li class="stat-item">
                    <span><strong>Division: </strong> Middle-weight </span>
                </li>
                <li class="stat-item">
                    <span><strong>Reach: </strong> 70 inches </span>
                </li>
                <li class="stat-item">
                    <span><strong>Win / Loss / Draw: </strong> 5 / 7 / 1</span>
                </li>
            </ul>
        </div>
       
    )
}

export default Stats