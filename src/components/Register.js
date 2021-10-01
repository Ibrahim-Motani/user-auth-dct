import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    const formData = { username, email, password };
      
      axios.post('http://dct-user-auth.herokuapp.com/users/register', formData)
          .then(response => {
              const result = response.data;
              if (result.hasOwnProperty('errors')) {
                  alert(result.message);
              } else {
                  alert('successfully created user');
                  history.push('/login');
              }
              console.log(result);
          }).catch(error => {
              console.log(error.message);
          });
  };

  return (
    <div>
      <h1>Register with us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={event => setUsername(event.target.value)}
          name="username"
        ></input>
        <br />
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
        ></input>
        <br />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
        ></input>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Register;
