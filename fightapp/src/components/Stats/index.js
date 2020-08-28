import React from "react"
import "./style.css"

function Stats({stats}) {
    return(
        <div class="stats">
            <ul class="stats-ul">
                <li class="stat-item">
                    <span><strong>Weight: </strong> {stats.weight} </span>
                </li>
                <li class="stat-item">
                    <span><strong>Height: </strong> {stats.height} </span>
                </li>
                <li class="stat-item">
                    <span><strong>Division: </strong> {stats.class} </span>
                </li>
                <li class="stat-item">
                    <span><strong>Reach: </strong> {stats.reach} </span>
                </li>
                <li class="stat-item">
                    <span><strong>Win / Loss / Draw: </strong> 5 / 7 / 1</span>
                </li>
            </ul>
        </div>
    )
}

export default Stats