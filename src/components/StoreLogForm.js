import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StoreLogForm({ setStoreLoggedIn, storeLogged }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validLogin, setValidLogin] = useState(false)
    const history = useHistory()


    const handleLogin = async () => {
        try {
            const response = await fetch('/stores') // Fetch customer data
            const storeData = await response.json()
            const store = storeData.find((store) => store.email === email)

            if (store && store.password === password) {
                // Valid login
                console.log('Login successful');
                setStoreLoggedIn(!storeLogged)
                // && alert('You Have Successfully Logged in!')
                history.push('/customers')
            } else {
                // Invalid login
                setValidLogin('Invalid email or password');
            }
        } catch (error) {
            console.error('Error fetching store data', error);
        };
    };
    console.log(storeLogged)



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