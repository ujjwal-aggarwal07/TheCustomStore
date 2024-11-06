import React, { useState } from 'react';
import '../CSS/Login.css'; // Add custom styling here

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Add login logic here
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Sign In</h2>
                
                <label>Email address</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    required
                />
                
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                
                <div className="remember-me">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                    />
                    <label>Remember me</label>
                    <a href="#" className="forgot-password">Forgot password?</a>
                </div>
                
                <button type="submit" className="login-button">Sign In</button>
                
                <div className="register">
                    <p>Not a member? <a href="#">Register</a></p>
                    <p>or sign up with:</p>
                </div>
                
                <div className="social-login">
                    <a href="#"><i className="fab fa-facebook"></i></a>
                    <a href="#"><i className="fab fa-google"></i></a>
                    <a href="#"><i className="fab fa-github"></i></a>
                </div>
            </form>
        </div>
    );
};

export default Login;
