import React, {useState} from "react";
import StoreFront from "./StoreFront";

function HomeGames( { description, name, price, quantity, store, type, img } ){
    console.log(name)


return (
            <div className="home-game-card">
                <div className="home-game-info">
                    <img src={img} alt = {name}/>
                    <h1>{name}</h1>
                    <h3>{type}</h3>
                    <h6>price: ${price.toFixed(2)}</h6>
                    <p>{quantity}</p>
                    
                </div>
            </div>
)}

export default HomeGames