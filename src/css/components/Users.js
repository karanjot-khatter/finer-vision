import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';

const Users = () => {

  const [userList, setUserList] = useState([]);

  const getUsers = () => {
    Axios.get('http://localhost:3001/users').then((response) =>  {
      setUserList(response.data);
    });
  }

  const dobRemoveTime = (dob) => {
    let date = new Date(dob).toLocaleDateString().toString();
    return date;
  }

  useEffect(() => {
    getUsers();
  }, [])

  return <div>
      <h1>List of Users</h1>
      {userList.map((val,key) => {
          return <div className='users' key={val.id}>
            <p><strong>User #: {val.id}</strong></p>
            <p>First Name: {val.first_name}</p>
            <p>Surname: {val.surname}</p>
            <p>Email_address: {val.email_address}</p>
            <p>Phone #: {val.telephone_number}</p>
            <p>Gender: {val.gender}</p>
            <p>DOB: {dobRemoveTime(val.dob)}</p>
            <p>Comments: {val.comments}</p>
          </div>
      })}
  </div>;
};

export default Users;
