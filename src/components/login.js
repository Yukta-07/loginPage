import React, { useState } from "react";

export const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }

    return (
      <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="username">username:</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="username" placeholder="username" id="username" name="username" />
               </div>
               <div> <label htmlFor="password">password:</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <button type="submit">Log In</button>
            </div>
            <div>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></div>
      </form>
    )
}