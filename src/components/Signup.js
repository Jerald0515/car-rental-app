import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate('/Home');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form onSubmit={handleSignUp}>
          <h2>Create An Account</h2>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type='submit' className='sign-up-button'>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;

