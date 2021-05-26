import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import Conditions from './Conditions'
import '../styling/welcome.css'
import { unstable_concurrentAct } from 'react-dom/test-utils';

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

    // Storing the output from the api
    const [data, setData] = useState([])
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()

    const api_url = 'https://jsonplaceholder.typicode.com/users'

    useEffect(() => {
        async function fetchContacts(){
            try {
                const requestUrl = api_url;
                // Fetch the response
                const response = await fetch(requestUrl);
                console.log(`Response before JSON Conversion`, response);
                
                // Convert the request response into JSON
                const responseJSON = await response.json();
                console.log(`Response AFTER JSON Conversion`, responseJSON)

                // Call the state function
                setData(responseJSON)
            } 
            catch (error) {
                console.log('Failed to Fetch', error);
            } 
        }
        fetchContacts();

    }, []);

  return (
    <div>
      <Navbar />
      <h1 className='test-header'>{ loggedInUserName }</h1>
      <h2 className='test-header-h2'>Today's Weather Conditions</h2>
      <div className='forecast-button-container'>
        <button className='forecast-button' onClick={getForecast}>Get Forecast</button>
        <Conditions responseObj={responseObj} />
      </div>
      {/* { data.map((usr) => 
        <div>
          <p key={usr.id}> 
            Username: {usr.username}
            Company: {usr.company.catchPhrase}
          </p>
          {email}
          <p key={usr.id}> 
            Company: {usr.company}
          </p>
          <p> 
            Email: {usr.email}
          </p>
          <p> 
            Phone: {usr.phone}
          </p>
        </div>
        )
      } */}
      <div>
        <p> 
          Username: {data[2].username}
        </p>
      </div>
      {/* <div className='card-container-1'>
        <p key={id}>
            Username Info: {nme.username}
        </p>
        <p key={id}>
            Email: {email}
        </p>
        <p key={id}>  
            Phone: {phone} 
        </p>
      </div> */}

    </div>
  )
}

export default Welcome
