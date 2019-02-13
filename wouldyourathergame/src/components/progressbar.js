import React from 'react'
import '../style/progrssbar.css'

const ProgrssBar = (props) => {
    return (
        <div className="progrss-bar">
            <div className="filler" style={{ width: `${props.percentage}%` }} />
            <span className="floating-text">{props.percentage}%</span>
        </div>
    )
}

export default ProgrssBar