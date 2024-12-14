
import React, { useState } from "react";
import './input.css';  
import { Link, useNavigate } from "react-router-dom";
import validation from './signUpValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',  
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/signup', values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name"  
                        placeholder="Enter Name"  
                        name="name" 
                        value={values.name}  
                        onChange={handleInput} 
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
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
                    <Link to="/" className="btn btn-default">Log In</Link>
                </div>
            </form>
        </div>
    );
}

export default Signup;
