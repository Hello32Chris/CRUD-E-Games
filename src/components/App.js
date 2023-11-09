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
import About from './About';
import CartImage from './CartImage';


function App() {


    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([])
    const [customerArr, setCustomer] = useState([]);
    const [loggedInID, setLoggedInID] = useState(1)
    const [loggedIn, setLoggedIn] = useState(false)
    const [searchTerm, setSearchTerm] = useState("")
    const [storeLogged, setStoreLoggedIn] = useState(false)

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, [storeLogged]);

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

    // console.log(loggedInID)

    console.log(storeLogged)
    return (
        <>
            <header>
                <img src="./images/updatedheader.png" alt=''></img>
            </header>
            <div id='bannerdiv'>
                <Navbar storeLogged={storeLogged} setSearchTerm={setSearchTerm} gamesArr={games} />
                <Login loggedIn={loggedIn} storeLogged={storeLogged} setStoreLoggedIn={setStoreLoggedIn} />
                <Cart customer_id={filteredCustomerIDs[0]} />
            </div>
            <div id='maindiv'>
                <Switch>
                    <Route exact path='/Account_Manager'> <AccountManager loggedInID={loggedInID} setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> </Route>
                    <Route exact path="/"><StoreFront searchTerm={searchTerm} gamesArr={games} /></Route>
                    <Route exact path="/games" ><Inventory gamesArr={games} /></Route>
                    <Route exact path="/customers"><Account customerArr={customerArr} stores={stores} /></ Route>
                    <Route exact path="/Register" component={RegistrationForm} />
                    <Route exact path="/CustomerLogin" ><LoginForm setLoggedInID={setLoggedInID} setLoggedIn={setLoggedIn} loggedIn={loggedIn} /> </Route>
                    <Route exact path="/StoreLogin"><StoreLogForm storeLogged={storeLogged} setStoreLoggedIn={setStoreLoggedIn} /></Route> 
                    <Route exact path="/About" component={About} />
                    <Route exact path="/cart" component={CartImage} />
                
                </Switch>
            </div>
        </>
    )
};

export default App;