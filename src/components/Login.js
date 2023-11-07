import React, { useState, useEffect } from "react";
import LoginStatus from "./LoginStatus";
import StoreLogins from "./StoreLogins"
import RegistrationForm from "./RegistrationForm";


function Login() {

    const [loginState, setLoginState] = useState(false)
    const [loginStore, setLoginStore] = useState(false)
    const [customers, setCustomer] = useState([]);
    const [stores, setStores] = useState([]);
    const [showRegistrationForm, setShowRegistrationForm] = useState(false)

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, []);
    useEffect(() => {
        fetch('/stores')
            .then((resp) => resp.json())
            .then(setStores);
    }, []);

    const enterLogin = () => {
        setLoginState(!loginState)
    }
    const storeLogin = () => {
        setLoginStore(!loginStore)
    }
    console.log(customers)

    const storeLog = (loginStore ? <StoreLogins stores={stores} /> : null)

    const logMeIn = (loginState ? <LoginStatus customers={customers} /> : null)

    const registrationForm = showRegistrationForm ? <RegistrationForm /> : null;

    const enterRegister = () => {
        setShowRegistrationForm(!showRegistrationForm)
    }

    return (
        <div id='login-container'>
            <span >
                <button className="login-button" onClick={enterLogin}>Login</button>
                {logMeIn}
                <button className="login-button" onClick={storeLogin}>StoreLogin</button>
                {storeLog}
                <button className="login-button" onClick={enterRegister}>Register New Account</button>
                {registrationForm}
            </span>
        </div>
)};

export default Login