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
          // Assuming the response indicates successful login
          if (res.data) { // You may want to check for specific success criteria
            navigate('/homepage'); // Redirect to /home after successful login
          }
        })
        .catch(err => console.log(err));
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