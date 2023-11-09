import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Account from './Account';
import Navbar from './Navbar';
import Login from './Login';
import StoreFront from './StoreFront';
import Inventory from './Inventory';
import Cart from './Cart';
import GameDetails from './GameDetails';
import RegistrationForm from './RegistrationForm';
import StoreLogForm from './StoreLogForm';
import LoginForm from './LoginForm';
import AccountManager from './AccountManager';


function App() {


    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([])
    const [customerArr, setCustomer] = useState([]);
    const [loggedInID, setLoggedInID] = useState(1)
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, []);

    useEffect(() => {
        fetch('/items')
            .then((resp) => resp.json())
            .then(setGames);
    }, []);

    useEffect(() => {
        fetch('/stores')
            .then((resp) => resp.json())
            .then(setStores)
    }, [])

    const filteredCustomerIDs = customerArr.filter((customer) => customer.id === loggedInID).map((customer) => customer.id);

    console.log(loggedInID)

    const [searchTerm, setSearchTerm] = useState("")

    return (
        <>
            <header>
                <img src="./images/updatedheader.png" alt=''></img>
            </header>
            <div>
                <Navbar setSearchTerm={setSearchTerm} gamesArr={games} />
                <Login loggedIn={loggedIn} />
                <Cart customer_id={filteredCustomerIDs} />
            </div>
            <div>
                <Switch>
                    <Route exact path='/Account_Manager'> <AccountManager loggedInID={loggedInID} setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> </Route>
                    <Route exact path="/"><StoreFront searchTerm={searchTerm} gamesArr={games} /></Route>
                    <Route exact path="/games" ><Inventory gamesArr={games} /></Route>
                    <Route exact path="/customers"><Account customerArr={customerArr} stores={stores} /></ Route>
                    <Route exact path="/Register" component={RegistrationForm} />
                    <Route exact path="/CustomerLogin" ><LoginForm setLoggedInID={setLoggedInID} setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> </Route>
                    <Route exact path="/StoreLogin" component={StoreLogForm} />
                </Switch>
            </div>
        </>
    )
};

export default App;