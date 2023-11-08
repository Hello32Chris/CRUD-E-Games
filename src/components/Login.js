import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Login() {

    const [customers, setCustomer] = useState([]);
    const [stores, setStores] = useState([]);


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


    return (
        <div id='login-container'>
            <span >
                <Link customers={customers}  to="/CustomerLogin"><button className="login-butt" >Login</button></Link>
                <Link stores={stores} to="/StoreLogin"><button className="login-butt" >StoreLogin</button></Link>
                <Link to="/Register" ><button className="login-butt">Register New Account</button></Link>
            </span>
        </div>
)};

export default Login