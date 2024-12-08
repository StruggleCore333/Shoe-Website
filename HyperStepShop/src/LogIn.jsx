import React, { useState } from "react";
import './input.css';  
import { Link } from "react-router-dom";
import validation from './LoginValidation';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);

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
