import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import React, { useState, useEffect } from "react";

import React from "react";

function App() {


    const [tomato, tumato] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:3001/deeznuts')
      .then((res) => res.json())
      .then((data) => tumato(data));
    }, []);


    return (
        <div>
            <h1>We Out Here</h1>
            <Router>
                <Navbar />
                <Route exact path="/" element={<Login />} />
                <Route exact path="/storefront" element={<StoreFront />} />
                <Route exact path="" element={<Inventory />} />
            </Router>
        </div>
)};

export default App;