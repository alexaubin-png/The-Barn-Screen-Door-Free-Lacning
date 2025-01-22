import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';

export default function Auth() {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isLoggedInMode, setIsLoggedInMode] = useState(true);
    const [isGuest, setIsGuest] = useState(false);
    const navigate = useNavigate();

    // Move async code inside a regular function
    const authenticateUser = async (errorMessage) => {
        try {
            const response = await fetch('http://localhost:1010/users/register', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({email, username, password }),
            });
            if (!response.ok) throw new Error(errorMessage);
            const data = await response.json();
            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);
            alert("Authentication successful.");
            navigate("/"); // Navigate to home page after successful authentication
            setUsername("");
            setPassword("");
        } catch (error) {
            console.error("Authentication error:", error.message);
            alert("Invalid credentials. Please try again.");
            setUsername("");
            setPassword("");
        }
    };

    const loginUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/login`, "Login failed");
    const createUser = () => authenticateUser(`${process.env.REACT_APP_API_URL}/users/register`, "Signup failed");

    const handleSubmit = (event) => {
        event.preventDefault();
        isLoggedInMode ? loginUser() : createUser();
    };

    const toggleLoginMode = () => {
        setIsLoggedInMode(!isLoggedInMode);
        setIsGuest(false);
    };

    const logoutUser = () => {
        localStorage.clear();
        setIsLoggedInMode(true);
        alert("Logout successful.");
        navigate("/");
    };

    const continueGuest = () => {
        setIsGuest(true); // Just setting setIsGuest to true to indicate guest mode
        navigate("/");
    };

    return (
        <div className='auth-container'>
            <div className='container-section'>
                <h1 className='Login-Title'>{isLoggedInMode ? "Login" : "Sign Up"}
                    <label className='prompt-overlay'>To become a sponsor, feel free to login</label>
                </h1>
                <form onSubmit={handleSubmit}>
                    {!isLoggedInMode ? (
                        <>
                        <label className='username-label'>
                                Email:
                                <input
                                    className='username-input-signup'
                                    type='text'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </label><br />
                            <label className='username-label'>
                                Username:
                                <input
                                    className='username-input-signup'
                                    type='text'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </label><br />
                            <label>
                                Password:
                                <input
                                    className='password-input-signup'
                                    type='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </label>
                        </>
                    ) : (
                        <div>
                            <label>Username:
                                <input className='username-input-login' type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
                                <br />
                            </label>
                            <label>Password:
                                <input className='password-input-login' type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </label>
                        </div>
                    )}
                    <button className='Ternary-Button' type="submit">{isLoggedInMode ? "Login" : "Sign Up"}</button>
                </form>
            </div>
            <div className='button-container'>
                <div className="ternary-text">
                    {isLoggedInMode ? "Don't have an account?" : "Already have an account?"}
                </div>
                <button className="signup-or-login" type="button" onClick={toggleLoginMode}>
                    {isLoggedInMode ? "Sign Up" : "Login"}
                </button>
                {localStorage.getItem("token") && !isGuest ? (
                    <button className="guestButton" onClick={logoutUser}>Logout</button>
                ) : null}
                <button className="guestButton" onClick={continueGuest}>Continue as Guest</button>
            </div>
        </div>
    );
}
