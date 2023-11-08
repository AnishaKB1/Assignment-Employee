//import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
            setUsers(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, []);
  return (
    <div className="container">
    {users.map(user => (
      <div key={user.id} className="card">
        <h2 className='namehead'>{user.name}</h2>
        <p className='para'>ID: {user.id}</p>
        <p className='para'>Email: {user.email}</p>
      </div>
    ))}
  </div>
  );
}

export default Home;
