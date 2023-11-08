import React, { useState } from "react";

function GameDetails( { description, name, price, quantity, store, type} ){

    const [inCart, setInCart] = useState(false);
  


    const addToCart = () => { 
        setInCart(!inCart);
    }


    return (
    <div className={"card-container"}>
        <div className="card">
            <div className="card-info">
            <h2>{name}</h2>
            <img alt=""/>
            <p>{description}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            <p>{type}</p>
            {/* <p>{store}</p> Uncomment this line to display the store information */}
            {inCart ? (
                <button onClick={addToCart}>Remove from Cart</button>
            ) : (
                <button onClick={addToCart}>Add to Cart</button>
            )}
            </div>
        </div>
    </div>
    );
}

export default GameDetails;

