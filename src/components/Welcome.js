import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Welcome = () => {
  const [ loggedInUserName, setLoggedInUserName ] = useState('TestClown')
  return (
    <div>
      <h1>{ loggedInUserName }</h1>
    </div>
  )
}

export default Welcome
