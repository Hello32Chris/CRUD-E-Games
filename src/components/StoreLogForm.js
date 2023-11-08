import React, { useState } from "react";

function StoreLogForm() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validLogin, setValidLogin] = useState(false)

    const handleLogin = () => {
        fetch('/store') // Fetch customer data
            .then((response) => response.json())
            .then((storeData) => {
                const customer = storeData.find((store) => store.email === email);

                if (customer && customer.password === password) {
                    // Valid login
                    console.log('Login successful');
                } else {
                    // Invalid login
                    setValidLogin('Invalid email or password');
                }
            })
            .catch((error) => {
                console.error('Error fetching store data', error);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter valid email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

export default StoreLogForm