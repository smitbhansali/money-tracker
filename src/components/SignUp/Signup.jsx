import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Signup = () => {
    return (
        <div class="container singup">
            <div class="header">
                <h1>Welcome</h1>
            </div>
            <div class="input_area">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Username" />
                <input type="password" placeholder="Password" />
            </div>
            <div class="actions">
                <button type="submit" value="Login">Sign Up</button>
                <p>
                    Have a account ?
                    <Link to="/login" class="Sign_up_link">Login</Link>
                </p>
            </div>
        </div>
    )
}

export default Signup;