import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function LoginForm({setLoggedInID, setLoggedIn, loggedIn}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validLogin, setValidLogin] = useState(false)
    const history = useHistory()

    
    const handleLogin = async () => {
        try{
            const response = await fetch('/customers') // Fetch customer data
            const customerData = await response.json()
            const customer = customerData.find((customer) => customer.user_name === username);
            
            
            if (customer && customer.password === password) {
                // Valid login
                console.log('Login successful')
                console.log(customer.id)
                setLoggedIn(!loggedIn)
                setLoggedInID(customer.id)
                history.push('/Account_Manager')
            } else {
                // Invalid login
                setValidLogin('Invalid username or password');
            }
            
        } catch (error) {
            console.error('Error fetching customer data', error);
        };
    };


    return (
        <div className="loginform">
            <div className="centered-content">
                <h1 className="login">Login</h1>
                <br />
                <div id="regform">
                    Username: <input
                        className="reginput"
                        type="text"
                        placeholder="UserName"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br/>
                    Password: <input
                        className="reginput"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />
                    <button id="register" onClick={handleLogin}>Login</button>
                    {validLogin && <p>{validLogin}</p>}
                </div>
            </div>
        </div>
    )
}


export default LoginForm