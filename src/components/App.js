import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Account from './Account';
import Navbar from './Navbar';
import Login from './Login';
import StoreFront from './StoreFront';
import Inventory from './Inventory';
import GameDetails from './GameDetails';


function App() {


    const [games, setGames] = useState([]);
    const [stores, setStores] = useState([])
    const [customerArr, setCustomer] = useState([]);

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
    console.log(stores)



    return (
        <>
        <header>
            <img src="./images/updatedheader.png"></img>
        </header>
        <div>
            <h1>We Out Here</h1>
            <Navbar />
            <Login />
            <Switch>
                <Route exact path="/"><StoreFront gamesArr = {games}/></Route>
                <Route exact path="/games" ><Inventory gamesArr = {games}/></Route>
                <Route exact path="/customers"><Account customerArr = {customerArr} stores = {stores} /></ Route> 
            </Switch>
        </div>
        </>
    )
};

export default App;