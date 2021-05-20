import React from 'react'

const Conditions = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                {props.responseObj.cod === 200 ?
            <div>
                <p><strong>City: {props.responseObj.name}</strong></p>
                <p>Current Temperature: {Math.round(props.responseObj.main.temp)} degrees with {props.responseObj.weather[0].description}.</p>    
            </div>
            : null
        }
        </div>
        </div>
    )
}

export default Conditions
