import React, { useState } from "react";
import './input.css';  
import { Link } from "react-router-dom";
import validation from './SignUpValidation';

function Signup() {
    const [values, setValues] = useState({
        username: '',
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
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username" 
                        placeholder="Enter Username" 
                        name="username"
                        value={values.username}
                        onChange={handleInput} 
                    />
                    {errors.username && <span className="error">{errors.username}</span>}
                </div>
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
                    <button type="submit" className="btn btn-success">Sign Up</button>
                    <p>Already have an account?</p>
                    <Link to="/login" className="btn btn-default">Log In</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
