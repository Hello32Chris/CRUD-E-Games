import { Route, Switch } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import Navbar from './Navbar';
import Login from './Login';
import StoreFront from './StoreFront';
import Inventory from './Inventory';


function App() {


    const [vomato, vumato] = useState([]);

    useEffect(() => {
        fetch('/customers')
            .then((resp) => resp.json())
            .then(vumato);
    }, []);

    console.log(vomato)
    const [tomato, tumato] = useState([]);

    useEffect(() => {
        fetch('/items')
            .then((resp) => resp.json())
            .then(tumato);
    }, []);

    console.log(tomato)


    return (
        <div>
            <h1>We Out Here</h1>
            <Navbar />
            <Switch>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/storefront" element={<StoreFront />} />
                <Route exact path="/games" element={<Inventory />} />
            </Switch>
        </div>
    )
};

export default App;