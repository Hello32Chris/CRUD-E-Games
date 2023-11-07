import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Account from './Account';
import Navbar from './Navbar';
import Login from './Login';
import StoreFront from './StoreFront';
import Inventory from './Inventory';


function App() {


    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([])
    const [customerArr, setCustomer] = useState([]);

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, []);
    // console.log(customerArr)
    console.log(customerArr)

    useEffect(() => {
        fetch('/items')
            .then((resp) => resp.json())
            .then(setGames);
    }, []);
    // console.log(games)

    useEffect(() => {
        fetch('/stores')
            .then((resp) => resp.json())
            .then(setStores)
    }, [])

    console.log(stores)


    return (
        <div>
            <h1>We Out Here</h1>
            <Navbar />
            <Login />
            <Switch>
                <Route exact path="/"><Login /></Route>
                <Route exact path="/storefront"><StoreFront/></Route>
                <Route exact path="/games" ><Inventory gamesArr = {games}/></Route>
                <Route exact path="/customers"><Account customerArr = {customerArr} stores = {stores} /></ Route> 
            </Switch>
            <div id='container-1'></div>
            <div id='container-2'></div>
            <div id='container-3'></div>
            <div id='container-4'></div>
        </div>

    )
};

export default App;