import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Conditions from './Conditions'
import '../styling/welcome.css'

const Welcome = () => {
  const [ loggedInUserName, setLoggedInUserName ] = useState('Welcome {Username}')
  const [ responseObj, setResponseObj ] = useState({});

  const getForecast = () => {
    // weather data fetch function here- copied from the rapidapi webpage
    fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=dallas", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "917b561990msh1deec81f00f8c59p170eaejsn16f686d703ca",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(res => res.json())
.then(res => {
  setResponseObj(res)
})
.catch(err => {
	console.error(err);
});
  }

  // const weather_url_api = 
  return (
    <div>
      <Navbar />
      <h1 className='test-header'>{ loggedInUserName }</h1>
      <h2 className='test-header-h2'>Today's Weather Conditions</h2>
      <div>
        <button onClick={getForecast}>Get Forecast</button>
        <Conditions responseObj={responseObj} />
      </div>
    </div>
  )
}

export default Welcome
