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
        <div className="loginform">
            <div className="centered-content">
                <h1 className="login">Store Login</h1>
                <br />
                <div id="regform">
                    Email: <input
                        className="reginput"
                        type="text"
                        placeholder="Enter valid email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    Password:<input
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

export default StoreLogForm