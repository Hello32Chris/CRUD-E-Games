import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Login({loggedIn, storeLogged, setStoreLoggedIn}) {

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

    // console.log(loggedIn)


    return (
        <div id='login-container'>
            <span >
                {loggedIn ? 
                <Link customers={customers}  to="/Account_Manager"><button className="login-butt" >Account Manager</button></Link>:
                <Link customers={customers}  to="/CustomerLogin"><button className="login-butt" >Login</button></Link>}
                {storeLogged ? <button className="login-butt" onClick={(e) => setStoreLoggedIn(!storeLogged)} >Store Log Out</button> :
                <Link stores={stores} to="/StoreLogin"><button className="login-butt" >StoreLogin</button></Link>}
                <Link to="/Register" ><button className="login-butt">Register New Account</button></Link>
            </span>
        </div>
)};

export default Login