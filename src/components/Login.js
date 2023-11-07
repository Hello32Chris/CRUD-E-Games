import React, { useState, useEffect } from "react";
import LoginStatus from "./LoginStatus";


function Login() {

    const [loginState, setLoginState] = useState(false)
    const [customers, setCustomer] = useState([]);

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, []);

    const enterLogin = () => {
        setLoginState(!loginState)
    }
    console.log(customers)

    const logMeIn = (loginState ? <LoginStatus customers ={customers} /> : null)

    return <div>
        <span >
            <button id="login-button" onClick={enterLogin}>Login</button>
            {logMeIn}
        </span>
    </div>
}

export default Login