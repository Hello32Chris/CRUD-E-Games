import React, { useState } from "react";

function LoginForm() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validLogin, setValidLogin] = useState(false)

    const handleLogin = () => {
        fetch('/customers') // Fetch customer data
            .then((response) => response.json())
            .then((customerData) => {
                const customer = customerData.find((customer) => customer.user_name === username);

                if (customer && customer.password === password) {
                    // Valid login
                    console.log('Login successful');
                } else {
                    // Invalid login
                    setValidLogin('Invalid username or password');
                }
            })
            .catch((error) => {
                console.error('Error fetching customer data', error);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {validLogin && <p>{validLogin}</p>}
        </div>
    )
}

export default LoginForm