import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Account from './Account';
import Navbar from './Navbar';
import Login from './Login';
import StoreFront from './StoreFront';
import Inventory from './Inventory';


function App() {


    const [games, setGames] = useState([]);
    const [customerArr, setCustomer] = useState([]);

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(setCustomer);
    }, []);
    console.log(customerArr)

    useEffect(() => {
        fetch('/items')
            .then((resp) => resp.json())
            .then(setGames);
    }, []);
    // console.log(games)


    return (
        <div>
            <h1>We Out Here</h1>
            <Navbar />
            <Switch>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/storefront" element={<StoreFront />} />
                <Route exact path="/games" element={<Inventory gamesArr = {games}/>} />
                <Route exact path="/customers"><Account customerArr = {customerArr}/></ Route> 
            </Switch>
            <div id='container-1'></div>
            <div id='container-2'></div>
            <div id='container-3'></div>
            <div id='container-4'></div>
        </div>

    )
};

export default App;