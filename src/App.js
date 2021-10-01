import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const handleAuth = () => {
    setUserLoggedIn(!userLoggedIn);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth();
    }
   }, []);

  return (
    <div>
      <h1>User Auth</h1>
      <NavBar handleAuth={handleAuth} userLoggedIn={userLoggedIn}></NavBar>
    </div>
  );
}

export default App;
