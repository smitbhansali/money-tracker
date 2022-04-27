import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div class="container login">
            <div class="header">
                <h1>Welcome</h1>
            </div>
            <div class="input_area">
                <input type="email" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </div>
            <div class="actions">
                <button type="submit" value="Login">Login</button>
                <p>
                    Don't Have a account ?
                    <Link to="/signup" class="Sign_up_link">Sign Up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login