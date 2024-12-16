// LogIn.jsx
import React, { useState } from "react";
import axios from 'axios';
import './input.css';  
import validation from './LoginValidation';
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    if (validationErrors.email === "" && validationErrors.password === "") {
        axios.post('http://localhost:8081/hyperstep', values)
            .then(res => {
                console.log("Response from server:", res); // Log the entire response
                if (res.data && typeof res.data === 'object' && res.data.id) {
                    const userId = res.data.id; // Assuming this is an integer
                    localStorage.setItem('userId', userId); // Store the integer directly
                    console.log("User   ID stored in local storage:", userId);
                    navigate('/homepage');
                } else {
                    console.error("Login failed:", res.data); // Log the error message
                    alert("Login failed: " + res.data); // Show an alert to the user
                }
            })
            .catch(err => {
                console.error("Error during login:", err);
            });
    }
};

  return (
    <div className="wrapper">
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

          <div>
            <button type="submit" className="btn btn-success">Log in</button>
            <p>Need an account?</p>
            <Link to="/signup" className="btn btn-default">Create Account</Link>
          </div>
        </form>
        </div>
    </div>
  );
}

export default Login;