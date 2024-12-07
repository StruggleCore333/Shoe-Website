import React, { useState } from "react";
import './input.css';  
import { Link, useNavigate } from "react-router-dom";
import validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // For redirecting after login

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post('/api/login', values); // Login API call
        localStorage.setItem('jwt_token', response.data.token); // Store JWT in localStorage
        navigate('/user'); // Redirect to the user profile page
      } catch (err) {
        setErrors({ login: "Invalid credentials" }); // Handle login error
      }
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={values.email}
            onChange={handleInput}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
            onChange={handleInput}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        {errors.login && <span className="error">{errors.login}</span>} {/* Display login error */}

        <div>
          <button type="submit" className="btn btn-success">Log in</button>
          <p>Need an account?</p>
          <Link to="/signup" className="btn btn-default">Create Account</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
