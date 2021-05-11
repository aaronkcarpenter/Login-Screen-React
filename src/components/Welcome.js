import React { useEffect } from 'react';
import { useSelector } from 'react-redux';

import React from 'react'

const Welcome = () => {
  const [ loggedInUserName, setLoggedInUserName ] = useState('TestClown')
  return (
    <div>
      <h1>{ loggedInUserName }</h1>
    </div>
  )
}

export default Welcome
