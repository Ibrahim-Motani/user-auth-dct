import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login({handleAuth}) {
    const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    const formData = {
      email,
      password,
    };
      axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
          .then(response => { 
              const result = response.data;
              if (result.hasOwnProperty('error')) {
                  alert(result.errors);
              } else {
                  alert('successfully loged in');
                  localStorage.setItem('token', result.token);
                history.push('/');
                handleAuth();
              }
          })
          .catch(error => { 
              console.log(error.message);
          });
  };

  return (
    <div>
      <h1>Login </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
