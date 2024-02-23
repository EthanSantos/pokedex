import React from 'react'
import './ProgressBar.css';

const ProgressBar = ({ statName, baseStat, averageColor }) => {
    console.log(averageColor)
    return (
        <div>
            <div className="stat-container">
                <p>{statName}:</p>
                <div className="bar-container">
                    <div className="skills" style={{ backgroundColor: averageColor, width: baseStat <= 100 ? baseStat + "%" : "100%" }}>
                        {baseStat}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProgressBar
