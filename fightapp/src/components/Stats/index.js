import React from "react"
import "./style.css"

function Stats() {
    return(
        <div class="stats">
            <ul class="stats-ul">
                <li class="stat-item">
                    <span><strong>Weight: </strong> 200lbs </span>
                </li>
                <li class="stat-item">
                    <span><strong>Height: </strong> 5'10" </span>
                </li>
                <li class="stat-item">
                    <span><strong>Division: </strong> Welter-Weight </span>
                </li>
                <li class="stat-item">
                    <span><strong>Reach: </strong> 69" </span>
                </li>
                <li class="stat-item">
                    <span><strong>Win / Loss / Draw: </strong> 5 / 7 / 1</span>
                </li>
            </ul>
        </div>
    )
}

export default Stats