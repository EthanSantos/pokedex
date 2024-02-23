import React from 'react'
import './ProgressBar.css';

const ProgressBar = ({ statName, baseStat }) => {
    return (
        <div>
            <p>{statName}</p>
            <div className="bar-container">
                <div className="skills" style={{width: baseStat <= 100 ? baseStat + "%" : "100%"}}>
                    {baseStat}
                </div>
            </div>
        </div>
    )
}
export default ProgressBar
