import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <h2>Please Sign In</h2>
          <input
            type='text'
            name='text'
            id='login-email'
            placeholder='Username or Email'
          /><br />
          <input
            type='password'
            name='password'
            id='login-pass'
            placeholder='Password'
          /><br />
          <input
            type='submit'
            value='LOGIN'
            id='login-button'
          />
        </form>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </div>
  );
}

export default Login;
