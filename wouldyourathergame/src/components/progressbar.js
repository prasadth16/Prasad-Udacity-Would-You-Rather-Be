import React from 'react'
import '../style/progrssbar.css'

const ProgrssBar = (props) => {
    return (
        <div className="progrss-bar">
        <strong>{props.percentage}%</strong>
            <div className="filler" styles={{ width: `${props.percentage}%;` }} />
        </div>
    )
}

export default ProgrssBar