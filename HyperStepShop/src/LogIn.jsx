import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { useUser  } from './comp/UserContext.jsx'; // Import the useUser  hook
import './input.css';  

function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const { setUserId } = useUser (); // Get setUser Id from context

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await axios.post('http://localhost:8081/hyperstep/login', values);
            if (res.data.success) {
                setUserId(res.data.userId); // Set the user ID in context after successful login
                navigate('/homepage'); // Redirect to homepage after successful login
            } else {
                setErrors({ ...errors, general: "Invalid email or password" });
            }
        } catch (err) {
            console.log(err);
            setErrors({ ...errors, general: "An error occurred. Please try again." });
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

                    {errors.general && <span className="error">{errors.general}</span>}

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