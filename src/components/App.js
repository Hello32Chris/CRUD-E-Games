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


function App() {


    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([])
    const [customerArr, setCustomer] = useState([]);
    const [loggedInID, setLoggedInID] = useState(1)

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

    console.log(filteredCustomerIDs)



    return (
        <>
            <header>
                <img src="./images/updatedheader.png" alt=''></img>
            </header>
            <div>
                <h1>We Out Here</h1>
                <Navbar />
                <Login />
                <Cart customer_id = {filteredCustomerIDs}/>
                <Switch>
                    <Route exact path="/"><StoreFront gamesArr = {games}/></Route>
                    <Route exact path="/games" ><Inventory gamesArr={games} /></Route>
                    <Route exact path="/customers"><Account customerArr={customerArr} stores={stores} /></ Route>
                    <Route exact path="/Register" component={RegistrationForm} />
                    <Route exact path="/CustomerLogin" component={LoginForm} />
                    <Route exact path="/StoreLogin" component={StoreLogForm} />
                </Switch>
            </div>
        </>
    )
};

export default App;