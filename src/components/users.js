import React, { useEffect } from 'react';
import { useSelector } from 'react-redux;'

const users = () => {
  const users = useSelector((state) => state.users);
  
  return (
    <div>
      <ul>
        {usersArray.map((user) => {
          
        })}
      </ul>
    </div>
  )
}

export default users
